// Function to set calculate button value with translation string using jquery.i18n
function setButtonValue() {
    $('.calculateButton').val($.i18n('common_calculate_button_text'));
}

function calculateInflation(){
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
    var dollarSalary = (currentSalary * 1).toLocaleString("en-US", {style: "currency", currency: "USD"});
    var newSalary = (currentSalary * totalInflation).toLocaleString("en-US", {style: "currency", currency: "USD"});

    // Display result
    var yearText = (years == 1) ?  $.i18n('common_year') : $.i18n('common_years');
    document.getElementById('result').innerHTML = $.i18n('common_result_message_1') + "&nbsp;" + inflationRate + "% " +  $.i18n('common_result_message_2') + "&nbsp;" + dollarSalary + "&nbsp;" + $.i18n('common_result_message_3') + "&nbsp;" + newSalary + "&nbsp;" + $.i18n('common_result_message_in') + "&nbsp;" + years + " " + yearText + "&nbsp;" + $.i18n('common_result_message_4');
  }

}
