import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
//const cancelButton = document.querySelector('.big-picture__cancel');

const commentItem = ({avatar, name, massage}) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('socil__comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__picture').textContent = massage;
  return comment;
};

const displayComments = (comments) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = commentItem(comment);
    fragment.append(commentElement);

  });
  socialComments.append(fragment);

};

const hideBigPictureContainer = () => {
  bigPictureContainer.classList.add('hide');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKey);
};

function onEscKey (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPictureContainer();
  }
}

/*const onCancelButtonClick = () => {
  hideBigPictureContainer();
};*/

const createBigPicture = (photo) => {
  bigPictureContainer.querySelector('.big-picture__img img').src = photo.url;
  bigPictureContainer.querySelector('.likes-count').textContent = photo.likes;
  bigPictureContainer.querySelector('.social__caption').textContent = photo.description;
  bigPictureContainer.querySelector('.comments-count').textContent = photo.comments.length;
};


const showBigPicture = (photo) => {
  bigPictureContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  createBigPicture(photo);
  displayComments(photo.comments);

};

//cancelButton.addEventListner('click', onCancelButtonClick);

export {showBigPicture};
