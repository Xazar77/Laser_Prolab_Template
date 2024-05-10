

export const hoverBtns = (selector, color1, color2, color3) => {
    
    const btns = document.querySelectorAll(selector)
    
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.style.background= color1
            if(e.target.textContent) btn.style.color= color3
            setTimeout(() => {
                btn.style.background= color2
                if(e.target.textContent) btn.style.color= color1
            },200)
        })
    })



}