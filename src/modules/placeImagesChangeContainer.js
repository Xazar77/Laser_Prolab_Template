import { hoverBgBtns } from '../modules/helpers'
import { hoverBtnsSvg } from '../modules/helpers'

export const placeImagesChangeContainer = () => {
    const galleryWrap = document.querySelector('.place__gallery__slider_wrapper')
   
    if(galleryWrap) {
        const images = document.querySelectorAll('.place__gallery__slider_item')


        images.forEach(image => {
            const container = document.querySelector('.place__gallery__container')
            image.addEventListener('click', () => {
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
    if(document.getElementById('place')) {
        hoverBgBtns('.place__content__btn','rgb(230, 160, 4)', 'linear-gradient(90.00deg, rgb(255, 211, 0),rgb(236, 167, 4) 100%)')
        hoverBtnsSvg({
            btnSelector: '.place__gallery__slider__btn_next',
            iconSelector: '.slider-icon-next',
            btnColorBefore: 'rgba(0,0,0, 1)',
            btnColorAfter: 'transparent',
            iconColorBefore: `fill: #ffffff`,
            iconColorAfter: `fill: #000000`
        })
        hoverBtnsSvg({
            btnSelector: '.place__gallery__slider__btn_prev',
            iconSelector: '.slider-icon-prev',
            btnColorBefore: 'rgba(0,0,0, 1)',
            btnColorAfter: 'transparent',
            iconColorBefore: `fill: #ffffff`,
            iconColorAfter: `fill: #000000`
        })
        
        hoverBtnsSvg({
            btnSelector: '.place__content__contacts_wattsap',
            iconSelector: '.social-icon-wattsap',
            btnColorBefore: '#099A29',
            btnColorAfter: 'transparent',
            iconColorBefore: `fill: #ffffff`,
            iconColorAfter: `fill: #099A29`
        })
        
        hoverBtnsSvg({
            btnSelector: '.place__content__contacts_telegram',
            iconSelector: '.social-icon-telegram',
            btnColorBefore: "#139BD0",
            btnColorAfter: 'transparent',
            iconColorBefore: `fill: #73787a`,
            iconColorAfter: 'fill:#139BD0'
        })
    
    }
    

}