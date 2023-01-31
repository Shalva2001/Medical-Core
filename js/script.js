const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const consultationBtn = document.querySelectorAll('.consult');

consultationBtn.forEach((element) => {
	element.addEventListener('click', () => {
		window.location.href = '../pages/Login.html';
	});
});

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
});

var swiper2 = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 20,
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
