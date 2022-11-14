function getRandomIntInclusive(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  if ( a > b) {
    [a, b] = [b, a];
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a; //Максимум и минимум включаются
}

/*function getStringLength (string, b) {
  return string.length <= b;
}*/

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {getRandomIntInclusive, getRandomArrayElement};
