function setDynamicHeader() {
    var urlParams = new URLSearchParams(window.location.search);
    var sticker = urlParams.get('sticker');
    var link = urlParams.get('link');
    var headerContent;

    switch (sticker) {
        case 'cure':
        case 'cure-v2':
            var cureText = $.i18n('inflation_sticker_cure');
            var learnText = $.i18n('inflation_sticker_learn');
            headerContent = "<span class='inflation' style='text-transform: uppercase'>" + cureText + "</span><br /><span style='text-transform: uppercase'>" + learnText + "</span>";
            break;
        case 'got-inflation':
            var gotInflationText = $.i18n('inflation_sticker_got_inflation');
            var learnText = $.i18n('inflation_sticker_learn');
            headerContent = "<span class='inflation' style='text-transform: uppercase'>" + gotInflationText + "</span><br /><span style='text-transform: uppercase'>" + learnText; + "</span>";
            break;
        case 'what-if':
            var whatIfText = $.i18n('inflation_sticker_what_if');
            var letsFindOutText = $.i18n('inflation_sticker_lets_find_out');
            headerContent = "<span class='inflation' style='text-transform: uppercase'>" + whatIfText + "</span><br /><span style='text-transform: uppercase'>" + letsFindOutText + "</span>";
            break;
        default:
            var bitcoinText = $.i18n('inflation_sticker_bitcoin');
            var yourMoneyText = $.i18n('inflation_sticker_your_money');
            headerContent = "<span class='inflation' style='text-transform: uppercase'>" + bitcoinText + "</span><br /><span style='text-transform: uppercase'>" + yourMoneyText + "</span>";
    }

    if (link === 'calculator' || link === 'calculator-site') {
        // Set the content for both "calculator" and "calculator-site" links
        var optOutText = $.i18n('inflation_calculator_opt_out');
        var withBitcoinText = $.i18n('inflation_calculator_with_bitcoin');
        headerContent = "<span style='text-transform: uppercase'>" + optOutText + "</span><br /><span class='inflation' style='text-transform: uppercase'>" + withBitcoinText + "</span>";
    }

    document.getElementById("changing-header").innerHTML = headerContent;
}
