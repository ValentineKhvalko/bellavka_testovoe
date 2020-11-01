const addDisplayBlock = (elem) => elem.classList.add('display-block');
const removeDisplayBlock = (elem) => elem.classList.remove('display-block');

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
      star.innerHTML = svgStarLayout(fill); 
      ratingContainer.append(star);
    }

    commentContent.append(ratingContainer); 
  }  
  commentContent.append(commentText);
  commentContainer.append(avatarImg)
  commentContainer.append(commentContent);

  return commentContainer;
}

const isLessThanTen = (number, isFirstNumber) => {
  if(isFirstNumber) {
    return number < 10 ? '0' : String(number).split('')[0]
  } else {
    return number < 10 ? String(number) : String(number).split('')[1]
  };
}


const iteratingOverTimerElementsAndInsertingNumbers = (elements, number) => {
  elements.forEach(elem => elem.innerHTML = number);
}