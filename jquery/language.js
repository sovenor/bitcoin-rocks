$(function() {
  'use strict';

  // Initialize i18n
  var i18n = $.i18n();

  // Get selected language from localStorage or default to English
  var lang = localStorage.getItem('selectedLanguage') || 'en';

  // Set locale
  i18n.locale = lang;

  // Function to load translations
  function loadTranslations(currentPage, callback) {
    // Load common translations
    i18n.load('i18n/' + i18n.locale + '/common_' + i18n.locale + '.json', i18n.locale).done(function() {
      // Load page-specific translations based on the current page
      i18n.load('i18n/' + i18n.locale + '/' + currentPage + '_' + i18n.locale + '.json', i18n.locale).done(function() {
        // Apply translations to elements with data-i18n attribute
        $('[data-i18n]').each(function() {
          var $this = $(this);
          var key = $this.data('i18n');
          $this.text($.i18n(key));
        });
        //This is necessary for button text to load from translation strings.
        callback();
      });
    });
  }

  // Get the current page dynamically from the URL
  var currentPage = window.location.pathname.split('/').pop().replace('.html', '');

  // If the current page is the homepage, set currentPage to 'index'
  if (currentPage === '') {
    currentPage = 'index';
  }

  // Load translations
  loadTranslations(currentPage, function() {
    // This function will be called once translations are loaded
    //This is necessary for button text to load from translation strings.
    setButtonValue();
});

  // Language switcher
  var languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' }
  ];

  // Create select element
  const el = document.createElement('select');
  el.id = 'language-switcher';
  document.body.appendChild(el);

  // Add languages options
  const languageSwitcher = document.getElementById('language-switcher');
  languages.forEach(language => {
    const option = document.createElement('option');
    option.value = language.code;
    option.textContent = language.name;
    if (language.code === lang) {
      option.selected = true;
    }
    languageSwitcher.appendChild(option);
  });

  // Add event listener to handle language change
  languageSwitcher.addEventListener('change', function() {
    localStorage.setItem('selectedLanguage', this.value);
    location.reload();
  });
});
