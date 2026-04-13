/**
 * Inflation Stats Client
 * 
 * Fetches live data from forms.bitcoin.rocks/api/inflation-stats
 * and populates stat card elements on the inflation page.
 * Shows fallback values immediately, then updates with live data.
 */

(function() {
  'use strict';

  var API_URL = 'https://forms.bitcoin.rocks/api/inflation-stats';

  // Populate a stat card element with data
  function updateCard(id, value) {
    var el = document.getElementById(id);
    if (el && value) {
      el.textContent = value;
    }
  }

  // Calculate percent change between two numbers
  function percentChange(baseline, current) {
    if (!baseline || !current) return '';
    var change = ((parseFloat(current) - parseFloat(baseline)) / parseFloat(baseline)) * 100;
    return '+' + Math.round(change) + '% increase';
  }

  // Fetch stats and update all cards
  function loadStats() {
    fetch(API_URL)
      .then(function(res) {
        if (!res.ok) throw new Error('API returned ' + res.status);
        return res.json();
      })
      .then(function(data) {
        // Hero stat cards (Bitcoin gain / Dollar loss)
        updateCard('stat-btc-change', data.btcChange4yr + '%');
        updateCard('stat-usd-inflation', data.usdInflation4yr + '%');

        // M1 Money Supply comparison card
        updateCard('stat-m1-baseline', '$' + data.m1BaselineTrillions + ' trillion');
        updateCard('stat-m1-current', '$' + data.m1SupplyTrillions + ' trillion');
        updateCard('stat-m1-change', percentChange(data.m1BaselineTrillions, data.m1SupplyTrillions));

        // National Debt comparison card
        updateCard('stat-debt-baseline', '$' + data.debtBaselineTrillions + ' trillion');
        updateCard('stat-debt-current', '$' + data.nationalDebtTrillions + ' trillion');
        updateCard('stat-debt-change', percentChange(data.debtBaselineTrillions, data.nationalDebtTrillions));

        // Bitcoin supply cards
        updateCard('stat-btc-mined', data.bitcoinMined + ' million');
        updateCard('stat-btc-percent', data.bitcoinPercentMined + '%');
      })
      .catch(function(err) {
        console.warn('[inflation-stats] Failed to load live data, using fallbacks:', err.message);
        // Fallback values are already in the HTML, so nothing to do on error
      });
  }

  // Load stats when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadStats);
  } else {
    loadStats();
  }

  // FAQ Accordion functionality
  $(function() {
    $('.inflation-faq-question').on('click', function() {
      var $this = $(this);
      var $content = $this.next('.inflation-faq-answer');
      var $arrow = $this.find('.inflation-faq-arrow');

      // Toggle this panel
      $this.toggleClass('active');
      $content.toggleClass('open');

      // Rotate arrow
      if ($this.hasClass('active')) {
        $arrow.css('transform', 'rotate(180deg)');
      } else {
        $arrow.css('transform', 'rotate(0deg)');
      }
    });
  });
})();
