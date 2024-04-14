import { getData } from "./getData";


export const tabs = () => {
  const tabsBlock = document.querySelector(".laser__services__complex_content");
  const sliderLine = tabsBlock.querySelector(".laser__services__complex__list");



  
  
  const renderItems = (data) => {
    sliderLine.innerHTML = ''
    data.forEach(elem => {
      const {name} = elem
      const a = document.createElement('a')
      a.setAttribute('href', '/')
      a.classList.add('laser__services__complex__list_item')
      a.classList.add('swiper-slide')
      a.textContent = `${name}`
      sliderLine.append(a)

    })
    
    
  }
  
  
  getData().then(({complex}) => { 
    renderItems(complex)
    
  })

};
