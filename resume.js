$(document).ready(function () {
    $.fn.hasAttr = function (name) {
        return this.attr(name) !== undefined;
    };

    $('.more').each(function () {
        $.data($(this)[0], "content", $(this).html());
        $(this).html('<a href="" class="morelink">' +
            ($(this).hasAttr("data-readmoretext") ? $(this).attr("data-readmoretext") : 'Lees meer') +
            '</a>');
    });

    $(".morelink").click(function () {
        $(this).parent().html($(this).parent().data("content"));
        return false;
    });
});