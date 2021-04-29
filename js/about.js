// About page video

$(".video__item--button").on("click", function () {
  $(this).parent().children(".video").css({
    "z-index": 1,
    opacity: 1,
  });
  $(this).parent().children(".video").trigger("play");
});

var memberLength = $(".member").length;

if (memberLength > 6) {
  console.log("clicked");
  $(".staff__members").css("justifyContent", "unset"),
    $(".staff__members").css("display", "-webkit-box"),
    $(".staff__members").css("overflow-x", "scroll");
  $(".member").css("marginRight", "50px");
}
// counter

jQuery(function ($) {
  var counted = 0;
  $(document).scroll(function () {
    var oTop = $(".counter__item").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      counted = 1;
    }
  });
});

// Select show tab on load page
let indexOpen = 0;

let btnTab = document.querySelectorAll(
  ".nav-tab .staff__members .member .member__image"
);
let contentTab = document.querySelectorAll(".content-tab");

function tabCurrent(thisTab) {
  let idCurrent = thisTab.dataset.tab;

  for (let i = 0; i < btnTab.length; i++) {
    btnTab[i].classList.remove("tab-current");
  }
  thisTab.classList.add("tab-current");

  for (let i = 0; i < contentTab.length; i++) {
    if (idCurrent === contentTab[i].id) {
      contentTab[i].classList.add("current-content-tab");
    } else {
      contentTab[i].classList.remove("current-content-tab");
    }
  }
}

for (let i = 0, len = btnTab.length; i < len; i++) {
  btnTab[i].onclick = function () {
    tabCurrent(this);
  };
}

tabCurrent(btnTab[indexOpen]);
