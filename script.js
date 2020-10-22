const defaultLanguage = document.querySelector('#BY');
const languages = document.querySelectorAll('.language-select__dropdown-menu__li');
const currentFlag = document.querySelector('.language-select__current-flag');
const languageDropdownMenu = document.querySelector('.language-select__dropdown-menu');
const languageSelect = document.querySelector('.language-select');
const getGiftsBtn = document.querySelector('.gifts-container__btn');
const modalWindowForGifts = document.querySelector('.modal-window');
const closeModalWindowCross = document.querySelector('.modal-window__close-btn');
const getCouponBtn = document.querySelector('.gifts-container__btn-get');
const cancelModalWindowBtn = document.querySelector('.gifts-container__btn-cancel');

let currentLanguage;
let prevLanguage;

const setLanguage = () => { 
  localStorage.getItem('language') 
    ? saveLanguage(localStorage.getItem('language')) 
    : saveLanguage(defaultLanguage.id);
}

const saveLanguage = (language) => {
  currentLanguage = [...languages].find((el) => el.id === language);
  currentFlag.innerHTML = '';
  currentFlag.append(currentLanguage);
  if(prevLanguage) languageDropdownMenu.append(prevLanguage);
  localStorage.setItem('language', language);
}   

const openDropdownMenu = (event) => {
  if(!languageDropdownMenu.classList.contains('display-block')) {
    languageDropdownMenu.classList.add('display-block');
  } else {
    languageDropdownMenu.classList.remove('display-block');
  }
  event.stopPropagation();
}

const changeLanguage = (event) => {
  const language = event.target.closest('.language-select__dropdown-menu__li');
  if(language) {
    prevLanguage = currentLanguage;
    saveLanguage(language.id);
  }
}

const getGifts = () => {
  modalWindowForGifts.classList.add('display-block');
}

const removeDisplayBlock = (elem) => {
  elem.classList.remove('display-block');
}

const closeModalWindow = () => {
  modalWindowForGifts.classList.remove('display-block');
}

isContainsDisplayBlock = (elem) => {
  return elem.classList.contains('display-block');
};

closeModalWindowCross.addEventListener('click', closeModalWindow);
getCouponBtn.addEventListener('click', closeModalWindow);
cancelModalWindowBtn.addEventListener('click', closeModalWindow);
getGiftsBtn.addEventListener('click', getGifts);
languageDropdownMenu.addEventListener('click', changeLanguage);
languageSelect.addEventListener('click', openDropdownMenu);
window.addEventListener('click', () => {
  if(isContainsDisplayBlock(languageDropdownMenu)) {
    removeDisplayBlock(languageDropdownMenu);
  }
})

$(document).ready(() => {
  $('.mercedes-amg-container__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.mercedes-amg-container__prev-arrow'),
    nextArrow: $('.mercedes-amg-container__next-arrow'),
  });
  $('.sales-container__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".sales-container__prev-arrow"),
    nextArrow: $(".sales-container__next-arrow"),
  });
  setLanguage();
});

