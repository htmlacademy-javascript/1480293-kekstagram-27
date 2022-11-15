import {createPhotosDescription} from './data.js';

const photosContainer = document.querySelector('.pictures');
//userDialog.classList.remove('hidden');

//userDialog.querySelector('.setup-similar').classList.remove('hidden');

//const similarListPictures = picturesContainer.querySelector('.img-upload');
const similarPhotosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotosDescription = createPhotosDescription();

const similarListFragment = document.createDocumentFragment();

similarPhotosDescription.forEach((photo) => {
  const photoElement = similarPhotosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__img').src = photo.URL;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  similarListFragment.appendChild(photoElement);
});

const createphotosContainer = function() {
  photosContainer.appendChild(similarListFragment);
};
export {createphotosContainer};

