/**
 * home-carousel.js
 *
 * Powers the two infinite-scroll category carousels on the homepage.
 *
 * Rendering strategy:
 *   - The row (`.home-carousel-row`) is a fixed-width viewport with
 *     `overflow: hidden`.
 *   - The track (`.home-carousel-track`) is positioned with
 *     `transform: translate3d(offsetX, 0, 0)` driven by
 *     `requestAnimationFrame`.
 *   - Every pill appears twice in the DOM (the HTML intentionally
 *     duplicates each set). We advance `offset` continuously; whenever
 *     it crosses the boundary ±halfWidth we simply add/subtract
 *     halfWidth and keep going. Because the second set is identical to
 *     the first, the jump is invisible.
 *
 * Why not use native `scrollLeft`?
 *   The previous approach tried to wrap `scrollLeft` around at the
 *   halfway mark, but browsers clamp scrollLeft to [0, maxScroll], so
 *   dragging backward past 0 (or the auto-scroll nudging just below 0)
 *   would get silently clipped. That caused two visible bugs:
 *     1) The right-to-left row sat frozen at load until a manual scroll
 *        bumped it away from the exact boundary.
 *     2) Users couldn't drag back past whatever auto-scroll position
 *        they happened to be at — pills that had auto-scrolled out of
 *        view on the left side were unreachable, making it feel like
 *        the row had "deleted" them.
 *   A transform can freely take any float value, so wrap-around works
 *   perfectly in both directions and the seam is never visible.
 *
 * Features:
 *   - Auto-scroll (left-to-right or right-to-left per `data-direction`)
 *   - True infinite loop in both directions (auto + drag)
 *   - Drag-to-scroll (mouse + touch); release snaps back to auto-scroll
 *   - Pause on hover (desktop)
 *   - Click-suppression right after a drag so pills don't navigate
 *   - Smooth anchor scroll for in-page nav to category sections
 */
