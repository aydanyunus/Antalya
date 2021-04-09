$(".dropdown-toggle").dropdown();
$('.dropdown-menu').on('click', 'a', function () {
    var text = $(this).html();
    var htmlText = text;
    $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
});


//filter
$(".number__of__rooms span").on("click", function () {
    $(".number__of__rooms span").removeClass("selected__room");
    $(this).addClass("selected__room");
});

$(".rent__filter .rent__filter__item").on("click", function () {
    $(".rent__filter .rent__filter__item").removeClass("rent__filter__item__active");
    $(this).addClass("rent__filter__item__active");
});

