$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        margin: 20,
        responsiveClass: true,
        mouseDrag: true,
        stagePadding: 50,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })

    $(".owl-nav div").on('click', function (e) {
        $(".owl-nav").find("li").removeClass("active");
        $(this).addClass("active");
        var jumpTo = $(this).index();
        carousel.trigger('to.owl.carousel', [jumpTo]);
    });


    $(".other__services .other__services__item").on("click", function () {
        $(".other__services .other__services__item").removeClass("active");
        $(this).addClass("active");
    });
});