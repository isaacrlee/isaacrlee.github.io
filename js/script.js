$(document).ready(function () {
    $(function () {
        $(".name").typed({
            strings: ["Hi! I'm Isaac."],
            typeSpeed: 100
        });
    });
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    $('ul#projects-filter a').click(function () {
        $('ul#projects .hidden').removeClass('hidden');
        $('ul#projects-filter .current').removeClass('current bg-teal');
        $(this).parent().addClass('current bg-teal');
        var filterVal = $(this).text().toLowerCase();
        $('ul#projects>li').each(function () {
            if (!$(this).hasClass(filterVal)) {
                $(this).hide('normal');
            } else {
                $(this).show('normal');
            }
        });
        return false;
    });
    $('ul#education-filter a').click(function () {
        $('ul#education-list .hidden').removeClass('hidden');
        $('ul#education-filter .current').removeClass('current bg-purple');
        $(this).parent().addClass('current bg-purple');
        var filterVal = $(this).text().toLowerCase().replace(' ','-');;
        $('ul#education-list>li').each(function () {
            if (!$(this).hasClass(filterVal)) {
                $(this).hide('normal');
            } else {
                $(this).show('normal');
            }
        });
        return false;
    });
});
