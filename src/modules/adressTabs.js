
import { getData } from './getData'

export const adressTabs = () => {
	const adressWrap = document.querySelector('.adress__menu')
	


	
	// let count = 0
	// let arr = []



	
	
	const renderAdressItem = (data) => {
		adressWrap.innerHTML = ''
		data.forEach((el, i) => {
			const { adress } = el
			adressWrap.insertAdjacentHTML('beforeend', `
			<div class="adress__menu_item swiper-slide"><a href="cardpage.html" class="adress__menu_link">${adress}</a></div>
			`)

		})
	}
	
	
	getData().then(({studios}) => {
		renderAdressItem(studios)
	})
	
	// if(JSON.parse(localStorage.getItem('adress'))) {
	// 	const newArr = JSON.parse(localStorage.getItem('adress'))
	// 	// const adressLine = document.querySelector('.adress__slider')
	// 	let interval

	// 	const nextItem = () => {
	// 		const widthItem = adressWrap.offsetWidth / newArr.length
	// 		adressWrap.style.cssText = `
	// 		transform: translateX(-${widthItem * 2}px);
	// 		transition: transform .9s linear;
	// 		`
	// 	}

	// 	document.querySelector('.adress__menu').addEventListener('touchmove', () => {
	// 		console.log('touchmove')
	// 		nextItem()
			
	// 	});
	// 	// document.addEventListener('touchend',() => {
	// 	// 	count++
	// 	// 	nextItem(count)
	// 	// });
	// 	document.querySelector('.adress__menu').addEventListener('mousemove', (e) => {
	// 		console.dir(e)
	// 	});






		// interval = setInterval(() => {
		// 	const widthItem = adressWrap.offsetWidth / newArr.length
		// 	const countItem = Math.round(container.offsetWidth / widthItem)
		// 	nextItem(count)
		// 	count++
		// 	if(count > newArr.length - countItem) {
		// 		count --
		// 	} 
			
		// 	if(countItem * widthItem === adressLine.offsetWidth) {
		// 		clearInterval(interval)
		// 	}
		// }, 5000)
	// }

	
}