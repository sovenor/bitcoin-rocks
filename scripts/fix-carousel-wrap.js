/**
 * fix-carousel-wrap.js
 * Replaces inline carousel scroll handlers in inflation.html with
 * scrollCarousel(this, direction) calls, and adds the helper function
 * that wraps around at both ends.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'inflation.html');
let html = fs.readFileSync(file, 'utf8');

// Replace left arrow onclick (scrollBy with negative left)
const leftOld = `onclick="this.closest('.whats-next-section').querySelector('.whats-next-carousel').scrollBy({left:-440,behavior:'smooth'})"`;
const leftNew = `onclick="scrollCarousel(this,-1)"`;

// Replace right arrow onclick (scrollBy with positive left)
const rightOld = `onclick="this.closest('.whats-next-section').querySelector('.whats-next-carousel').scrollBy({left:440,behavior:'smooth'})"`;
const rightNew = `onclick="scrollCarousel(this,1)"`;

const leftCount = (html.match(new RegExp(leftOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
const rightCount = (html.match(new RegExp(rightOld.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;

html = html.split(leftOld).join(leftNew);
html = html.split(rightOld).join(rightNew);

// Add the scrollCarousel helper function before </body>
const scriptBlock = `
    <!-- Carousel wrap-around helper -->
    <script>
    function scrollCarousel(btn, dir) {
        var c = btn.closest('.whats-next-section').querySelector('.whats-next-carousel');
        var scrollAmount = 440;
        if (dir > 0) {
            // Scrolling right — if at or near end, wrap to beginning
            if (c.scrollLeft >= c.scrollWidth - c.clientWidth - 10) {
                c.scrollTo({ left: 0, behavior: 'smooth' });
                return;
            }
        } else {
            // Scrolling left — if at or near beginning, wrap to end
            if (c.scrollLeft <= 10) {
                c.scrollTo({ left: c.scrollWidth, behavior: 'smooth' });
                return;
            }
        }
        c.scrollBy({ left: scrollAmount * dir, behavior: 'smooth' });
    }
    </script>
`;

html = html.replace('    </body>', scriptBlock + '\n    </body>');

fs.writeFileSync(file, html, 'utf8');

console.log(`Left arrow replacements: ${leftCount}`);
console.log(`Right arrow replacements: ${rightCount}`);
console.log('Script block inserted before </body>');
console.log('Done!');
