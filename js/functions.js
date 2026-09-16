const getStringLength = (string, maxLength) => string.length <= maxLength;

// Строка короче 20 символов
console.log(getStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(getStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(getStringLength('проверяемая строка', 10)); // false


const getPalindrom = function (string) {
  const normaliseString = string.replaceAll(' ', '').toUpperCase();
  let palindromString = '';
  for (let i = normaliseString.length - 1; i >= 0; i--) {
    const stringSymbol = normaliseString[i];
    palindromString += stringSymbol;
  }
  return palindromString === normaliseString;
};

console.log(getPalindrom('топот'));
console.log(getPalindrom('Лёша на полке клопа нашёл '));
console.log(getPalindrom('ДовОд'));


const getNumber = function (string) {
  let result = '';

  string = string.toString();
  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false){
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
}

console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));
console.log(getNumber(2023));
console.log(getNumber(-1));
console.log(getNumber(1.5));


