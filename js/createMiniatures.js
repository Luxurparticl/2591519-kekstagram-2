import { photos } from './data.js';

const photoDescription = photos();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const picturesListFragment = document.createDocumentFragment();

photoDescription.forEach((photoElement) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photoElement.url;
  pictureElement.querySelector('.picture__img').alt = photoElement.description;
  pictureElement.querySelector('.picture__comments').textContent = photoElement.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photoElement.likes;
  picturesListFragment.appendChild(pictureElement);
});

picturesList.appendChild(picturesListFragment);

export {picturesList};
