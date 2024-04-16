$(function() {
  'use strict';

  // Initialize i18n
  var i18n = $.i18n();

  // Get selected language from localStorage or default to English
  var lang = localStorage.getItem('selectedLanguage') || 'en';

  // Set locale
  i18n.locale = lang;

  // Function to load translations
  function loadTranslations(currentPage, directoryPath, callback1, callback2) {
    // Remove leading slash from directoryPath if present
    directoryPath = directoryPath.replace(/^\//, '');
    // Get the root URL
    var rootURL = window.location.origin;
    // Load common translations
  i18n.load(rootURL + '/i18n/' + i18n.locale + '/common_' + i18n.locale + '.json', i18n.locale).done(function() {
    // Construct file path based on directory path
    var filePath = directoryPath ? directoryPath + '/' + currentPage : currentPage;
    // Load page-specific translations based on the current page
    i18n.load(rootURL + '/i18n/' + i18n.locale + '/' + filePath + '_' + i18n.locale + '.json', i18n.locale).done(function() {
      // Apply translations to elements with data-i18n attribute
      $('[data-i18n]').each(function() {
        var $this = $(this);
        var key = $this.data('i18n');
        $this.text($.i18n(key));
      });
      //This is necessary for button text to load from translation strings.
      callback1();
      //This is necessary for dynamic headers on inflation.html based on which sticker QR code was scanned.
      callback2();
      });
    });
  }

  // Get the current page dynamically from the URL
  var currentPage = window.location.pathname.split('/').pop().replace('.html', '');

  // If the current page is the homepage, set currentPage to 'index'
  if (currentPage === '') {
    currentPage = 'index';
  }

  // Get directory path
  var directoryPath = window.location.pathname.split('/').slice(0, -1).join('/');

  // Load translations
  loadTranslations(currentPage, directoryPath, function() {
    // First callback function
    // This function will be called once translations are loaded
    //This is necessary for button text on the compound inflation calculator to load on all 15 currency pages from translation strings.
    setButtonValue();
  }, function() {
    // Second callback function
    // This function will be called once translations are loaded
    //This is necessary for dynamic headers on inflation.html based on which sticker QR code was scanned.
    setDynamicHeader();
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
