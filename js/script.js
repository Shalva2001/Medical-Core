const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
	navigation.classList.toggle('active');
});

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
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