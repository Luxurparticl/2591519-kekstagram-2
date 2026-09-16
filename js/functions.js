const getStringLength = (string, maxLength) => string.length <= maxLength;

getStringLength();

const getPalindrom = function (string) {
  const normaliseString = string.replaceAll(' ', '').toUpperCase();
  let palindromString = '';
  for (let i = normaliseString.length - 1; i >= 0; i--) {
    const stringSymbol = normaliseString[i];
    palindromString += stringSymbol;
  }
  return palindromString === normaliseString;
};

getPalindrom();

const getNumber = function (string) {
  let result = '';

  string = string.toString();
  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false){
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

getNumber();
