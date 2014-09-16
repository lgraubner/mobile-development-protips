(function($) {

    $('.nav-toggle').click(function() {
		$('body').toggleClass('nav-opened');
    });

    var touchStarted = false,
      currX = 0,
      currY = 0,
      cachedX = 0,
      cachedY = 0,
      timeout;

    // Navigation bei Tap oder Click schliessen
    $('html').on('touchstart mousedown', 'body.nav-opened', function(e) {
      e.preventDefault();
      var pointer = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e;
      cachedX = currX = pointer.pageX;
      cachedY = currY = pointer.pageY;

      touchStarted = true;
      setTimeout(function() {
          if ((cachedX === currX) && !touchStarted && (cachedY === currY)) {
              $('body').removeClass('nav-opened');
          }
      }, 200);
    });

    $('html').on('touchend mouseup touchcancel', 'body.nav-opened', function(e) {
      touchStarted = false;
    });

    $('html').on('touchmove', 'body.nav-opened', function(e) {
      e.preventDefault();
      var pointer = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e;
      currX = pointer.pageX;
      currY = pointer.pageY;
      if (touchStarted) {
          if (currX < (cachedX - 50)) {
              $('body').removeClass('nav-opened');
          }
      }
    });

    $('#navigation, .nav-toggle').on('touchstart mousedown touchend mouseup touchcancel touchmove', function(e) {
      e.stopPropagation();
    });
})(jQuery);
