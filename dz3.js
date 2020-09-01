// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   message += `${key}: ${user[key]} \n`;
// }

// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

///////////////////////////////////////////ЗАДАЧА 2

// const countProps = function (obj) {
//   const varf = Object.keys(obj);

//   return varf.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

///////////////////////////////////////////ЗАДАЧА 3

// ВАРІАНТ №1

// const findBestEmployee = function (employees) {
//   let minWork = '';
//   for (const [name, rating] of Object.entries(employees)) {
//     if ([name, rating] > minWork) {
//       minWork = [name, rating];
//     }

//     employees = rating;
//   }
//   // console.log(works);

//   return employees;
// };

// ВАРІАНТ №2

// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line

//   let maxTask = "";
//   let task = "";
//   for (let i = 0; i < Object.values(employees).length; i += 1) {
//     if (maxTask < Object.values(employees)[i]) {
//       maxTask = Object.values(employees)[i];
//       task = Object.keys(employees)[i];
//     }
//   }
//   return task;
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

///////////////////////////////////////////ЗАДАЧА 4

// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let total = 0;
//   const vals = Object.values(employees);
//   for (const val of vals) {
//     total += val;
//   }

//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

///////////////////////////////////////////ЗАДАЧА 5

// function getAllPropValues(array, prop) {
//   const items = [];
//   for (const value of array) {
//     let item = value[prop];
//     if (item !== undefined) {
//       items.push(item);
//     }
//   }
//   return items;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []

///////////////////////////////////////////ЗАДАЧА 6

// function calculateTotalPrice(array, prop) {
//   let totals = 0;
//   const items = [];

//   for (const value of array) {
//     let item = value;
//     items.push(item);

//     if (Object.values(item).includes(prop)) {
//       totals += Object.values(item)[1] * Object.values(item)[2];
//     }
//   }

//   return totals;
// }

// // function calculateTotalPrice(array, prop) {

// //   let sumProp = 0;
// //   const items = [];
// //   for (const value of array) {
// //     let item = value;
// //     items.push(item);
// //     if (Object.values(item).includes(prop)) {
// //       sumProp += Object.values(item)[1] * Object.values(item)[2];
// //     }
// //   }
// //   return sumProp;
// // }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// // 2800
