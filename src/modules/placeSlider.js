import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


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
		// breakpoints: {
		// 	640: {
		// 	  slidesPerView: 1,
		// 	  spaceBetween: 20,
		// 	},
		// 	768: {
		// 	  slidesPerView: 2,
		// 	  spaceBetween: 40,
		// 	},
		// 	1024: {
		// 	  slidesPerView: 3,
		// 	  spaceBetween: 50,
		// 	},
        // },
	})


}