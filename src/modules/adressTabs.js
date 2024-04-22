
import { getData } from './getData'

export const adressTabs = () => {
	const adressWrap = document.querySelector('.adress__slider_wrapper')

	const arr = []

	const renderAdressItem = (data) => {
		adressWrap.innerHTML = ''
		data.forEach((el, i) => {
			const { adress } = el
			adressWrap.insertAdjacentHTML('beforeend', `
			<div class="adress__slider_item swiper-slide"><a href="cardpage.html" class="adress__slider_link">${adress}</a></div>
			`)
			arr.push(el)
			localStorage.setItem('adress', JSON.stringify(arr))

			
		
			
		})
	}

	
	getData().then(({studios}) => {
		renderAdressItem(studios)
	})



	
}