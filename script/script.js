$(function(){
    $(".menu>li").mouseover(function(){
        $("#h_hover").stop().slideDown(200);
    });
    $(".menu>li").mouseout(function(){
        $("#h_hover").stop().slideUp(200);
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