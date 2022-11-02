let id = 1;

//let url = '';

/*const DESCRIPTION = [
  'Закат',
  'Небо',
  'Рассвет',
  'Ночь',
  'День',
  'Красота',
];*/

//let likes;


const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


/*const NAME = [
  'Артем',
  'Петя',
  'Вася',
  'Света',
];*/


function getRandomIntInclusive(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  if ( a < b) {
    [a, b] = [b, a];
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a; //Максимум и минимум включаются
}


function getStringLength (string, b) {
  return string.length <= b;
}

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];


const CREATE_COMMENTS = function () {
  return {
    id: id++,
    avatar: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
  };
};

const comments = Array.from({length: 3}, CREATE_COMMENTS);

console.log(comments);

getRandomIntInclusive(1, 5);
getStringLength ('ab', 8);
