
/*** hide menu on link click ***/
$(".smooth-menu").click(function () {
    $('body').removeClass('menu-show');
});

/*** smooth scroll js ***/
$('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
});