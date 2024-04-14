import { getData } from "./getData";
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'


export const adressSlider = () => {

    getData().then(({studios}) => {
		if(studios.length > 0) {
            const swiper = new Swiper('.adress__slider', {
            	modules: [Autoplay],
            	slidesPerView: 'auto',
                spaceBetween: 40,
            //    centeredSlides: true,
            	  loop: true,
                mousewheel:"true",
                freeMode: "true",
                watchSlidesProgress: true,
            	// autoplay: {
            	// 	delay: 3000,
            	// 	disableOnInteraction: false,
                //     pauseOnMouseEnter: true
            	// },
                breakpoints: {
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                  },
            })

        }
	})
}