'use strict'
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = Number(parseFloat((sum / arr.length).toFixed(2)));
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(5));

'use strict'
function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));

'use strict'
function differenceMaxMinWorker(...arr) {
  let max = arr[0], min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  return max - min;
}
console.log(summElementsWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

'use strict'
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEvenElement += arr[i];
      return sumEvenElement;
    }
    else {
      sumOddElement += arr[i];
      return sumOddElement;
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  return (sumEvenElement / countEvenElement)
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
