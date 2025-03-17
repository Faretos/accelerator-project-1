import Swiper from '../vendor/swiper/swiper';
import { Navigation} from '../vendor/swiper/modules';


const swiper = new Swiper('.swiper', {
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
