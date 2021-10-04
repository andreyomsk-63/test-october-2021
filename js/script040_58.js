let dots = document.getElementsByClassName('dots-item'),
	dotsArea = document.getElementsByClassName('dots-block')[0],
	slides = document.getElementsByClassName('sliders-item'),
	prevBtn = document.getElementById('left-button'),
	nextBtn = document.getElementById('right-button'),
	step = 1,
	slideIndex = 1;
			
showSlides(slideIndex);

function showSlides(n) {				// Функция показывает слайды
	if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}
	
	// Скрываем каждый слайд и убираем класс active с точек 
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
	}
	// Показываем активный слайд и привязываем соответствующий класс к точке 
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('active');
	//prompt('2')
	//autoSlider();
}
		
function plusSlides(n) {				 // Функция листает слайды вперёд
	showSlides(slideIndex += n);
}
		
function currentSlide(n) {				// Функция листает слайды назад
	showSlides(slideIndex = n);
}
		
// Обработчики событий со стрелок
prevBtn.onclick	= function () {
	plusSlides(-1);
}
		
nextBtn.onclick	= function () {
	plusSlides(1);
}
		
// Навещивание обработчика событий на блок с точками
dotsArea.onclick = function (e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if(e.target.classList.contains('dots-item') && e.target == dots[i-1]) {
			currentSlide(i);
		}
	}
}

// Анимация
setInterval(function() {
	plusSlides(1);
}, 6000)























