//language selector
const defaultLanguage = document.querySelector('#BY');
const languages = document.querySelectorAll('.language-select__dropdown-menu__li');
const currentFlag = document.querySelector('.language-select__current-flag');
const languageDropdownMenu = document.querySelector('.language-select__dropdown-menu');
const languageSelect = document.querySelector('.language-select');
const currentFlagArrow = document.querySelector('.current-flag__arrow');

//Mobile dropdown menu
const mobileDropdownBtn = document.querySelector('.show-dropdown-mobile-menu');
const mobileDropdownMenu = document.querySelector('.dropdown-menu-mobile');
const mobileDropdownArrow = document.querySelector('.dropdown-mobile-menu__arrow');

//Btns
const getGiftsBtn = document.querySelectorAll('.gifts-container__btn');
const getCouponBtn = document.querySelector('.gifts-container__btn-get');
const cancelModalWindowBtn = document.querySelector('.gifts-container__btn-cancel');
const giveFeedbackBtn = document.querySelector('.give-feedback-btn');
const modalWindowCommentsCancelBtn = document.querySelector('.modal-window-for-comment__cancel-btn');

//Gift modal windos
const modalWindowForGifts = document.querySelector('.modal-window-for-gifts');
const modalWindowForComments = document.querySelector('.modal-window-for-comment');
const closeModalWindowCross = document.querySelector('.modal-window__close-btn');

//Comments
const commentsHeader = document.querySelector('.comments-and-questions-continer__header');
const feedbackHeader = document.querySelector('.comments__header');
const questionsHeader = document.querySelector('.questions__header');
const commentsContainer = document.querySelector('.comments');
const questionContainer = document.querySelector('.questions');
const numberOfComments = document.querySelector('#number-of-comments');
const numberOfQuestions = document.querySelector('#number-of-questions');
const modalWindowCommentsCross = document.querySelector('.modal-window-for-comment__close-btn');
const sendCommentBtn = document.querySelector('.modal-window-for-comment__send-btn');
const ratingInput = document.querySelectorAll('.input-rating');
const feedbackTextarea = document.querySelector('.modal-window-for-comment__textarea'); 
const questionTextarea = document.querySelector('.modal-window-for-question__textarea'); 

//modalWindowForCommentOrQuestions
const modalCommentsheader = document.querySelector('.modal-window__header');
const modalFeedbackPage = document.querySelector('.give-feedback-page');
const modalQuestionPage = document.querySelector('.ask-question-page');

const commentContetntBlock = document.querySelector('.modal-window-for-comment__content');
const questionContentBlock = document.querySelector('.modal-window-for-question__content');

const unknownAvatarImg = './assets/img/avatar.png';
const svgStarLayout = (fill) => {
  return `
    <svg width="15" height="15" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 0L28.1126 13.3986L42.8988 15.5471L32.1994 25.9764L34.7252 40.7029L21.5 33.75L8.27483 40.7029L10.8006 25.9764L0.101229 15.5471L14.8874 13.3986L21.5 0Z" fill="${fill}"/>
    </svg>
  ` 
} 