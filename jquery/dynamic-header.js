function setDynamicHeader() {
    var urlParams = new URLSearchParams(window.location.search);
    var sticker = urlParams.get('sticker');
    var link = urlParams.get('link');
    var sign = urlParams.get('sign');
    var headerContent;

    // Check for the 'sign' parameter first
    if (sign === 'got-inflation') {
        var gotInflationSignText = $.i18n('inflation_sign_got_inflation');
        var signUpText = $.i18n('inflation_save_in_bitcoin');
        headerContent = gotInflationSignText + " " + signUpText;
    } else {
        // Existing logic for other parameters
        switch (sticker) {
            case 'cure':
            case 'cure-v2':
                var cureText = $.i18n('inflation_sticker_cure');
                var learnText = $.i18n('inflation_sticker_learn');
                headerContent = cureText + " " + learnText;
                break;
            case 'got-inflation':
                var gotInflationText = $.i18n('inflation_sticker_got_inflation');
                var learnText = $.i18n('inflation_sticker_learn');
                headerContent = gotInflationText + " " + learnText;
                break;
            case 'what-if':
                var whatIfText = $.i18n('inflation_sticker_what_if');
                var letsFindOutText = $.i18n('inflation_sticker_lets_find_out');
                headerContent = whatIfText + " " + letsFindOutText;
                break;
            default:
                var bitcoinText = $.i18n('inflation_sticker_bitcoin');
                var yourMoneyText = $.i18n('inflation_sticker_your_money');
                headerContent = bitcoinText + " " + yourMoneyText;
        }

        if (link === 'calculator' || link === 'calculator-site') {
            // Set the content for both "calculator" and "calculator-site" links
            var optOutText = $.i18n('inflation_calculator_opt_out');
            var withBitcoinText = $.i18n('inflation_calculator_with_bitcoin');
            headerContent = optOutText + " " + withBitcoinText;
        }
    }

    document.getElementById("changing-header").innerHTML = headerContent;
}
