/**
 * home-carousel.js
 *
 * Powers the two infinite-scroll category carousels on the homepage.
 *
 * Previous approach used a CSS @keyframes animation on
 * `.home-carousel-track` + native overflow scroll for drag. That
 * created two problems:
 *   1) While dragging, users could scroll past the end of the
 *      duplicated set, revealing empty space.
 *   2) Users could not drag backward past the first pill, so pills
 *      that had already auto-scrolled out of view on the left were
 *      unreachable.
 *
 * This version drives scrolling purely from JavaScript using
 * `requestAnimationFrame` + `scrollLeft`, and wraps around when the
 * user (or auto-scroll) crosses the half-way point of the duplicated
 * track. Because every pill appears twice in the DOM (the HTML
 * intentionally duplicates each set), wrapping by `trackWidth/2` is
 * visually invisible — the viewport lands on an identical position.
 *
 * Features:
 *   - Auto-scroll (left-to-right or right-to-left per `data-direction`)
 *   - Infinite loop in both directions (including when dragging)
 *   - Drag-to-scroll (mouse + touch) with momentum-less snap back
 *     to auto-scroll when released
 *   - Pause on hover
 *   - Click-suppression right after a drag so pills don't navigate
 *     accidentally
 *   - Smooth anchor scroll for in-page nav to category sections
 *
 * No scrollbar is ever visible (hidden via CSS on `.home-carousel-row`).
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

            var direction = row.getAttribute('data-direction') === 'right' ? -1 : 1;

            // Drag state
            var isDown = false;
            var startX = 0;
            var startScrollLeft = 0;
            var moved = false;
            var paused = false; // true while user is hovering or dragging

            // RAF state
            var lastTs = 0;

            // Cached track half-width. Recalculated on resize since
            // translated-text can change pill widths on language switch.
            var halfWidth = 0;

            function recalcHalfWidth() {
                // The track contains pills duplicated twice; halving
                // scrollWidth gives the width of one "set".
                halfWidth = track.scrollWidth / 2;
            }

            // Wrap scrollLeft into the "middle" copy so that auto-scroll
            // and drag can both cross the boundary invisibly.
            function wrapScroll() {
                if (!halfWidth) return;
                if (row.scrollLeft >= halfWidth) {
                    row.scrollLeft -= halfWidth;
                } else if (row.scrollLeft < 0) {
                    // Shouldn't normally happen (scrollLeft is always >= 0)
                    // but belt-and-suspenders.
                    row.scrollLeft += halfWidth;
                }
            }

            // Initial placement: start halfway through so we can scroll
            // either direction immediately without hitting scrollLeft=0.
            function initPosition() {
                recalcHalfWidth();
                // Put the starting position at 0 for leftward scrolling
                // rows (they scroll forward = scrollLeft increases), and
                // at halfWidth for rightward-scrolling rows (they move
                // scrollLeft down toward 0, then wrap up to halfWidth).
                if (direction === 1) {
                    row.scrollLeft = 0;
                } else {
                    row.scrollLeft = halfWidth;
                }
            }

            function tick(ts) {
                if (!lastTs) lastTs = ts;
                var dt = (ts - lastTs) / 1000; // seconds
                lastTs = ts;

                if (!paused && !isDown && halfWidth > 0) {
                    var delta = AUTO_SPEED_PX_PER_SEC * dt * direction;
                    row.scrollLeft += delta;
                    // Wrap cleanly in either direction.
                    if (row.scrollLeft >= halfWidth) {
                        row.scrollLeft -= halfWidth;
                    } else if (row.scrollLeft <= 0) {
                        row.scrollLeft += halfWidth;
                    }
                }

                requestAnimationFrame(tick);
            }

            // ── Hover pause ──
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
                startScrollLeft = row.scrollLeft;
                row.classList.add('is-dragging');
            });

            row.addEventListener('mouseup', function () {
                isDown = false;
                row.classList.remove('is-dragging');
            });

            row.addEventListener('mousemove', function (e) {
                if (!isDown) return;
                var x = e.pageX;
                var walk = (x - startX) * 1.2;
                if (Math.abs(walk) > 3) {
                    moved = true;
                    e.preventDefault();
                }
                row.scrollLeft = startScrollLeft - walk;
                wrapScroll();
                // Keep startScrollLeft in sync with any wrap so the drag
                // delta stays continuous.
                startScrollLeft = row.scrollLeft;
                startX = x;
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
            // We let the browser's native scroll handle touch, but still
            // wrap-around after each scroll event so infinite loop works.
            row.addEventListener('touchstart', function () {
                paused = true;
                isDown = true;
                moved = false;
            }, { passive: true });

            row.addEventListener('touchend', function () {
                paused = false;
                isDown = false;
            }, { passive: true });

            row.addEventListener('touchcancel', function () {
                paused = false;
                isDown = false;
            }, { passive: true });

            // Wrap-around on any scroll event (catches native touch
            // scroll, wheel scroll, keyboard scroll, etc.).
            row.addEventListener('scroll', function () {
                wrapScroll();
            }, { passive: true });

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
                wrapScroll();
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
