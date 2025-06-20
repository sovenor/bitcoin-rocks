document.addEventListener('DOMContentLoaded', function() {
    // Get references to the divs and select boxes
    const firstSticker = document.getElementById('first-sticker');
    const secondSticker = document.getElementById('second-sticker');
    const selectBox1 = document.getElementById('countryselector');
    const selectBox2 = document.getElementById('countryselector2');

    // Hide both select boxes initially
    selectBox1.style.display = 'none';
    selectBox2.style.display = 'none';

    // Add click event listeners to the divs
    firstSticker.addEventListener('click', function() {
        // Show select box 1 and hide select box 2
        selectBox1.style.display = 'block';
        selectBox2.style.display = 'none';

        // Change border of first-sticker
        firstSticker.style.border = '1px solid #ff9500'; // Change color and width as needed
        // Reset border of second-sticker
        secondSticker.style.border = '1px solid #3f3f3f';

        // Decrease opacity of elements in second-sticker
        const secondStickerElements = secondSticker.querySelectorAll('*');
        secondStickerElements.forEach(function(element) {
            element.style.opacity = '0.5'; // Adjust opacity as needed
        });

        // Reset opacity of elements in first-sticker
        const firstStickerElements = firstSticker.querySelectorAll('*');
        firstStickerElements.forEach(function(element) {
            element.style.opacity = '1'; // Reset opacity to full
        });
    });

    secondSticker.addEventListener('click', function() {
        // Show select box 2 and hide select box 1
        selectBox1.style.display = 'none';
        selectBox2.style.display = 'block';

        // Change border of second-sticker
        secondSticker.style.border = '1px solid #ff9500'; // Change color and width as needed
        // Reset border of first-sticker
        firstSticker.style.border = '1px solid #3f3f3f';

        // Decrease opacity of elements in first-sticker
        const firstStickerElements = firstSticker.querySelectorAll('*');
        firstStickerElements.forEach(function(element) {
            element.style.opacity = '0.5'; // Adjust opacity as needed
        });

        // Reset opacity of elements in second-sticker
        const secondStickerElements = secondSticker.querySelectorAll('*');
        secondStickerElements.forEach(function(element) {
            element.style.opacity = '1'; // Reset opacity to full
        });
    });

    // Function to handle country selector
    function handleCountrySelector(selectorId) {
        $(selectorId).change(function() {
            // Hide and show country elements
            $('.countries').hide();
            $('#' + $(this).val()).show();
        });
    }

    // Call handleCountrySelector for both selectors
    handleCountrySelector('#countryselector');
    handleCountrySelector('#countryselector2');
});
