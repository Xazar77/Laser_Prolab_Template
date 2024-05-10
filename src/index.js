import './index.html'
import './cardpage.html'
import './scss/style.scss'



import { validateFields } from './modules/validateFields' 
import { tabs } from './modules/tabs'
import { placeSlider } from './modules/placeSlider'
import { servicesTabs } from './modules/servicesTabs'
import { adressTabs } from './modules/adressTabs'
import { openHeaderModal } from './modules/openHeaderModal'
import { sliderTabs } from './modules/sliderTabs'
import { adressSlider } from './modules/adressSlider'
import { optionallyText } from './modules/optionallyText'
import { servicesDescrList } from './modules/servicesDescrList'
import { placeImages } from './modules/placeImages'
import { hoverBtns } from './modules/hoverBtns'
import { hoverBtnsSvg } from './modules/hoverBtnsSvg'



if(document.querySelector('.laser')) {

    tabs()
}






validateFields()

placeSlider()
servicesTabs()
adressTabs()
openHeaderModal()
sliderTabs()
adressSlider()
optionallyText()
servicesDescrList()
placeImages()
hoverBtns('.services__nav__btn', 'rgba(0,0,0, .2)', 'transparent')
hoverBtns('.laser__services__descr_more', 'rgb(139, 139, 139)', 'transparent', '#ffffff')
hoverBtns('.adress__slider_item', 'rgb(139, 139, 139)', 'transparent', '#ffffff')

if(document.getElementById('place')) {
    hoverBtns('.place__content__btn','rgb(230, 160, 4)', 'linear-gradient(90.00deg, rgb(255, 211, 0),rgb(236, 167, 4) 100%)',  '#000000')
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

hoverBtnsSvg({
    btnSelector: '.footer__social__item_laser',
    iconSelector: '.footer-social-laser',
    btnColorBefore: "#F8A9B1",
    btnColorAfter: 'transparent',
    iconColorBefore: `fill: #ffffff`,
    iconColorAfter: 'fill:#F8A9B1'
})

hoverBtnsSvg({
    btnSelector: '.footer__social__item_vk',
    iconSelector: '.footer-social-vk',
    btnColorBefore: "#F8A9B1",
    btnColorAfter: 'transparent',
    iconColorBefore: `fill: #ffffff`,
    iconColorAfter: 'fill:#F8A9B1'
})

hoverBtnsSvg({
    btnSelector: '.footer__social__item_youtube',
    iconSelector: '.footer-social-youtube',
    btnColorBefore: "#F8A9B1",
    btnColorAfter: 'transparent',
    iconColorBefore: `fill: #ffffff`,
    iconColorAfter: 'fill:#F8A9B1'
})

hoverBtnsSvg({
    btnSelector: '.footer__social__item_telegram',
    iconSelector: '.footer-social-telegram',
    btnColorBefore: "#F8A9B1",
    btnColorAfter: 'transparent',
    iconColorBefore: `fill: #ffffff`,
    iconColorAfter: 'fill:#F8A9B1'
})


