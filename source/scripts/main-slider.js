const slider = document.querySelector('.hero-slider');
const nextBtn = document.querySelector('.main-slider__next');
const prevBtn = document.querySelector('.main-slider__previous');
const pagination = document.querySelectorAll('.slider-pagination__btn');

prevBtn.setAttribute('disabled', '');
pagination[0].setAttribute('aria-current', 'true');


nextBtn.onclick = () => {
  slider.append(slider.querySelector('.hero-slider__item:first-child'));
  const slides = document.querySelectorAll('.hero-slider__item');

  if (slides[0].getAttribute('id') === '2') {
    prevBtn.removeAttribute('disabled');
    pagination[0].removeAttribute('aria-current', 'true');
    pagination[1].setAttribute('aria-current', 'true');
  }

  if (slides[0].getAttribute('id') === '3') {
    nextBtn.setAttribute('disabled', '');
    pagination[1].removeAttribute('aria-current', 'true');
    pagination[2].setAttribute('aria-current', 'true');
  }

};

prevBtn.onclick = () => {
  slider.prepend(slider.querySelector('.hero-slider__item:last-child'));
  const slides = document.querySelectorAll('.hero-slider__item');

  if (slides[0].getAttribute('id') === '2') {
    nextBtn.removeAttribute('disabled');
    pagination[2].removeAttribute('aria-current', 'true');
    pagination[1].setAttribute('aria-current', 'true');
  }

  if (slides[0].getAttribute('id') === '1') {
    prevBtn.setAttribute('disabled', '');
    pagination[1].removeAttribute('aria-current', 'true');
    pagination[0].setAttribute('aria-current', 'true');
  }
};
