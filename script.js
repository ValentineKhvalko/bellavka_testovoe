const defaultLanguage = document.querySelector('#BY');
const languages = document.querySelectorAll('.language-select__dropdown-menu__li');
const currentFlag = document.querySelector('.language-select__current-flag');
const languageDropdownMenu = document.querySelector('.language-select__dropdown-menu');
const languageSelect = document.querySelector('.language-select');
const getGiftsBtn = document.querySelector('.gifts-container__btn');
const modalWindowForGifts = document.querySelector('.modal-window-for-gifts');
const modalWindowForComments = document.querySelector('.modal-window-for-comment');
const closeModalWindowCross = document.querySelector('.modal-window__close-btn');
const getCouponBtn = document.querySelector('.gifts-container__btn-get');
const cancelModalWindowBtn = document.querySelector('.gifts-container__btn-cancel');
const commentsContainer = document.querySelector('.comments');
const numberOfComments = document.querySelector('#number-of-comments');
const giveFeedbackBtn = document.querySelector('.give-feedback-btn');
const modalWindowCommentsCancelBtn = document.querySelector('.modal-window-for-comment__cancel-btn');
const modalWindowCommentsCross = document.querySelector('.modal-window-for-comment__close-btn');
const sendCommentBtn = document.querySelector('.modal-window-for-comment__send-btn');

numberOfComments.innerHTML = [].concat(...commentsData).length;

const unknownAvatarImg = 'assets/img/avatar.png';

let currentLanguage;
let prevLanguage;

const createComment = (comment) => {
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('comment__avatar');
  avatarImg.src = comment.imgSrc || unknownAvatarImg;

  const commentContent = document.createElement('div');
  commentContent.classList.add('comment__content');

  const userData = document.createElement('h2');
  userData.innerHTML = comment.name ? 
    `${comment.surname} ${comment.name} ${comment.patronymic}`: 
    'Незарегестрированный пользователь' 

  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('comment__rating-container');

  for(let i = 0; i < 5; i += 1) {
    const star = document.createElement('div');
    star.classList.add('comment__start');
    star.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 0L28.1126 13.3986L42.8988 15.5471L32.1994 25.9764L34.7252 40.7029L21.5 33.75L8.27483 40.7029L10.8006 25.9764L0.101229 15.5471L14.8874 13.3986L21.5 0Z" fill="#00A3FF"/>
      </svg>
    ` 
    ratingContainer.append(star);
  }

  const commentText = document.createElement('p');
  commentText.innerHTML = comment.comment || '';

  commentContent.append(userData);
  commentContent.append(ratingContainer); 
  commentContent.append(commentText);
  commentContainer.append(avatarImg)
  commentContainer.append(commentContent);

  return commentContainer;
}

commentsData.forEach((page) => {
  page.forEach((comment)=> {
    commentsContainer.append(createComment(comment));
  })
})

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

const addDisplayBlock = (elem) => elem.classList.add('display-block');

const removeDisplayBlock = (elem) => elem.classList.remove('display-block');

isContainsDisplayBlock = (elem) => {
  return elem.classList.contains('display-block');
};


closeModalWindowCross.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
getCouponBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
cancelModalWindowBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
getGiftsBtn.addEventListener('click',  () => addDisplayBlock(modalWindowForGifts));

giveFeedbackBtn.addEventListener('click', () => addDisplayBlock(modalWindowForComments));
modalWindowCommentsCancelBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForComments));
modalWindowCommentsCross.addEventListener('click', () => removeDisplayBlock(modalWindowForComments));
// sendCommentBtn


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
  $('comments').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".comment__prev-arrow"),
    nextArrow: $(".comment__next-arrow"),
  })
  setLanguage();
});

