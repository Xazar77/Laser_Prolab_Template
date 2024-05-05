

export const hoverBtns = (selector) => {
    
    const btns = document.querySelectorAll(selector)
    
    
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.backgroundColor= 'rgba(0,0,0, .2)';
            setTimeout(() => {
                btn.style.backgroundColor= 'transparent'
            },200)
        })
    })


    const hoverBtnsSlider = (selector1, selector2) => {
        const btn = document.querySelector(selector1)
        const btnColor = document.querySelector(selector2)
        btn.addEventListener('click', () => {
            btn.style.backgroundColor= 'rgba(0,0,0, 1)'
            btnColor.style.cssText = `fill: #ffffff`;
            setTimeout(() => {
                btn.style.backgroundColor= 'transparent'
                btnColor.style.cssText = `fill: #000000`;
            },200)
    
        })
    }
    hoverBtnsSlider('.place__gallery__slider__btn_next', '.place__gallery__slider__btn_color_next')
    hoverBtnsSlider('.place__gallery__slider__btn_prev', '.place__gallery__slider__btn_color_prev')
}