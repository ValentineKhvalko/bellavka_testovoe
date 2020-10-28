let ratingValue = '';
let currentLanguage;
let prevLanguage;

numberOfComments.innerHTML = commentsData.length;
numberOfQuestions.innerHTML = questionData.length;

commentsData.forEach((comment) => {
  commentsContainer.append(createComment(comment, true));
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
  if(!languageDropdownMenu.classList.contains('language-select-height')) {
    languageDropdownMenu.classList.add('language-select-height');
  } else {
    languageDropdownMenu.classList.remove('language-select-height');
  }
  currentFlagArrow.classList.toggle('rotate-arrow');
  event.stopPropagation();
}

const changeLanguage = (event) => {
  const language = event.target.closest('.language-select__dropdown-menu__li');
  if(language) {
    prevLanguage = currentLanguage;
    saveLanguage(language.id);
  }
}

isContainsDisplayBlock = (elem) => {
  return elem.classList.contains('display-block');
}; 

const addComment = (isFeedback) => {
  const commentTextarea = isFeedback ? feedbackTextarea : questionTextarea;
  const container = isFeedback ? commentsContainer : questionContainer;
  const quantity = isFeedback ? numberOfComments : numberOfQuestions;
  if(commentTextarea.value) {
    const data = isFeedback ? commentsData : questionData;
    const comment = {
      rating: ratingValue, 
      comment: commentTextarea.value
    }
    data.push(comment);
    container.append(createComment(comment, isFeedback));
    ratingValue = '';
    commentTextarea.value = '';
    ratingInput.forEach(el => el.checked = false);
    removeDisplayBlock(modalWindowForComments);
    quantity.innerHTML = data.length;
  } else return;
};

const toggleStilesToCommentPageElements = () => {
  modalFeedbackPage.classList.toggle('active-comment');
  modalQuestionPage.classList.toggle('active-comment');
  commentContetntBlock.classList.toggle('display-none');
  questionContentBlock.classList.toggle('display-none');
  feedbackHeader.classList.toggle('font-weight-bold');
  questionsHeader.classList.toggle('font-weight-bold');
  commentsContainer.classList.toggle('display-none');
  questionContainer.classList.toggle('display-none');
}

const resetModalWindowComments = () => {
  ratingValue = '';
  feedbackTextarea.value = '';
  questionTextarea.value = '';
  ratingInput.forEach(el => el.checked = false);
  removeDisplayBlock(modalWindowForComments)
}

const init = () => {
  languageDropdownMenu.addEventListener('click', changeLanguage);
  languageSelect.addEventListener('click', openDropdownMenu);

  mobileDropdownBtn.addEventListener('click', () => {
    if(mobileDropdownMenu.style.height < '20px') {
      mobileDropdownArrow.classList.toggle('rotate-arrow');
      mobileDropdownMenu.style.height = '330px';
    } else {
      mobileDropdownArrow.classList.toggle('rotate-arrow');
      mobileDropdownMenu.style.height = '0px';
    }
  })

  closeModalWindowCross.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
  getCouponBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
  cancelModalWindowBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
  getGiftsBtn.forEach(el => el.addEventListener('click',  () => addDisplayBlock(modalWindowForGifts)));

  giveFeedbackBtn.addEventListener('click', () => addDisplayBlock(modalWindowForComments));
  modalCommentsheader.addEventListener('click', (event)=> {
    if((event.target.classList.contains('give-feedback-page') || 
        event.target.classList.contains('ask-question-page')) &&
        !event.target.classList.contains('active-comment')) {
          toggleStilesToCommentPageElements();
    }
  })

  commentsHeader.addEventListener('click', (event) => {
    if((event.target.classList.contains('comments__header') || 
        event.target.classList.contains('questions__header')) &&
        !event.target.classList.contains('font-weight-bold')) {
          toggleStilesToCommentPageElements();
    }
  })

  modalWindowCommentsCancelBtn.addEventListener('click', resetModalWindowComments);
  modalWindowCommentsCross.addEventListener('click', resetModalWindowComments);

  ratingInput.forEach(el => el.addEventListener('click', (e) => {
    ratingValue = e.target.value; 
  }));

  sendCommentBtn.addEventListener('click', () => { 
    addComment(questionContentBlock.classList.contains('display-none'))
  });

  window.addEventListener('click', () => {
    if(languageDropdownMenu.classList.contains('language-select-height')) {
      languageDropdownMenu.classList.remove('language-select-height');  
      currentFlagArrow.classList.remove('rotate-arrow');
    }
  })
}

document.addEventListener("DOMContentLoaded", init)

