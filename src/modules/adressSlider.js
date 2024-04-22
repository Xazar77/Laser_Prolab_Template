import { getData } from "./getData";
import Swiper from 'swiper';
// import { Autoplay } from 'swiper/modules'
import 'swiper/css';


export const adressSlider = () => {

    getData().then(({studios}) => {
        if(studios.length > 0) {

			// const slideBlock = document.querySelector('.adress__slider_wrapper')

			// let slideIndex = 0,
			//  posX1 = 0,
			//  posX2 = 0,
			//  posInit = 0,
			//  posFinal = 0,
			//  trfRegExp = /[-0-9.]+(?=px)/,
			//  slideWidth = slideBlock.offsetWidth / studios.length,
			//  posThreshold = slideWidth * .35

			//  const slideRun = () => {
			// 	slideBlock.style.transition = 'transform .5s';
			// 	slideBlock.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
			//  }
			
			//  const getEvent = (e) => e.type.search('touch') !== -1 ? e.touches[0] : e

			//  const slideStart = (e) => {
			// 	let evt = getEvent(e)
			// 	posInit = posX1 = evt.clientX;
			// 	slideBlock.style.transition = '';
			// 	slideBlock.addEventListener('touchmove', (e) => {
			// 		slideAction(e)
			// 	});
			// 	slideBlock.addEventListener('touchend', (e) => {
			// 		slideEnd(e)
			// 	});
			// 	slideBlock.addEventListener('mousemove', (e) => {
			// 		slideAction(e)
			// 	});
			// 	slideBlock.addEventListener('mouseup', (e) => {
			// 		slideEnd(e)
			// 	});
			//  }

			//  const slideAction = (e) => {
			// 	let evt = getEvent(e)
			// 	let style = slideBlock.style.transform
			// 	let transform = +style.match(trfRegExp)[0];
			// 	posX1 = evt.clientX;
			// 	posX2 = posX1 - evt.clientX;

			// 	slideBlock.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
			//  }


			//  const slideEnd = (e) => {
			// 	posFinal = posInit - posX1;
			// 	slideBlock.addEventListener('touchmove', (e) => {
			// 		slideAction(e)
			// 	});
			// 	slideBlock.addEventListener('mousemove', (e) => {
			// 		slideAction(e)
			// 	});
			// 	slideBlock.addEventListener('touchend', (e) => {
			// 		slideEnd(e)
			// 	});
			// 	slideBlock.addEventListener('mouseup', (e) => {
			// 		slideEnd(e)
			// 	});

			// 	if (Math.abs(posFinal) > posThreshold) {
			// 		// если мы тянули вправо, то уменьшаем номер текущего слайда
			// 		if (posInit < posX1) {
			// 		  slideIndex--;
			// 		// если мы тянули влево, то увеличиваем номер текущего слайда
			// 		} else if (posInit > posX1) {
			// 		  slideIndex++;
			// 		}
			// 	}
				
			// 	  // если курсор двигался, то запускаем функцию переключения слайдов
			// 	if (posInit !== posX1) {
			// 		slideRun();
			// 	}


			//  }

			//  slideBlock.style.transform = 'translate3d(0px, 0px, 0px)';

			//  slideBlock.addEventListener('touchstart', (e) => {
			// 	slideStart(e)
			// });
			//  slideBlock.addEventListener('mousedown', (e) => {
			// 	slideStart(e)
			// });














			//  slideBlock.addEventListener('touchend', (e) => {
			// 	console.dir(e)
			//  })


















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