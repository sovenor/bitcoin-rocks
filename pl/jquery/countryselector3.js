$(function() {
  $('.inflation-button').click(function() {
    // Hide and show country elements
    $('.countries').hide();
    $('#' + $(this).data('id')).show();

    // Hide all other buttons
    $('.inflation-button').not(this).hide();

    // Scroll to top of the page
    animateScrollBy(0, 500);
  });

  $('.show-all-button').click(function() {
    $('.inflation-button').show();

    // Scroll to top of the page
    animateScrollBy(0, 500);
  });
});

function animateScrollBy(distance, duration) {
  const start = window.pageYOffset;
  const end = distance;
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
