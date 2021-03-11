$(document).ready(function () {

	$('.slider').slick({
		dots: true,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		centerPadding: '160px'
	});


	// определение переменных
	var navToggleButton = $('#navigation__button');
	// var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.header-list');
	var navBlockOpen = 'header-list--open';
	var navLink = $('a.header-list__link');

	// функция для анимации иконки
	function navButtonToggle() {
		if (navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active")
		} else {
			navToggleButton.addClass("active")
		}
	}

	// События по клику на иконку навигации
	navToggleButton.on('click', function (e) {
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		navButtonToggle();
	})

	// События по клику на ссылки в навигационном меню
	navLink.on('click', function () {
		if (navBlock.hasClass(navBlockOpen)) {
			navBlock.removeClass(navBlockOpen);
			navButtonToggle()
		}
		navBlock.removeClass(navBlockOpen);
	})

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a, a.mouse_scroll, a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector: "nav a"
	});
});