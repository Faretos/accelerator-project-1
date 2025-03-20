import Swiper from '../vendor/swiper/swiper';
import { Navigation} from '../vendor/swiper/modules';


const swiperOne = new Swiper('.juri__list', {
  modules: [Navigation],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
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
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  }
});
