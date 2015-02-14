$(function() {
  // $('img').click({
  //   $(this).transition('bounce');
  // });
  //ui medium circular image
  $('.ui.medium.circular.image').click(function() {
    $(this).transition('bounce');
    $("#meee").modal('show');
  });

  $('.ui.sticky').sticky();

});
