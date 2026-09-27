import './data.js';
import {photos} from './data.js';

// const names = ['Артём', 'Никита', 'Анна', 'Кирилл','Влад','Глеб', 'Мария', 'Александр', 'Дима'];

// const messages = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
// ];

// const MAX_ID = 25;
// const MIN_LIKES = 15;
// const MAX_LIKES = 200;
// const MIN_COMMENTS = 0;
// const MAX_COMMENTS = 30;

// let lastPhotoId = 0;
// let lastCommentsId = 0;

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// const getPhotoId = () => ++lastPhotoId;

// const getCommentsId = () => ++lastCommentsId;

// const getMessage = () => {
//   const firstIndex = getRandomInteger(0, messages.length - 1);
//   if (Math.random() < 0.5) {
//     return messages[firstIndex];
//   }

//   let secondIndex = '';
//   do {
//     secondIndex = getRandomInteger(0, messages.length - 1);
//   } while (secondIndex === firstIndex);
//   return `${messages[firstIndex]} ${messages[secondIndex]}`;
// };

// const createComment = () => {
//   const id = getCommentsId();

//   return {
//     id,
//     avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
//     message: getMessage(),
//     name: names[getRandomInteger(0, names.length - 1)]
//   };
// };

// const createPhotoDescription = () => {
//   const id = getPhotoId();
//   const commentCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
//   const comments = Array.from({length: commentCount}, () => createComment());

//   return {
//     id,
//     url: `photos/${id}.jpg`,
//     description: `Аватар № ${id}`,
//     likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
//     comments,
//   };
// };

// const photos = Array.from({length: MAX_ID}, () => createPhotoDescription());

photos();

// console.log(photos());
