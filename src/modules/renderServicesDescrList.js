import { getData } from './getData';

import { hoverBgBtns } from './helpers'
import { hoverColorTextBtns } from './helpers'

export const renderServicesDescrList = () => {
    const servicesBlock = document.querySelector('.laser__services__descr__list')
    if(servicesBlock) {

        const renderItems = (arr) => {
            servicesBlock.innerHTML = ''
            arr.forEach((item, idx) => {
                if(idx < 4) {
                    const {description} = item
                    const li = document.createElement('li')
                    li.classList.add('laser__services__descr__list_item')
                    li.textContent = description
                    servicesBlock.append(li)
                } else if(idx === 5){
                    const li = document.createElement('li')
                    li.classList.add('laser__services__descr__list_item')
                    li.textContent = ' . . . . . . . '
                    servicesBlock.append(li)
                }
    
    
            })
        }
    
        hoverBgBtns('.services__nav__btn', 'rgba(0,0,0, .2)', 'transparent')

        
        hoverBgBtns('.laser__services__descr_more', 'rgb(139, 139, 139)', 'transparent')
        hoverColorTextBtns('.laser__services__descr_more', '#ffffff', 'rgb(139, 139, 139)')

        hoverBgBtns('.laser__order__price_buy', 'rgb(191 56 121)', 'linear-gradient(90deg, rgb(231, 135, 181) 2.8%, rgb(248, 169, 177) 100%)')
        hoverColorTextBtns('.laser__order__price_buy', '#ffffff', '#000000')

        hoverBgBtns('.laser__order__price_instalment', 'rgb(191 56 121)', 'linear-gradient(90deg, rgba(56, 112, 255, 0.5) 2.8%, rgb(248, 169, 177) 100%)')
        hoverColorTextBtns('.laser__order__price_instalment', '#ffffff', '#000000')
      
         getData().then(({servicesDescription}) => {
            renderItems(servicesDescription)
         })

 
    }
}