(function () {
    'use strict';

    // Pixels-per-second for the auto-scroll. At ~30 px/s a pill takes
    // roughly 5-6 seconds to cross the viewport on a typical laptop.
    var AUTO_SPEED_PX_PER_SEC = 30;

    function initCarousels() {
        var rows = document.querySelectorAll('.home-carousel-row');
        if (!rows.length) return;

        rows.forEach(function (row) {
            var track = row.querySelector('.home-carousel-track');
            if (!track) return;

            // direction = +1 means track moves leftward (content scrolls
            // right → left, i.e. offset decreases); -1 means rightward
            // (offset increases toward 0).
            var direction = row.getAttribute('data-direction') === 'right' ? -1 : 1;

            // Drag state
            var isDown = false;
            var startX = 0;
            var startOffset = 0;
            var moved = false;
            var paused = false; // true while user is hovering or dragging

            // RAF state
            var lastTs = 0;

            // Current transform offset in px. Always kept in (-halfWidth, 0]
            // after wrap so the visible portion of the track is always
            // inside the duplicated region.
            var offset = 0;

            // Cached track half-width. Recalculated on resize / language
            // change since pill widths can shift.
            var halfWidth = 0;

            function recalcHalfWidth() {
                // The track contains pills duplicated twice; halving
                // scrollWidth gives the width of one "set".
                halfWidth = track.scrollWidth / 2;
                // Also normalize offset back into range in case the
                // half-width shrank beneath it.
                wrap();
                apply();
            }

            // Keep offset in the normalized range (-halfWidth, 0].
            // When the user drags far either way, this can require
            // multiple wraps in a single frame, so use `while` not `if`.
            function wrap() {
                if (halfWidth <= 0) return;
                while (offset <= -halfWidth) offset += halfWidth;
                while (offset > 0) offset -= halfWidth;
            }

            function apply() {
                // translate3d to hint GPU compositing.
                track.style.transform = 'translate3d(' + offset + 'px, 0, 0)';
            }

            // Initial placement. For rightward-scrolling rows we start
            // in the middle of the duplicated track so there's room to
            // scroll rightward immediately; for leftward we start near
            // the left edge of the second copy (offset just below 0).
            function initPosition() {
                recalcHalfWidth();
                offset = (direction === -1) ? -halfWidth / 2 : -0.001;
                wrap();
                apply();
            }

            function tick(ts) {
                if (!lastTs) lastTs = ts;
                var dt = (ts - lastTs) / 1000; // seconds
                lastTs = ts;

                // Clamp dt to avoid giant jumps if the tab was
                // backgrounded for a while.
                if (dt > 0.1) dt = 0.1;

                if (!paused && !isDown && halfWidth > 0) {
                    // direction=+1: track moves leftward → offset decreases.
                    // direction=-1: track moves rightward → offset increases.
                    offset -= AUTO_SPEED_PX_PER_SEC * dt * direction;
                    wrap();
                    apply();
                }

                requestAnimationFrame(tick);
            }

            // ── Hover pause (desktop) ──
            row.addEventListener('mouseenter', function () { paused = true; });
            row.addEventListener('mouseleave', function () {
                paused = false;
                if (isDown) {
                    // user released outside the row
                    isDown = false;
                    row.classList.remove('is-dragging');
                }
            });

            // ── Mouse drag ──
            row.addEventListener('mousedown', function (e) {
                isDown = true;
                moved = false;
                startX = e.pageX;
                startOffset = offset;
                row.classList.add('is-dragging');
                e.preventDefault();
            });

            window.addEventListener('mouseup', function () {
                if (isDown) {
                    isDown = false;
                    row.classList.remove('is-dragging');
                }
            });

            window.addEventListener('mousemove', function (e) {
                if (!isDown) return;
                var walk = (e.pageX - startX) * 1.2;
                offset = startOffset + walk;
                wrap();
                // Keep startOffset / startX in sync with any wrap so
                // the drag delta stays continuous across a wrap.
                startOffset = offset;
                startX = e.pageX;
                apply();
            });

            // Suppress click navigation right after a drag.
            row.addEventListener('click', function (e) {
                if (moved) {
                    e.preventDefault();
                    e.stopPropagation();
                    moved = false;
                }
            }, true);

            // ── Touch drag (iOS/Android) ──
            // We preventDefault only when horizontal movement dominates
            // so that vertical page scroll still works.
            var touchStartX = 0;
            var touchStartY = 0;
            var touchStartOffset = 0;
            var touchHorizontal = false;

            row.addEventListener('touchstart', function (e) {
                if (!e.touches || !e.touches.length) return;
                paused = true;
                isDown = true;
                moved = false;
                touchHorizontal = false;
                touchStartX = e.touches[0].pageX;
                touchStartY = e.touches[0].pageY;
                touchStartOffset = offset;
            }, { passive: true });

            row.addEventListener('touchmove', function (e) {
                if (!isDown || !e.touches || !e.touches.length) return;
                var dx = e.touches[0].pageX - touchStartX;
                var dy = e.touches[0].pageY - touchStartY;
                if (!touchHorizontal) {
                    // Lock axis on first meaningful movement.
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
                touchStartX = e.touches[0].pageX;
                apply();
                // Only prevent default once we know the user is swiping
                // horizontally, to avoid blocking vertical page scroll.
                if (e.cancelable) e.preventDefault();
            }, { passive: false });

            function touchEnd() {
                paused = false;
                isDown = false;
                touchHorizontal = false;
            }
            row.addEventListener('touchend', touchEnd, { passive: true });
            row.addEventListener('touchcancel', touchEnd, { passive: true });

            // Recalculate on resize / orientation change / font load.
            window.addEventListener('resize', recalcHalfWidth);
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(recalcHalfWidth).catch(function(){});
            }

            // Kick things off.
            initPosition();
            requestAnimationFrame(tick);

            // One more recalc after images/fonts settle, in case the
            // initial measurement was off.
            setTimeout(function () {
                recalcHalfWidth();
            }, 500);
        });
    }

    function initAnchorScroll() {
        // Smooth scroll for in-page anchor links (e.g., #money).
        // Uses a fixed 20px offset for breathing room under the nav.
        var anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(function (a) {
            a.addEventListener('click', function (e) {
                var href = a.getAttribute('href');
                if (!href || href === '#' || href.length < 2) return;
                var target = document.getElementById(href.slice(1));
                if (!target) return;
                e.preventDefault();
                var offset = 20;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scroll({ behavior: 'smooth', top: top });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initCarousels();
            initAnchorScroll();
        });
    } else {
        initCarousels();
        initAnchorScroll();
    }
})();
