$(function(){
    $(".menu>li").hover(function(){
        $("#h_hover").stop().slideToggle(200);
    });
});

$(function() {

    $(document).ready(function() {

        var scrollOffset = $('header').offset();

        $(window).scroll(function() {
            if ($(document).scrollTop() > scrollOffset.top) {
            $('header').addClass('scroll-fixed');
            }
            else {
            $('header').removeClass('scroll-fixed');
            }
        });
    });
});