import { animate } from "./animate"
import { getData } from './getData'

export const placeImages = () => {
    const galleryWrap = document.querySelector('.place__gallery__slider_wrapper')
   
    if(galleryWrap) {
        const images = document.querySelectorAll('.place__gallery__slider_item')
      
        let count = 0

        // const choiseOpacity = (count) => {
        //     animate({
        //         duration: 1000,
        //         timing(timeFraction) {
        //           return timeFraction;
        //         },
        //         draw(progress) {
        //             if(count === 1){
        //                 overlay.classList.add('overlay_visible')      
        //                 overlay.style.opacity = progress * count;
        //             } else if(count === -1){
        //                 overlay.style.opacity = 1 - progress;
        //                 setTimeout(()=> {
        //                     overlay.classList.remove('overlay_visible')      
                            
    
        //                 },1000)
        //             }
        //         }
        //     });
        // }

        images.forEach(image => {
            const container = document.querySelector('.place__gallery__container')
            const body = document.querySelector('body')
            image.addEventListener('click', () => {
                container.classList.toggle('place__gallery__container_big')
                // body.style.cssText=`
                //     position: fixed;
                //     top: 0;
                //     left:0;
                //     width: 100%;
                //     height: 100%;
                //     background:#000;
                //     z-index: 9999;
                // `
            })

        })
        document.addEventListener('keydown', (e) => {
            if(e.keyCode === 27){
               console.log('fff')

            }
        })
        // const renderGallery = (data) => {
        //     galleryWrap.innerHTML = ''

        //     data.forEach(item => {
        //         const {id, image} = item

        //         galleryWrap.insertAdjacentHTML("beforeend", `
        //             <div class="place__gallery__slider_item swiper-slide"><img src="./image/studios/${image}" alt="Фотография студии" class="place__gallery__slider_img"></div>
        //         `)
        //     })
        // }

        // getData().then(({placeGallery}) => {
        //     if(placeGallery) {
        //         console.log(placeGallery)
        //         renderGallery(placeGallery)
    
        //     } 
        // })


    }
}