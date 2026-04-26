"use client";

import { useEffect, useRef } from "react";

/**
 * Home carousel — horizontal infinite-scroll track of pills.
 *
 * Ports the behavior of the legacy `jquery/home-carousel.js`:
 *   - Auto-scroll at ~30 px/s in the direction specified (`left` or `right`).
 *   - Track is rendered by the parent with pills duplicated 2× in the DOM
 *     (identical set twice) so this component just wraps the offset around
 *     half the track's scrollWidth and the seam is invisible.
 *   - Drag-to-scroll (mouse + touch); click suppression right after a drag.
 *   - Hover pauses auto-scroll; touch-horizontal swipes intercept the gesture
 *     while vertical swipes pass through to the page.
 *   - Trackpad horizontal wheel / shift+vertical wheel drives the same
 *     offset model so Mac trackpad users can sideways-scroll too.
 *
 * Why CSS @keyframes isn't enough:
 *   A pure-CSS animation can auto-scroll but can't accept user drag input,
 *   and there's no way to seamlessly wrap `scrollLeft` with CSS alone.
 *   `transform: translate3d(offset, 0, 0)` accepts any float value, so the
 *   offset can freely cross ±halfWidth in either direction and we rewrite
 *   it after each wrap — no visible jump because the duplicated pills align
 *   exactly at the boundary.
 */

const AUTO_SPEED_PX_PER_SEC = 30;

