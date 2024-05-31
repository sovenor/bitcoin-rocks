// Function to set calculate button value with translation string using jquery.i18n
function setButtonValue() {
    $('.calculateButton').val($.i18n('common_calculate_button_text'));
}

function calculateInflation(){
  // Get browser language (+ region)
  var browserLang = navigator.language || navigator.userLanguage;
  var browserLangCode = browserLang.split('-')[0]; // Get language code without region

  // Get selected language from localStorage or default to browser language or English
  var storedLang = localStorage.getItem('selectedLanguage');
  var lang = storedLang || browserLangCode || 'en';

  // Choose number locale: (browser lang = selected lang) => user's regional format; otherwise language's default format
  var numberLocale = (browserLangCode == lang) ? browserLang : lang;

  // Get user inputs
  var currentSalary = document.getElementById('currentSalary').value;
  var inflationRate = document.getElementById('inflationRate').value;
  var years = document.getElementById('years').value;

  // Validate user inputs
  if(currentSalary == '' || inflationRate == '' || years == ''){
     document.getElementById('result').innerHTML = $.i18n('common_error_message');
  } else {
    // Calculate inflation
    var totalInflation = Math.pow((1 + (inflationRate/100)), years);
    var dollarSalary = (currentSalary * 1).toLocaleString(numberLocale, {style: "currency", currency: "USD"});
    var newSalary = (currentSalary * totalInflation).toLocaleString(numberLocale, {style: "currency", currency: "USD"});

    // Display result
    var yearText = (years == 1) ?  $.i18n('common_year') : $.i18n('common_years');
    document.getElementById('result').innerHTML = $.i18n('common_result_message_1') + "&nbsp;" + inflationRate + "% " +  $.i18n('common_result_message_2') + "&nbsp;" + dollarSalary + "&nbsp;" + $.i18n('common_result_message_3') + "&nbsp;" + newSalary + "&nbsp;" + $.i18n('common_result_message_in') + "&nbsp;" + years + " " + yearText + "&nbsp;" + $.i18n('common_result_message_4');
  }

}
