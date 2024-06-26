import { getData } from "./getData";
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';


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