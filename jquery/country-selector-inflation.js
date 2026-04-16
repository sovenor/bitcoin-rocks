// Global variable to store selected currency
  let selectedCurrency = 'USD'; // Default currency

  $(function() {
    $('.inflation-button').not('.show-all-button').click(function() {
      // Update selected currency
      selectedCurrency = $(this).data('id');

      // Track currency selection in Google Analytics
      if (typeof gtag === 'function') {
        gtag('event', 'select_currency', {
          'event_category': 'inflation',
          'event_label': selectedCurrency
        });
      }

      // Hide and show country elements
      $('.countries').hide();
      $('#' + $(this).data('id')).show();

      // Show the shared FAQ + CTA section
      $('#shared-faq-cta').show();

      // Hide all other currency buttons
      $('.inflation-button').not(this).not('.show-all-button').hide();

      // Hide the "Choose your money..." text
      $('.choose').hide();

      // Switch show-all-button text to "Choose a different money"
      $('.show-all-button .choose-initial').hide();
      $('.show-all-button .choose-back').show();

      // Scroll to top of the page
      animateScrollBy(0, 500);
    });

    $('.show-all-button').click(function() {
      // Only act as reset if a currency has been selected (back text is visible)
      if ($('.show-all-button .choose-back').is(':visible')) {
        // Hide all country sections
        $('.countries').hide();

        // Hide the shared FAQ + CTA section
        $('#shared-faq-cta').hide();

        // Show all currency buttons and the "Choose your money..." text
        $('.inflation-button').show();
        $('.show-all-button .choose-back').hide();
        $('.show-all-button .choose-initial').show();
        $('.choose').show();

        // Scroll to top of the page
        animateScrollBy(0, 500);
      }
    });

    // FAQ Accordion toggle
    $(document).on('click', '.inflation-faq-question', function() {
      var $question = $(this);
      var $answer = $question.next('.inflation-faq-answer');
      var $arrow = $question.find('.inflation-faq-arrow');
      var isOpen = $answer.hasClass('open');

      // Close all other open answers
      $('.inflation-faq-answer.open').not($answer).removeClass('open');
      $('.inflation-faq-question.active').not($question).removeClass('active').attr('aria-expanded', 'false');
      $('.inflation-faq-question.active').not($question).find('.inflation-faq-arrow').css('transform', 'rotate(0deg)');

      // Toggle current
      if (isOpen) {
        $answer.removeClass('open');
        $question.removeClass('active').attr('aria-expanded', 'false');
        $arrow.css('transform', 'rotate(0deg)');
      } else {
        $answer.addClass('open');
        $question.addClass('active').attr('aria-expanded', 'true');
        $arrow.css('transform', 'rotate(90deg)');
      }
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
