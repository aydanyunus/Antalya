$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        margin: 20,
        responsiveClass: true,
        mouseDrag: true,
        stagePadding: 50,
        loop: false,
        dots: true,
        dotsEach: true,
        nav: true,
        navText: [
            "<svg><use xlink:href='images/icons/icons.svg#icon-arrow-left'></use></svg>",
            "<svg><use xlink:href='images/icons/icons.svg#icon-arrow'></use></svg>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true
            },
            600: {
                items: 1,
                nav: true,
                dots: true

            },
            1000: {
                items: 3,
                nav: true,
                dots: true

            }
        }
    })



    $(".other__services .other__services__item").on("click", function () {
        $(".other__services .other__services__item").removeClass("active");
        $(this).addClass("active");
    });  


});