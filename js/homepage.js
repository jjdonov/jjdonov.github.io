$(document)
  .ready(function() {
    // $('.ui.sticky')
    //   .sticky({
    //     context: '#bod'
    //   });
    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      });
    $('.masthead .information')
      .transition('scale in', 3000);
    $(function() {
      $('.icon').click(function(event) {
        event.preventDefault();
        var href = $(this).parent().attr('href');
        $(this).transition({
          animation: 'bounce',
          duration: 1000,
          interval: 200,
          onComplete: function() {
            window.location = href;
          }
        });
      });
    });
  });
