import { animate } from "./animate"
import { getData } from './getData'

export const placeImages = () => {
    const galleryWrap = document.querySelector('.place__gallery__slider_wrapper')
   
    if(galleryWrap) {
        const images = document.querySelectorAll('.place__gallery__slider_item')


        images.forEach(image => {
            const container = document.querySelector('.place__gallery__container')
            const body = document.querySelector('body')
            image.addEventListener('click', (e) => {
                container.classList.toggle('place__gallery__container_big')

            })

        })
        document.addEventListener('keydown', (e) => {
            const container = document.querySelector('.place__gallery__container')
            if(e.keyCode === 27){
                container.classList.remove('place__gallery__container_big')

            }
        })

    }
}