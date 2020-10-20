const pageBody = document.querySelector('.page-body');

const sliderItems = document.querySelectorAll('.slider__item');
const sliderButtons = document.querySelectorAll('.slider__button');

const writeUsLink = document.querySelector('.contacts__link');
const writeUsModal = document.querySelector('.write-us');

const writeUsClose = document.querySelector('.write-us--close');
const overlay = document.querySelector('.overlay');

const userName = writeUsModal.querySelector('[name=user-name]');
const userEmail = writeUsModal.querySelector('[name=user-email]');
const userText = writeUsModal.querySelector('[name=user-text]');

const writeUsForm = writeUsModal.querySelector('form');
const storageUserName = localStorage.getItem('user-name');

const isStorageSupport = true;
let storage = '';



try {
  storage = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add('modal-show');
  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

writeUsForm.addEventListener('submit', function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    writeUsForm.classList.remove('modal-error');
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('user-name', userName.value);
    }
  }
});

writeUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUsModal.classList.remove('modal-show');
  writeUsModal.classList.remove('modal-error');
});

overlay.addEventListener('click', function() {
  writeUsModal.classList.remove('modal-show');
  writeUsModal.classList.remove('modal-error');
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains('modal-show')) {
      evt.preventDefault();
      mapModal.classList.remove('modal-show');
    } else if (writeUsModal.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsModal.classList.remove('modal-show');
      writeUsModal.classList.remove('modal-error');
    }
  }
});


// слайдер

sliderButtons[0].addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItems[0].classList.add('slider__item--active');
  sliderItems[1].classList.remove('slider__item--active');
  sliderItems[2].classList.remove('slider__item--active');

  sliderButtons[0].classList.add('slider__button--active');
  sliderButtons[1].classList.remove('slider__button--active');
  sliderButtons[2].classList.remove('slider__button--active');

  if (pageBody.classList.contains('bg-silvergrey') || pageBody.classList.contains('bg-coffee')) {
    pageBody.classList.remove('bg-silvergrey');
    pageBody.classList.remove('bg-coffee');
  }
});

sliderButtons[1].addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItems[1].classList.add('slider__item--active');
  sliderItems[0].classList.remove('slider__item--active');
  sliderItems[2].classList.remove('slider__item--active');

  sliderButtons[1].classList.add('slider__button--active');
  sliderButtons[0].classList.remove('slider__button--active');
  sliderButtons[2].classList.remove('slider__button--active');

  if (!pageBody.classList.contains('bg-silvergrey') || pageBody.classList.contains('bg-coffee')) {
    pageBody.classList.remove('bg-coffee');
    pageBody.classList.add('bg-silvergrey');
  }
});

sliderButtons[2].addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderItems[2].classList.add('slider__item--active');
  sliderItems[0].classList.remove('slider__item--active');
  sliderItems[1].classList.remove('slider__item--active');
  sliderButtons[2].classList.add('slider__button--active');
  sliderButtons[0].classList.remove('slider__button--active');
  sliderButtons[1].classList.remove('slider__button--active');

  if (pageBody.classList.contains('bg-silvergrey')) {
    pageBody.classList.remove('bg-silvergrey');
    pageBody.classList.add('bg-coffee');
  }
});
