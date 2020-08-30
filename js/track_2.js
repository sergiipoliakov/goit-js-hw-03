// Задание 2
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.

const countProps = function (obj) {
  // твой код
  const keys = Object.keys(obj);
  return keys.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Автопроверка домашних заданий по JavaScript

// Задача 2 / 6

// Модуль: 3

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
