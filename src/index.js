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
hoverBtns('.services__nav__btn')


