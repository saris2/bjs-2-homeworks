"use strict"
let solveEquation = (a, b, c) => {
  if (a == 0)
    return false;
  let res = {};
  let D = b * b - 4 * a * c;
  if (D < 0)
    return false;
  if (D == 0)
    res['Корень уравнения'] = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    res['2 корня уравнения'] = tmp;
  }
  return res;
}
console.log(solveEquation(1, 2, 1));

let calculateTotalMortgage = (percent, contribution, amount, countMonths) 
  console.log(Number.isNaN(percent, contribution, amount, countMonths));
let P = ((percent/100)/12);
let S = (amount - contribution);
let platezh = S * (P + (P / (((1 + P)^countMonths) - 1)));
let all_prise = platezh*countMonths;
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log (Number(platezh).toFixed(2));