// Function to set calculate button value with translation string using jquery.i18n
function setButtonValue() {
    $('.calculateButton').val($.i18n('common_calculate_button_text'));
}

// Attach click event listener to a common parent element of all buttons
document.addEventListener('click', function(event) {
    // Check if the clicked element has the class 'calculateButton'
    if (event.target.classList.contains('calculateButton')) {
        // Extract the ID of the result div associated with the clicked button
        var resultId = event.target.getAttribute('data-result-id');
        // Extract the ID postfix from the result ID
        var idPostfix = resultId.replace('result', '');
        // Call the calculateInflation function with the result div ID and the postfix
        calculateInflation(resultId, idPostfix);
    }
});

// Function to calculate inflation
function calculateInflation(resultId, idPostfix) {
    // Get user inputs
    var currentSalary = document.getElementById('currentSalary' + idPostfix).value;
    var inflationRate = document.getElementById('inflationRate' + idPostfix).value;
    var years = document.getElementById('years' + idPostfix).value;

    // Validate user inputs
    if (currentSalary == '' || inflationRate == '' || years == '') {
        document.getElementById(resultId).innerHTML = $.i18n('common_error_message');
    } else {
        // Calculate inflation
        var totalInflation = Math.pow((1 + (inflationRate / 100)), years);
        var dollarSalary = (currentSalary * 1).toLocaleString("en-US", { style: "currency", currency: "USD" });
        var newSalary = (currentSalary * totalInflation).toLocaleString("en-US", { style: "currency", currency: "USD" });

        // Display result in the specified result div
        var yearText = (years == 1) ? $.i18n('common_year') : $.i18n('common_years');
        document.getElementById(resultId).innerHTML = $.i18n('common_result_message_1') + "&nbsp;" + inflationRate + "%, your " + dollarSalary + "&nbsp;" + $.i18n('common_result_message_3') + "&nbsp;" + newSalary + " in " + years + " " + yearText + "&nbsp;" + $.i18n('common_result_message_4');
    }
}
