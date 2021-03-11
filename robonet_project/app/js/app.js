// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;



// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')



$(document).ready(function(){


let owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
    });

    $('.button-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    
    $('.button-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })

	});



document.addEventListener('DOMContentLoaded', () => {
	


const tabsBtn   = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}




})
