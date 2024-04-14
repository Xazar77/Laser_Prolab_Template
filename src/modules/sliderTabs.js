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
                slidesPerView: 'auto',
                mousewheel:"true",
                freeMode: "true",
                navigation: {
                  nextEl: '.slider__btn_up',
                  prevEl: '.slider__btn_down',
                },
              
                // And if we need scrollbar
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
            });


        }
      })
}