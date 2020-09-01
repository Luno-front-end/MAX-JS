// const getItemsString = function (array) {
//   if (array === null) {
//     brake;
//   } else {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = `${i + 1} - ${array[i]}\n`;
//     }
//   }
//   return array.join(``);
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

////////////////////////////////////ЗАДАЧА 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   message.split(" ").length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// console.log(calculateEngravingPrice("Uno", 100)); //100

////////////////////////////////////ЗАДАЧА 3
// function findLongestWord (string = "") {
//     const array = string.split(' ');
//      let bigWord = array[0];

//      for (let i = 0; i < array.length; i += 1) {
//        if (bigWord.length < array[i].length) {
//          bigWord = array[i];
//        }
//      }
//      return bigWord;
//    }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'

////////////////////////////////////ЗАДАЧА 4

// function formatString(string, maxLength = 40) {
//   const array = string.split("");
//   let bigString = "";

//   for (let i = 0; i < array.length; i += 1) {
//     if (array.length > maxLength) {
//       bigString = string.slice(0, maxLength) + "...";
//     } else {
//       bigString = string;
//     }
//   }

//   return bigString;
// }
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// // 'Vestibulum facilisis, purus ne...'

////////////////////////////////////ЗАДАЧА 5

// function checkForSpam(str) {
//   const string = str.toLowerCase();
//   let message = false;
//   for (let i = 0; i < string.length; i += 1)
//     if (string.includes("sale")) {
//       message = true;
//     } else if (string.includes("spam")) {
//       message = true;
//     }
//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

////////////////////////////////////ЗАДАЧА 6

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

////////////////////////////////////ЗАДАЧА 7

// function filterArray(array) {
//   const numbers = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const typeArr = typeof array[i];
//     if (typeArr === "number" && Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }

//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]

////////////////////////////////////ЗАДАЧА 8

// function reduceArray(array) {
//   let total = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }

//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5

////////////////////////////////////ЗАДАЧА 9

// function isLoginValid(login, min = 4, max = 16) {
//   const сharacters = login.length;
//   return сharacters >= min && сharacters <= max ? true : false;
// }

// function isLoginUnique(allLogins, login) {
//   return allLogins.includes(login) ? false : true;
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;

//   if (isLoginValid(login) === true) {
//     if (isLoginUnique(allLogins, login) === true) {
//       allLogins.push(login);
//       return SUCCESS;
//     } else return REFUSAL;
//   } else return ERROR;
//   return allLogins;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// console.log(logins);

// console.log(addLogin(logins, "Ajax"));
// console.log(logins);
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
