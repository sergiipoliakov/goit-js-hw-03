// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  // твой код
  const entries = Object.entries(employees);

  let result = '';
  let maxValue = 0;
  for (const [name, value] of entries) {
    if (value > maxValue) {
      maxValue = value;
      result = name;
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

// Автопроверка домашних заданий по JavaScript

// Задача 3 / 6

// Модуль: 3

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   const entries = Object.entries(employees);

//   let result = '';
//   let maxValue = 0;
//   for (const [name, value] of entries) {
//     if (value > maxValue) {
//       maxValue = value;
//       result = name;
//     }
//   }
//   return result;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'
