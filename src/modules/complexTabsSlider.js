
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

import { getData } from './getData';

export const complexTabsSlider = () => {

      getData().then(({complex}) => { 
          if(complex) {
              const swiper = new Swiper('.slider', {
                  modules: [Autoplay, Navigation],
                  direction: 'vertical',
                  loop: true,
                  slidesPerView: 5,
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                  spaceBetween: 10,
                //   navigation: {
                //     nextEl: '.slider__btn_up',
                //     prevEl: '.slider__btn_down',
                //   },

              });


          } 
      })


}