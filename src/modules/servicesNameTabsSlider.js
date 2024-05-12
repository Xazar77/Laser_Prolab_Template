
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

export const servicesNameTabsSlider = () => {

    const swiper = new Swiper('.services__nav', {
        modules: [Autoplay, Navigation],
        slidesPerView: 5,
        loop: true,
   	
        navigation: {
            nextEl: ".services__nav__btn_next",
            prevEl: ".services__nav__btn_prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 4,
            },
          


        },
    })
        
    


}