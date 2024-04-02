$(function() {
  $('#countryselector').change(function() {
    // Hide and show country elements
    $('.countries').hide();
    $('#' + $(this).val()).show();


  });
});
