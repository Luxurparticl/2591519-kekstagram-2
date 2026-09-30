// const getStringLength = (string, maxLength) => string.length <= maxLength;

// getStringLength();

// const getPalindrom = function (string) {
//   const normaliseString = string.replaceAll(' ', '').toUpperCase();
//   let palindromString = '';
//   for (let i = normaliseString.length - 1; i >= 0; i--) {
//     const stringSymbol = normaliseString[i];
//     palindromString += stringSymbol;
//   }
//   return palindromString === normaliseString;
// };

// getPalindrom();

// const getNumber = function (string) {
//   let result = '';

//   string = string.toString();
//   for (let i = 0; i <= string.length; i++) {
//     if (Number.isNaN(parseInt(string[i], 10)) === false){
//       result += string[i];
//     }
//   }
//   return result === '' ? NaN : Number(result);
// };

// getNumber();

const getWorkTime = (startTime, endTime, meetingTime, durationTime) => {
  const timeStringToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const startTimeStr = timeStringToMinutes(startTime);
  const endTimeStr = timeStringToMinutes(endTime);
  const meetingTimeStr = timeStringToMinutes(meetingTime);
  if (meetingTimeStr + durationTime >= startTimeStr && meetingTimeStr + durationTime <= endTimeStr) {
    return true;
  } return false;
};


getWorkTime();
// console.log(getWorkTime('08:00', '17:30', '14:00', 90)); // true
// console.log(getWorkTime('8:0', '10:0', '8:0', 120));     // true
// console.log(getWorkTime('08:00', '14:30', '14:00', 90)); // false
// console.log(getWorkTime('14:00', '17:30', '08:0', 90));  // false
// console.log(getWorkTime('8:00', '17:30', '08:00', 900)); // false
