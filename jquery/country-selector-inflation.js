// Global variable to store selected currency
  let selectedCurrency = 'USD'; // Default currency

  $(function() {
    $('.inflation-button').not('.show-all-button').click(function() {
      // Update selected currency
      selectedCurrency = $(this).data('id');

      // Hide and show country elements
      $('.countries').hide();
      $('#' + $(this).data('id')).show();

      // Hide all other currency buttons
      $('.inflation-button').not(this).not('.show-all-button').hide();

      // Hide the "Choose your money..." text
      $('.choose').hide();

      // Show the "Choose another money" button
      $('.show-all-button').show();

      // Scroll to top of the page
      animateScrollBy(0, 500);
    });

    $('.show-all-button').click(function() {
      // Hide all country sections
      $('.countries').hide();

      // Hide the "Choose another money" button
      $('.show-all-button').hide();

      // Show all currency buttons and the "Choose your money..." text
      $('.inflation-button').show();
      $('.show-all-button').hide();
      $('.choose').show();

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
