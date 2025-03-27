import Swiper from '../vendor/swiper/swiper';
import { Navigation} from '../vendor/swiper/modules';


const juriSwiper = new Swiper('.juri__list', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: window.innerWidth < 1366,
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

window.addEventListener('resize', () => {
  if (window.innerWidth < 1366) {
    juriSwiper.allowTouchMove = true;
  } else {
    juriSwiper.allowTouchMove = false;
  }
});
