var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 15,
  slidesPerView: 12,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  },
  
});