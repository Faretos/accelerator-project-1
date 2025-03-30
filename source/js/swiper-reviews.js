import Swiper from '../vendor/swiper/swiper';
import { Navigation} from '../vendor/swiper/modules';

const reviewsSwiper = new Swiper('.reviews__reviews-wrapper', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.reviews__next-slide',
    prevEl: '.reviews__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1366,
  on: {
    init: function () {
      document.querySelector('.reviews__prev-slide').classList.add('disabled');
    },
    slideChange: function () {
      document.querySelector('.reviews__prev-slide').classList.remove('disabled');
      document.querySelector('.reviews__next-slide').classList.remove('disabled');

      if (this.isBeginning) {
        document.querySelector('.reviews__prev-slide').classList.add('disabled');
      }
      if (this.isEnd) {
        document.querySelector('.reviews__next-slide').classList.add('disabled');
      }
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 1366) {
    reviewsSwiper.allowTouchMove = true;
  } else {
    reviewsSwiper.allowTouchMove = false;
  }
});
