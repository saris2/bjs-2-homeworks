'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a)];
  } else {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}
{
  console.log(solveEquation(1, 5, 4));
  console.log(solveEquation(1, 2, 1));
  console.log(solveEquation(1, 2, 10));
}
function calculateTotalMortgage(percent, contribution, amount, date) {
  // Контроль корректность введенных данных.    
  if (percent > 0) {
    percent = +percent;
  } else if (percent != 0 || percent == 0) {
    return false;
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution != 0) {
    return false;
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount != 0) {
    return false;
  }
  percent = percent / 1200;
  let returnAmount = amount - contribution;
  let monthlyPay = returnAmount * (percent + percent / (((1 + percent) ** date) - 1));
  let totalAmount = monthlyPay * date;

  return Number(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage('test', 1, 1, 1));
console.log(calculateTotalMortgage(1, 'test', 1, 1));
console.log(calculateTotalMortgage(1, 1, 'test', 1));
console.log(calculateTotalMortgage(Number("10"), Number("0"), Number("50000"), Number("12")));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
