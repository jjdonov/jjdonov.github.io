$(document)
  .ready(function() {
    $('.ui.sticky')
      .sticky({
        context: '#content',
        offset: 100,
        bottomOffset: 200,
        debug: true
      }).css("z-index", "-1");
  });
