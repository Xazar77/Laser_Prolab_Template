export const animate = ({timing, draw, duration}) => {

    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

export const hoverBgBtns = (selector, color1, color2) => {
    
    const btns = document.querySelectorAll(selector)
  
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            e.preventDefault();
            btn.style.background= color1
            setTimeout(() => {
                btn.style.background= color2
            },200)
        })
    })
}

export const hoverColorTextBtns = (selector, color1, color2) => {
    const btns = document.querySelectorAll(selector)

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // console.log(btn)
            e.preventDefault();
                btn.style.color= color1
            setTimeout(() => {
                btn.style.color= color2
            },200)
        })
    })
}

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
            },100)
    
        })
    })
}