$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $(".amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    navText: [
      "<img src='images/arrow-right.svg'>",
      "<img src='images/arrow-right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  });
});
// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".js-example-basic-single").select2();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
$(".center").slick({
  centerMode: true,
  centerPadding: "160px",
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "220px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "220px",
        slidesToShow: 1,
      },
    },
  ],
});
$(window).resize(function (evt) {
  if ($(document).width() < 500 && noOfSlides > 5) {
    alert($(document).width());
    $(".slider").slick("slickRemove", 5);
  }
});
function myFunction() {
  var m = document.getElementsByClassName("slider-img");
  var nodelist = document.getElementsByClassName("main-img").length;
  console.log(nodelist);
}
$(function () {
  $(".section-second--item").hover(function () {
    // when a .myDiv is clicked
    $("svg").toggleClass("svghover");
  });

  $(".header-mobile-burger").click(function () {
    $(".mobile-header--nav").toggleClass("active-hide-mobile");
  });
  $(".nav__wrapper button").click(function () {
    $(this).addClass("active-wrapper-nav");
  });
});
