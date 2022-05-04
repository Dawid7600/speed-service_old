var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	breakpoints: {
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1440: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

window.smoothScroll = function (target) {
	var scrollContainer = target;
	do {
		//find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do {
		//find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while ((target = target.offsetParent));

	scroll = function (c, a, b, i) {
		i++;
		if (i > 30) return;
		c.scrollTop = a + ((b - a) / 30) * i;
		setTimeout(function () {
			scroll(c, a, b, i);
		}, 20);
	};
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

AOS.init();

function menuAnimation() {
	const menu = document.getElementById(menu);
	element.classList.toggle("animate__animated animate__bounce");
}
