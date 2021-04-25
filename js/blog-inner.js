var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 15,
  slidesPerView: 12,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    100: {
      slidesPerView: 4,
    },
    300: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 12,
    }
  }
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-arrow-right',
    prevEl: '.swiper-button-arrow-left',
  },
  thumbs: {
    swiper: galleryThumbs
  },

});

// full size Image

$('.gallery-top .swiper-slide .full-size svg').click(function () {
  let swiperImgUrl = $(this).closest('.swiper-slide').css('background-image');
  swiperImgUrl = swiperImgUrl.replace('url(','').replace(')','').replace(/\"/gi, "");
  $('.swiper-modal .modal-body img').attr('src', swiperImgUrl);
  console.log(swiperImgUrl)

})