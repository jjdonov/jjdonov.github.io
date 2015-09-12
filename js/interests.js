$(document).ready(function() {
  $('.gallery.grid > div > img').click(function() {
    console.log("something");
    $(this).transition('bounce');
    $(".ui.dimmer").dimmer('show');
  });
});
