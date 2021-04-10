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
  $(".owl-carousel")
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
      items: 2,
      loop: true,
      margin: 0,
      nav: true,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
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
  slidesToShow: 1,
  dots: true,
  arrows: true,
  swipe: true,
  //  infinite: true,
  swipeToSlide: true,
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
  $(".nav__wrapper .search-button").click(function () {
    $(".headet-mobile-filter").toggleClass("header-mobile-filter-active");
  });
  $(".nav__wrapper button").click(function () {
    $(this).addClass("active-wrapper-nav");
  });
  if ($("#morefiltre .select2-selection__rendered").text().length > 40) {
    $(".select2-selection__rendered").addClass(
      "select2-selection__rendered-class "
    );
  }
});
function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var w1 = 40;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var w2 = 40;
  var r2 = x2 + w2;

  if (r1 < x2 || x1 > r2) return false;
  return true;
}

// // slider call

$("#slider").slider({
  range: true,
  min: 0,
  max: 500,
  values: [75, 300],
  slide: function (event, ui) {
    $(".ui-slider-handle:eq(0) .price-range-min").html("$" + ui.values[0]);
    $(".ui-slider-handle:eq(1) .price-range-max").html("$" + ui.values[1]);
    $(".price-range-both").html(
      "<i>$" + ui.values[0] + " - </i>$" + ui.values[1]
    );

    //

    if (ui.values[0] == ui.values[1]) {
      $(".price-range-both i").css("display", "none");
    } else {
      $(".price-range-both i").css("display", "inline");
    }

    //

    if (collision($(".price-range-min"), $(".price-range-max")) == true) {
      $(".price-range-min, .price-range-max").css("opacity", "0");
      $(".price-range-both").css("display", "block");
    } else {
      $(".price-range-min, .price-range-max").css("opacity", "1");
      $(".price-range-both").css("display", "none");
    }
  },
});

$(".ui-slider-range").append(
  '<span class="price-range-both value"><i>$' +
    $("#slider").slider("values", 0) +
    " - </i>" +
    $("#slider").slider("values", 1) +
    "</span>"
);

$(".ui-slider-handle:eq(0)").append(
  '<span class="price-range-min value">$' +
    $("#slider").slider("values", 0) +
    "</span>"
);

$(".ui-slider-handle:eq(1)").append(
  '<span class="price-range-max value">$' +
    $("#slider").slider("values", 1) +
    "</span>"
);
