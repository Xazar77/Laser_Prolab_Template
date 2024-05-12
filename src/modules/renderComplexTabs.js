import { getData } from "./getData";
import { hoverBgBtns } from './helpers'

export const renderComplexTabs = () => {
  const tabsBlock = document.querySelector(".laser__services__complex_content");
  const sliderLine = tabsBlock.querySelector(".laser__services__complex__list");



  
  
  const renderItems = (data) => {
    sliderLine.innerHTML = ''
    data.forEach(elem => {
      const {name} = elem
      // const a = document.createElement('a')
      // a.setAttribute('href', '/')
      // a.setAttribute('target', '_blank')
      // a.classList.add('laser__services__complex__list_item')
      // a.classList.add('swiper-slide')
      // a.textContent = `${name}`
      // sliderLine.append(a)
      sliderLine.insertAdjacentHTML('beforeend', `
         <li class='laser__services__complex__list_item swiper-slide'>
          <a href='#' class='laser__services__complex__list_link'>${name}</a>
         </li>
      `)

    })
    
    hoverBgBtns('.laser__services__complex__list_item', 'rgb(213 92 150)', 'rgb(231, 135, 181)')
    
    
  }
  
  
  getData().then(({complex}) => { 
    renderItems(complex)
    
  })

};
