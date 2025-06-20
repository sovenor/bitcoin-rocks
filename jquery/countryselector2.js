$(function() {
  $('#countryselector').change(function() {
    // Hide and show country elements
    $('.countries').hide();
    $('#' + $(this).val()).show();

    // Animate scroll
    animateScrollBy(500, 500);
  });
});

function animateScrollBy(distance, duration) {
  const start = window.pageYOffset;
  const end = start + distance;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentScroll = start + (end - start) * progress;
    window.scrollTo(0, currentScroll);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
