'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b + Math.sqrt(d))/(2*a)];
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a) ;
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
    return (`“Параметр "Процентная ставка" содержит неправильное значение ${percent}”.`);
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution != 0) {
    return (`“Параметр "Начальный взнос" содержит неправильное значение ${contribution}”.`);
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount != 0) {
    return (`“Параметр "Общая стоимость" содержит неправильное значение ${amount}”.`);
  }
  // Расчет количества месяцев, на которые оформляется ипотека. 
  let currentDate = new Date();  // Дата с какого числа берется ипотеки 
  date = new Date(window.date.value); //Дата до какого числа берется ипотека
  let payPeriod = 0 - ((currentDate.getFullYear() - date.getFullYear()) * 12) - (currentDate.getMonth() - date.getMonth());
  date = payPeriod; // Количество месяцев, на которые оформляется ипотека.
  let returnAmount = amount - contribution  // Сумма, которую необходимо вернуть банку. 
  percent = percent / 1200; // Процентная ставка
  let monthlyPay = amount * (percent + percent / (((1 + percent) ** date) - 1)); // Ежемесячная оплата
  let totalAmount = monthlyPay * date;  //  общая сумма, которую придется заплатить клиенту.
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2); //  Возврат результата в функцию
}