/**
 * home-carousel.js
 *
 * Powers the two infinite-scroll category carousels on the homepage.
 * The scrolling itself is driven by a CSS @keyframes animation on
 * `.home-carousel-track` (see css/style.css → "HOMEPAGE REVAMP").
 * The animation pauses automatically via CSS `:hover`.
 *
 * This script adds two enhancements:
 *   1. Drag-to-scroll (mouse + touch) — users can grab a row and
 *      fling it. While dragging, the CSS animation is paused via
 *      a `.is-dragging` class and native scrollLeft is manipulated.
 *   2. Smooth scroll when a pill is clicked — offsets for the
 *      fixed nav so the target section lands below it.
 *
 * No scrollbar is ever shown (hidden via CSS on `.home-carousel-row`).
 */
(function () {
    'use strict';

    function initCarousels() {
        var rows = document.querySelectorAll('.home-carousel-row');
        if (!rows.length) return;

        rows.forEach(function (row) {
            var isDown = false;
            var startX = 0;
            var startScrollLeft = 0;
            var moved = false;

            function pause() {
                row.classList.add('is-dragging');
            }
            function resume() {
                row.classList.remove('is-dragging');
            }

            // ── Mouse drag ──
            row.addEventListener('mousedown', function (e) {
                isDown = true;
                moved = false;
                startX = e.pageX - row.offsetLeft;
                startScrollLeft = row.scrollLeft;
                pause();
            });

            row.addEventListener('mouseleave', function () {
                if (isDown) {
                    isDown = false;
                    resume();
                }
            });

            row.addEventListener('mouseup', function () {
                isDown = false;
                resume();
            });

            row.addEventListener('mousemove', function (e) {
                if (!isDown) return;
                var x = e.pageX - row.offsetLeft;
                var walk = (x - startX) * 1.2;
                if (Math.abs(walk) > 3) {
                    moved = true;
                    e.preventDefault();
                }
                row.scrollLeft = startScrollLeft - walk;
            });

            // ── Prevent click navigation immediately after a drag ──
            row.addEventListener('click', function (e) {
                if (moved) {
                    e.preventDefault();
                    e.stopPropagation();
                    moved = false;
                }
            }, true);

            // ── Touch drag (iOS/Android) ──
            // On touch we let the browser handle scroll natively — but
            // we still add `is-dragging` so the animation pauses while
            // the user is actively scrolling.
            row.addEventListener('touchstart', pause, { passive: true });
            row.addEventListener('touchend', resume, { passive: true });
            row.addEventListener('touchcancel', resume, { passive: true });
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
