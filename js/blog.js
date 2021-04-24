$(document).ready(function () {

    $('.owl-carousel')
        .on("initialized.owl.carousel changed.owl.carousel", function (e) {
            if (!e.namespace) {
                return;
            }
            var carousel = e.relatedTarget;
            var m = carousel.items().length;
            $(".slider-counter2").text(m);
            $(".slider-counter1").text(carousel.relative(carousel.current()) + 1);
        })
        .owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            nav: true,
            dotsEach: true,
            navText: [
                "<svg><use xlink:href='images/icons/icons.svg#icon-arrow-left'></use></svg>",
                "<svg><use xlink:href='images/icons/icons.svg#icon-arrow'></use></svg>",
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 4,
                    nav: true,
                }
            }
        })

});