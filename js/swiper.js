import Swiper from '../vendor/swiper/swiper';
import { Navigation} from '../vendor/swiper/modules';


const swiperOne = new Swiper('.juri__list', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiperTwo = new Swiper('.reviews__reviews-wrapper', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.reviews__next-slide',
    prevEl: '.reviews__prev-slide',
  },
  on: {
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
