document.addEventListener("DOMContentLoaded", function(event) { 
	// menu
	let menuList = document.querySelector('.menu__list');
	let burger = document.querySelector('.header__burger');
	let close = document.querySelector('.menu__close');
	let menu = document.querySelector('.menu');
	let body = document.querySelector('body');
	let html = document.querySelector('html');
	burger.onclick = function(){
		menu.classList.add('menu--open');
		body.classList.add('overflow-hidden');
		html.classList.add('overflow-hidden');
	}
	close.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}
	menuList.onclick = function(){
		menu.classList.remove('menu--open');
		body.classList.remove('overflow-hidden');
		html.classList.remove('overflow-hidden');
	}
	// simplebar
	document.querySelectorAll('.adv__box-wrap').forEach(el => {
		new SimpleBar(el)
	});

	document.querySelectorAll('.fift__box-wrap').forEach(el => {
		new SimpleBar(el)
	});

	document.querySelectorAll('.steps__box-wrap').forEach(el => {
		new SimpleBar(el)
	});
	// swiper
	const swiper = new Swiper('.comments__slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	// spoilers
	let qaItems = document.querySelectorAll('.qa__item');
	for(let i = 0; i<qaItems.length; i++){
		qaItems[i].onclick = function(){
			if(this.classList.contains('qa__item--open')){
				this.classList.remove('qa__item--open');
			} else {
				this.classList.add('qa__item--open');
			}
		}
	}
	// modals
	const modals = document.querySelectorAll('[data-modal]');
	modals.forEach(function (trigger) {
		trigger.addEventListener('click', function (event) {
			event.preventDefault();
			const modal = document.getElementById(trigger.dataset.modal);
			modal.classList.add('open');
			const exits = modal.querySelectorAll('.modal-exit');
			exits.forEach(function (exit) {
			exit.addEventListener('click', function (event) {
				event.preventDefault();
				modal.classList.remove('open');
			});
			});
		});
	});


	document.querySelector('.can__item-circle').classList.add('magictime', 'fadeIn')
});