import { getData } from "./getData"

export const servicesDescrList = () => {
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
    
    
    
        getData().then(({servicesDescription}) => { 
            renderItems(servicesDescription)
            
        })
    }
    }