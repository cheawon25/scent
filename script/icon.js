$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 800) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

