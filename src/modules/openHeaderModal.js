import { animate } from "./animate"

export const openHeaderModal = () => {
    const menuBtn = document.querySelector('.header__burger')
    const modalMenu = document.querySelector('.modal__header')
    const overlay = document.querySelector('.header__overlay')
    const closeBtn = document.querySelector('.modal__header_close')
    
    let count = 0

    const choiseOpacity = (count) => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                if(count === 1){
                    overlay.classList.add('header__overlay_active')      
                    overlay.style.opacity = progress * count;
                } else if(count === -1){
                    overlay.style.opacity = 1 - progress;
                    setTimeout(()=> {
                        overlay.classList.remove('header__overlay_active')      
                        

                    },1000)
                }
            }
        });
    }

    const openModal = () => {
        choiseOpacity(1)
        menuBtn.classList.add('header__burger_active')
        modalMenu.classList.add('modal__header_active') 

    }

    const closeModel = () => {
        menuBtn.classList.remove('header__burger_active')
        modalMenu.classList.remove('modal__header_active') 
        choiseOpacity(-1)
    }
  
    menuBtn.addEventListener('click', openModal)

    closeBtn.addEventListener('click', closeModel)

    document.addEventListener('click', (e) => {
        if(e.target.closest('.header__overlay')) {
            closeModel()
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            closeModel()
        }
    })

}