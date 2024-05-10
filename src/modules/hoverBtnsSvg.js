


export const hoverBtnsSvg = ({btnSelector, iconSelector, btnColorBefore, btnColorAfter, iconColorBefore, iconColorAfter}) => {


    const btns = document.querySelectorAll(btnSelector)
    const icons = document.querySelectorAll(iconSelector)

    btns.forEach((btn,i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.style.backgroundColor= btnColorBefore
            icons[i].style.cssText = iconColorBefore
            setTimeout(() => {
                btn.style.backgroundColor= btnColorAfter
                icons[i].style.cssText = iconColorAfter;
            },200)
    
        })
    })
    
 
    
    
    
}
