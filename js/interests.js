$(function() {
  $('.ui.medium.circular.image').click(function() {
    $(this).transition('bounce');
    $("#meee").modal('show');
  });
});
