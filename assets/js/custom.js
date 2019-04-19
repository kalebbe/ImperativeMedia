var vids = $("video");
$.each(vids, function () {
    this.controls = false;
});

$("video").get(0).play();

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var btmObj = $(this).offset().top + $(this).outerHeight();
            var btmWind = $(window).scrollTop() + $(window).height();
            if (btmWind > btmObj) {
                $(this).animate({ 'opacity': '1' }, 500);
            }
        });
    });
});