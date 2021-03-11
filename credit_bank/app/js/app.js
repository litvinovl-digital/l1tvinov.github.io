// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')



document.addEventListener('DOMContentLoaded', () => {

let tabs = document.querySelector('.tabs')
let btns = tabs.querySelectorAll('.tabs__btn')
let items = tabs.querySelectorAll('.tabs__item')

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('active')})
		item[i].classList.add('active')
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		change([btns, items], i)
	})
}

})
