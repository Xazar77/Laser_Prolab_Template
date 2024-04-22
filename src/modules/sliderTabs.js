import { getData } from "./getData";
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export const sliderTabs = () => {

    getData().then(({complex}) => { 
        if(complex.length > 0) {
            const swiper = new Swiper('.slider', {
                modules: [Autoplay, Navigation],
                direction: 'vertical',
                loop: true,
                slidesPerView: 6,
                navigation: {
                  nextEl: '.slider__btn_up',
                  prevEl: '.slider__btn_down',
                },

            });


        }
      })
}