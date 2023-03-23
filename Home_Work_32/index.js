const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {

	if (index !== 0) slide.classList.add('hidden');
  	btnPrev.style.display = "none";
	slide.dataset.index = index;
	sliderItems[0].setAttribute('data-active', '');

});

btnNext.onclick = function () {
	showNextSlide('next');
};

btnPrev.onclick = function () {
	showNextSlide('prev');
};

function showNextSlide(direction) {
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

  if (currentSlideIndex + 2 === sliderItems.length){
    btnNext.style.display = "none";
  } else  {
    btnNext.style.display = "block";
  }

  if (currentSlideIndex -1 === 0 ){
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }

	let nextSlideIndex;
	if (direction === 'next' ) {
		nextSlideIndex = currentSlideIndex + 1  === sliderItems.length ? currentSlideIndex  : currentSlideIndex + 1 ;

	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex  === 0 ? currentSlideIndex : currentSlideIndex - 1;
	}

	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}
    