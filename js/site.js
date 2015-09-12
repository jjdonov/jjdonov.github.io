$(document)
  .ready(function() {
    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      });
      $('a[href="#"]').popup({
        on: 'click',
        content: 'Coming Soon!'
      });
      $('a[href="#"]').click(function(event) {
        event.preventDefault();

      });
    $(function() {
      $('.footer .icon').click(function(event) {
        $(this).transition({
          animation: 'bounce',
          duration: 1000,
          interval: 200
        });
      });
    });

  });
