$(document).ready(function() {
  $('img').click(function() {
    if($(this) !== $('#gal')) {
      $('#gal').attr('src', $(this).attr('src'));
    }
    $('.ui.dimmer').dimmer('toggle');
  });
});
