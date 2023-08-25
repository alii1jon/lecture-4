// const votes = {
//   for: 10,
//   against: 7,
// };

// const result = votes.for - votes.against;

// console.log(result);

// 2
// function calculateWindowVolume({width, length, height}) {
//   return width * length * height;
// }

// // Пример использования
// const windowSizes = {
//   width: 1.5,
//   length: 2,
//   height: 1
// };

// const windowVolume = calculateWindowVolume(windowSizes);
// console.log(windowVolume); 

// 3
// function getRangeNumber({min, max}) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const range = {
//   min: 5,
//   max: 10
// };

// const randomNumber = getRangeNumber(range);
// console.log( [range.min, range.max], randomNumber); 

const insults = {
  spouse: 10,
  mother: 5,
  father: 3,
  sibling: 2,
  friend: 1
};

function countInsultsUsed(insultsUsed) {
  let totalInsults = 0;
  for (let insult in insultsUsed) {
    totalInsults += insults[insult] * insultsUsed[insult];
  }
  return totalInsults;
}

const insultsUsed = {
  spouse: 2,
  mother: 1,
  friend: 3
};

const totalInsults = countInsultsUsed(insultsUsed);
console.log(totalInsults); 