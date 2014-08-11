(function($) {

    $('.nav-toggle').click(function(e) {
        e.preventDefault();

        $('body').toggleClass('nav-opened');
    });

    $('#navigation, .nav-toggle').on('click touchend', function(e) {
        e.stopPropagation();

        $('body').removeClass('nav-opened');
    });
})(jQuery);
