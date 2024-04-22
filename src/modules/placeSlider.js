import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';

export const placeSlider = () => {
    const swiper = new Swiper('.place__gallery__slider', {
		modules: [Autoplay, Navigation, Pagination],
		slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
            pauseOnMouseEnter: true
		},	
        navigation: {
            nextEl: ".place__gallery__slider__btn_next",
            prevEl: ".place__gallery__slider__btn_prev",
        },
        pagination: {
            el: ".place__gallery__pagination",
            clickable: true,
        },

	})


}