const unknownAvatarImg = './assets/img/avatar.png';

let ratingValue = '';
let currentLanguage;
let prevLanguage;

numberOfComments.innerHTML = [].concat(...commentsData).length;
numberOfQuestions.innerHTML = [].concat(...questionData).length;

const createComment = (comment, isFeedback) => {
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
    'Незарегестрированный пользователь'; 

  const commentText = document.createElement('p');
  commentText.innerHTML = comment.comment || '';

  commentContent.append(userData);
  if(isFeedback) {
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('comment__rating-container');

    for(let i = 0; i < 5; i += 1) {
      const star = document.createElement('div');
      star.classList.add('comment__start');
      const fill = Number(comment.rating) <= i ? '#C4C4C4' : '#00A3FF';
      star.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 0L28.1126 13.3986L42.8988 15.5471L32.1994 25.9764L34.7252 40.7029L21.5 33.75L8.27483 40.7029L10.8006 25.9764L0.101229 15.5471L14.8874 13.3986L21.5 0Z" fill="${fill}"/>
        </svg>
      ` 
      ratingContainer.append(star);
    }

    commentContent.append(ratingContainer); 
  }  
  commentContent.append(commentText);
  commentContainer.append(avatarImg)
  commentContainer.append(commentContent);

  return commentContainer;
}

commentsData.forEach((page) => {
  const commentPage = document.createElement('div');
  commentsContainer.append(commentPage);
  page.forEach((comment)=> {
    commentPage.append(createComment(comment, true));
  });
  // commentsContainer.slickAdd(commentPage);
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

const addComment = (isFeedback) => {
  const commentTextarea = isFeedback ? feedbackTextarea : questionTextarea;
  const container = isFeedback ? commentsContainer : questionContainer;
  const quantity = isFeedback ? numberOfComments : numberOfQuestions;
  if(commentTextarea.value) {
    const data = isFeedback ? commentsData : questionData;

    if(data[data.length - 1].length === 2){
      data.push([]);
      addComment();
    } else {
      container.innerHTML = '';
      data[data.length - 1].push({
        rating: ratingValue, 
        comment: commentTextarea.value
      });
      data.forEach((page) => {
        const commentPage = document.createElement('div');
        container.append(commentPage);
        page.forEach((comment)=> {
          commentPage.append(createComment(comment, isFeedback));
        })
      });
      ratingValue = '';
      commentTextarea.value = '';
      ratingInput.forEach(el => el.checked = false);
      removeDisplayBlock(modalWindowForComments);
      quantity.innerHTML = [].concat(...data).length;
    }  
  } else return;
};

languageDropdownMenu.addEventListener('click', changeLanguage);
languageSelect.addEventListener('click', openDropdownMenu);

mobileDropdownBtn.addEventListener('click', () => {
  if(mobileDropdownMenu.style.height < '20px') {
    mobileDropdownMenu.style.height = '330px';
  } else {
    mobileDropdownMenu.style.height = '0px';
  }
})

closeModalWindowCross.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
getCouponBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
cancelModalWindowBtn.addEventListener('click', () => removeDisplayBlock(modalWindowForGifts));
getGiftsBtn.addEventListener('click',  () => addDisplayBlock(modalWindowForGifts));

giveFeedbackBtn.addEventListener('click', () => addDisplayBlock(modalWindowForComments));
modalCommentsheader.addEventListener('click', (event)=> {
   if(event.target.classList.contains('give-feedback-page') || 
      event.target.classList.contains('ask-question-page') &&
      !event.target.classList.contains('active-comment')) {
    modalFeedbackPage.classList.toggle('active-comment');
    modalQuestionPage.classList.toggle('active-comment');
    commentContetntBlock.classList.toggle('display-none');
    questionContentBlock.classList.toggle('display-none');
    feedbackHeader.classList.toggle('font-weight-bold');
    questionsHeader.classList.toggle('font-weight-bold');
    commentsContainer.classList.toggle('display-none');
    questionContainer.classList.toggle('display-none');
   }
})

commentsHeader.addEventListener('click', (event) => {
  if(event.target.classList.contains('comments__header') || 
      event.target.classList.contains('questions__header') &&
      !event.target.classList.contains('font-weight-bold')) {
    feedbackHeader.classList.toggle('font-weight-bold');
    questionsHeader.classList.toggle('font-weight-bold');
    commentsContainer.classList.toggle('display-none');
    questionContainer.classList.toggle('display-none');
   }
})

modalWindowCommentsCancelBtn.addEventListener('click', () => {
  ratingValue = '';
  feedbackTextarea.value = '';
  questionTextarea.value = '';
  ratingInput.forEach(el => el.checked = false);
  removeDisplayBlock(modalWindowForComments)
});
modalWindowCommentsCross.addEventListener('click', () => {
  ratingValue = '';
  feedbackTextarea.value = '';
  questionTextarea.value = '';   
  ratingInput.forEach(el => el.checked = false);
  removeDisplayBlock(modalWindowForComments)
});
ratingInput.forEach(el => el.addEventListener('click', (e) => {
  ratingValue = e.target.value; 
}));

sendCommentBtn.addEventListener('click', () => { 
  addComment(questionContentBlock.classList.contains('display-none'))
});

window.addEventListener('click', () => {
  if(isContainsDisplayBlock(languageDropdownMenu)) {
    removeDisplayBlock(languageDropdownMenu);
  }
})

