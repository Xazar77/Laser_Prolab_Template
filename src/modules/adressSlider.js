import { getData } from "./getData";
import Swiper from 'swiper';
import 'swiper/css';


export const adressSlider = () => {

    getData().then(({studios}) => {
        if(studios.length > 0) {

			const swiper = new Swiper(".adress__slider", {
				direction: 'horizontal',
				loopAddBlankSlides: true,
				slidesPerView: 6,
				// slidesPerGroup: 1,
				// slidesPerGroupAuto: true,
				spaceBetween: 30,
				loop: true,
				// loopAddBlankSlides: true


				breakpoints: {
					360: {
						slidesPerView: 1,
					},
					500: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 3,
					},
					1300: {
						slidesPerView: 4,
					},
					1900: {
						slidesPerView: 6,
					}
				}

			});
        }
    })
}