

let swiper = new Swiper(".gallery__thumbs", {
	spaceBetween: 25,
	slidesPerView: 1,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
	    1300: {
	    	slidesPerView: 4,
	    },
	    920: {
	    	slidesPerView: 3,
	    },
	    780: {
	    	slidesPerView: 2,
	    }
	}
});
let swiper2 = new Swiper(".gallery__view", {
	spaceBetween: 10,
	slidesPerView: 1,
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
	effect: 'fade',
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	thumbs: {
		swiper: swiper,
	},
});

let burger = document.querySelector('.js-burger'),
	categories = document.querySelector('.js-menu');

burger.addEventListener('click', event => {
	if(burger.classList.contains('active')) {
		document.body.style.overflow = '';
	} else {
		document.body.style.overflow = 'hidden';
	}
	burger.classList.toggle('active');
	categories.classList.toggle('hidden');
})