export function HomeCarousel({
	direction = "left",
	children,
}: {
	direction?: "left" | "right";
	children: React.ReactNode;
}) {
	const rowRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const row = rowRef.current;
		const track = trackRef.current;
		if (!row || !track) return;

		// dir=+1 → track moves leftward (offset decreases with time).
		// dir=-1 → track moves rightward (offset increases toward 0).
		const dir = direction === "right" ? -1 : 1;

		let halfWidth = 0;
		let offset = 0;
		let paused = false;
		let isDown = false;
		let moved = false;
		let startX = 0;
		let startOffset = 0;
		let lastTs = 0;
		let rafId: number | null = null;

		// Touch state
		let touchStartX = 0;
		let touchStartY = 0;
		let touchStartOffset = 0;
		let touchHorizontal = false;

		let wheelResumeTimer: ReturnType<typeof setTimeout> | null = null;

		function wrap() {
			if (halfWidth <= 0) return;
			while (offset <= -halfWidth) offset += halfWidth;
			while (offset > 0) offset -= halfWidth;
		}

		function apply() {
			if (track) {
				track.style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		}

		function recalc() {
			if (!track) return;
			halfWidth = track.scrollWidth / 2;
			wrap();
			apply();
		}

		function initPosition() {
			recalc();
			offset = dir === -1 ? -halfWidth / 2 : -0.001;
			wrap();
			apply();
		}

		function tick(ts: number) {
			if (!lastTs) lastTs = ts;
			let dt = (ts - lastTs) / 1000;
			lastTs = ts;
			if (dt > 0.1) dt = 0.1;

			if (!paused && !isDown && halfWidth > 0) {
				offset -= AUTO_SPEED_PX_PER_SEC * dt * dir;
				wrap();
				apply();
			}

			rafId = requestAnimationFrame(tick);
		}

		// ── Hover pause (desktop) ──
		function onMouseEnter() {
			paused = true;
		}
		function onMouseLeave() {
			paused = false;
			if (isDown) {
				isDown = false;
				row?.classList.remove("is-dragging");
			}
		}

		// ── Mouse drag ──
		function onMouseDown(e: MouseEvent) {
			isDown = true;
			moved = false;
			startX = e.pageX;
			startOffset = offset;
			row?.classList.add("is-dragging");
			e.preventDefault();
		}

		function onWindowMouseUp() {
			if (isDown) {
				isDown = false;
				row?.classList.remove("is-dragging");
			}
		}

		function onWindowMouseMove(e: MouseEvent) {
			if (!isDown) return;
			const walk = (e.pageX - startX) * 1.2;
			if (Math.abs(walk) > 3) moved = true;
			offset = startOffset + walk;
			wrap();
			startOffset = offset;
			startX = e.pageX;
			apply();
		}

		function onCapturedClick(e: MouseEvent) {
			if (moved) {
				e.preventDefault();
				e.stopPropagation();
				moved = false;
			}
		}

		// ── Touch drag ──
		function onTouchStart(e: TouchEvent) {
			if (!e.touches || !e.touches.length) return;
			paused = true;
			isDown = true;
			moved = false;
			touchHorizontal = false;
			touchStartX = e.touches[0]!.pageX;
			touchStartY = e.touches[0]!.pageY;
			touchStartOffset = offset;
		}

		function onTouchMove(e: TouchEvent) {
			if (!isDown || !e.touches || !e.touches.length) return;
			const dx = e.touches[0]!.pageX - touchStartX;
			const dy = e.touches[0]!.pageY - touchStartY;
			if (!touchHorizontal) {
				if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
					touchHorizontal = Math.abs(dx) > Math.abs(dy);
					if (!touchHorizontal) {
						// vertical swipe — let the page scroll.
						isDown = false;
						paused = false;
						return;
					}
				} else {
					return;
				}
			}
			if (Math.abs(dx) > 3) moved = true;
			offset = touchStartOffset + dx;
			wrap();
			touchStartOffset = offset;
			touchStartX = e.touches[0]!.pageX;
			apply();
			if (e.cancelable) e.preventDefault();
		}

		function onTouchEnd() {
			paused = false;
			isDown = false;
			touchHorizontal = false;
		}

		// ── Wheel / trackpad ──
		function onWheel(e: WheelEvent) {
			const dx = e.deltaX;
			const dy = e.deltaY;
			let horizontal = false;
			let delta = 0;
			if (e.shiftKey && Math.abs(dy) > 0) {
				horizontal = true;
				delta = dy;
			} else if (Math.abs(dx) > Math.abs(dy)) {
				horizontal = true;
				delta = dx;
			}
			if (!horizontal) return;

			e.preventDefault();
			paused = true;
			if (wheelResumeTimer) clearTimeout(wheelResumeTimer);
			wheelResumeTimer = setTimeout(() => {
				paused = false;
				wheelResumeTimer = null;
			}, 400);

			offset -= delta;
			wrap();
			apply();
		}

		// Wire up
		row.addEventListener("mouseenter", onMouseEnter);
		row.addEventListener("mouseleave", onMouseLeave);
		row.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onWindowMouseUp);
		window.addEventListener("mousemove", onWindowMouseMove);
		row.addEventListener("click", onCapturedClick, true);
		row.addEventListener("touchstart", onTouchStart, { passive: true });
		row.addEventListener("touchmove", onTouchMove, { passive: false });
		row.addEventListener("touchend", onTouchEnd, { passive: true });
		row.addEventListener("touchcancel", onTouchEnd, { passive: true });
		row.addEventListener("wheel", onWheel, { passive: false });
		window.addEventListener("resize", recalc);

		// Recalculate after fonts load (pill widths can shift when the real
		// Proxima Soft arrives).
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(recalc).catch(() => {});
		}

		initPosition();
		rafId = requestAnimationFrame(tick);

		// One more recalc after images/fonts settle.
		const settleTimer = setTimeout(recalc, 500);

		return () => {
			if (rafId !== null) cancelAnimationFrame(rafId);
			if (wheelResumeTimer) clearTimeout(wheelResumeTimer);
			clearTimeout(settleTimer);
			row.removeEventListener("mouseenter", onMouseEnter);
			row.removeEventListener("mouseleave", onMouseLeave);
			row.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onWindowMouseUp);
			window.removeEventListener("mousemove", onWindowMouseMove);
			row.removeEventListener("click", onCapturedClick, true);
			row.removeEventListener("touchstart", onTouchStart);
			row.removeEventListener("touchmove", onTouchMove);
			row.removeEventListener("touchend", onTouchEnd);
			row.removeEventListener("touchcancel", onTouchEnd);
			row.removeEventListener("wheel", onWheel);
			window.removeEventListener("resize", recalc);
		};
	}, [direction]);

	return (
		<div
			ref={rowRef}
			className="home-carousel-row"
			data-direction={direction}
		>
			<div ref={trackRef} className="home-carousel-track">
				{children}
			</div>
		</div>
	);
}
