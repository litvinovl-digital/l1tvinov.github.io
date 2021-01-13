


window.onload = function() {
  
  if (document.getElementsByClassName("owl-carousel-menu")){
  	$('.owl-carousel-menu').owlCarousel({
  		center: true,
  		loop:true,
  		dots:false,
  		margin:10,
  		nav:true,
  		navElement: 'div',
  		navText : ['<img src="img/nav/prev.png" alt="">','<img src="img/nav/next.png" alt="">'],
  		responsive:{
  			0:{
  				items:1
  			},
  			721:{
  				items:2
  			}
  		}
  	});
  }
  
  
  // мобильное меню выезжающее
  $(document).ready(function() {
  	$('.burgerL').click(function (event) {
  		$('.burgerL, .menuTransform').toggleClass('active');
  		$('body').toggleClass('lock');
  	});
  });
  
  // маска телефона
  // let inputs = document.querySelectorAll('input[type="tel"]');
  // let im = new Inputmask('+7 (999) 999-99-99');
  // im.mask(inputs);
  
  //открытие модального окна через 3сек.
  setTimeout(function(){
  	$('#modal').trigger('click');
  }, 5000);
  
  // Переключатель отображения каталога
  
  var stringBtn = document.querySelector('#stringBtn');
  var tileBtn = document.querySelector('#tileBtn');
  var itemList = document.querySelectorAll('.item');
  
  if (document.getElementById("sortViwe")){
  	stringBtn.onclick = changeCatalogViwe;
  }
  
  if (document.getElementById("sortViwe")){
  	tileBtn.onclick = changeCatalogViwe;
  }
  function changeCatalogViwe() {
  	if(!(this.classList.contains('active'))) {
  		stringBtn.classList.toggle('active');
  		tileBtn.classList.toggle('active');
  		[].forEach.call(itemList, (e)=>{
  			e.classList.toggle('item--str');
  		});
  	}
  };
  
  //  фиксированное меню
  window.onscroll = () => {
  	const headerF = document.querySelector('.headerMenu');
  	const Y = window.scrollY;
  	if (Y > 900) {
  	
  		headerF.classList.add('headerMenu--fix');
  	} else if ( Y < 300) {
  		headerF.classList.remove('headerMenu--fix');
  	}
  };


}
// табы
if (document.getElementsByClassName("tabsBox")) {
  class TabList {
    constructor(buttonsContainer, tabs) {
      this.buttonsContainer = buttonsContainer;
      this.tabs = tabs;
      this.buttonsContainer.addEventListener('click', event => {
        const index = event.target.closest('.tablinks').dataset.value;
        let newActinEl = event.target.closest('.tablinks');

        const activIndex = this.buttonsContainer.querySelector('.active').dataset.value;
        let curActinEl = this.buttonsContainer.querySelector('.active');

        if (!(index == activIndex)) {
          this.openTab(index, newActinEl, curActinEl);
        }
      });
    }
    openTab(index, newActinEl, curActinEl) {
      this.tabs.querySelector('.active').classList.remove('active');
      this.tabs.querySelector(`.tab--${index}`).classList.add('active');
      newActinEl.classList.toggle('active');
      curActinEl.classList.toggle('active');

    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.querySelector('.buttons');
    const tabs = document.querySelector('.tabs');

    const tabList = new TabList(buttonsContainer, tabs);
  });

}
// табы конец