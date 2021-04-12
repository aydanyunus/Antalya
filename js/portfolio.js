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

// fav 

$(".img__info svg").click(function () {
  $(this).toggleClass("fav");
});

$(".house__list__item .bookmark svg").click(function () {
  $(this).toggleClass("fav");
});

//range price

$(function () {
  $("#slider-range-2").slider({
    range: true,
    min: 0,
    max: 10000,
    values: [1000, 5000],
    slide: function (event, ui) {
      $("#amount-1").val(ui.values[0]),
        $("#amount-2").val(ui.values[1]);
    }
  });
  $("#amount-1").val($("#slider-range-2").slider("values", 0));
  $("#amount-2").val($("#slider-range-2").slider("values", 1));
});

//range metr
$(function () {

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [90, 250],
    slide: function (event, ui) {
      $("#amount1").val(ui.values[0] + " m"),
        $("#amount2").val(ui.values[1] + " m");
    }
  });
  $("#amount1").val($("#slider-range").slider("values", 0) + " m");
  $("#amount2").val($("#slider-range").slider("values", 1) + " m");
});



