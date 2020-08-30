// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

const countTotalSalary = function (employees) {
  // твой код
  const values = Object.values(employees);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

// Автопроверка домашних заданий по JavaScript

// Задача 4 / 6

// Модуль: 2

// const countTotalSalary = function (employees) {
//     'use strict';
//     // Write code under this line
//     const values = Object.values(employees);
//     let total = 0;
//     for (const value of values) {
//         total += value;
//     } return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//     kiwi: 200,
//     lux: 150,
//     chelsy: 150,
// }
// console.log(countTotalSalary(supports));
// // 500
