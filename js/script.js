const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
	navigation.classList.toggle('active');
});

const getSlidesPerView = () => {
	width = window.innerWidth;
	if (width < 420) {
		return 1;
	} else if (width < 760) {
		return 2;
	} else return 3;
};

const swiper = new Swiper('.mySwiper', {
	slidesPerView: getSlidesPerView(),
	spaceBetween: 10,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper2 = new Swiper(".mySwiperservices", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	
	breakpoints: {
	  560: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  950: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1250: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	},
  });