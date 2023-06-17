import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  speed: 2000,
  delay: 4000,
  autoplay: true,
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  }
})
