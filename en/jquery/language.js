$(function() {
  'use strict';
  // Initialize i18n
  var i18n = $.i18n();
  // Get selected language from localStorage or default to English
  var lang = localStorage.getItem('selectedLanguage') || 'en';

  i18n.locale = lang;
  i18n.load( 'i18n/' + i18n.locale + '.json', i18n.locale ).done(
    function () {
      $('[data-i18n]').each(function () {
        var $this = $(this);
        var key = $this.data('i18n');
        $this.text($.i18n(key));
      });
    }
  );

  // Language switcher
  var languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
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
