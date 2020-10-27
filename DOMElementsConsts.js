//language selector
const defaultLanguage = document.querySelector('#BY');
const languages = document.querySelectorAll('.language-select__dropdown-menu__li');
const currentFlag = document.querySelector('.language-select__current-flag');
const languageDropdownMenu = document.querySelector('.language-select__dropdown-menu');
const languageSelect = document.querySelector('.language-select');

//Mobile dropdown menu
const mobileDropdownBtn = document.querySelector('.show-dropdown-mobile-menu');
const mobileDropdownMenu = document.querySelector('.dropdown-menu-mobile');

//Btns
const getGiftsBtn = document.querySelector('.gifts-container__btn');
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
const questionContentBlock = document.querySelector('.modal-window-for-question__content')