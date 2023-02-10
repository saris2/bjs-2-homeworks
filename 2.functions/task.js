'use strict'
function getArrayParams(arr) {
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
  return {min, max, avg};
}
console.log(getArrayParams([Number(-99), Number(99), Number(10)]));
console.log(getArrayParams([Number(1), Number(2), Number(3), Number(-100), Number(10)]));
console.log(getArrayParams([Number(5)]));
