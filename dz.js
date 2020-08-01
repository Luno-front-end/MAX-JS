// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);

// console.log(secondMessage);

////////////////////////////////////////////// ЗАДАЧА 2

// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice <= 100
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";

// //console.log(message);

// //если invoice равен 100
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'

// //если invoice равен 50
// // то значение message будет равно
// // 'Заказ оформлен, с вами свяжется менеджер'

// //если invoice равен 150
// // то значение message будет равно
// // 'На складе недостаточно товаров!'
// console.log(message);

///////////////////////////////////////////// ЗАДАЧА 3

// const userPassword = null;

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;
// if (ADMIN_PASSWORD === userPassword) {
//   message = ACCESS_IS_ALLOWED;
// } else {
//   message = ACCESS_DENIED;
// }
// if (userPassword === null) {
//   message = CANCELED_BY_USER;
// }

// // Write code under this line

// console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

///////////////////////////////////////////// ЗАДАЧА 4

// const orderPieces = 0;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice; // Write code on this line
// let balanceCredit; // Write code on this line
// let message;
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (orderPieces <= 7) {
//   totalPrice = pricePerDroid * orderPieces;
//   balanceCredit = credits - totalPrice;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }
// // Write code under this line

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

///////////////////////////////////////////// ЗАДАЧА 5
// const countryName = null;

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase(0) + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     case "Китай":
//       price = 100;
//       break;
//     case "Австралия":
//       price = 170;
//       break;
//     case "Индия":
//       price = 80;
//       break;
//     case "Ямайка":
//       price = 120;
//       break;
//   }
// }
// if (country === CHINA) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else if (country === AUSTRALIA) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else if (country === INDIA) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else if (country === JAMAICA) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else if (country === countryName) {
//   message = NO_DELIVERY;
// }

// console.log(message);

// //если countryName равно "КитаЙ"
// // то значение message будет равно
// // 'Доставка в Китай будет стоить 100 кредитов'

// //если countryName равно null
// // то значение message будет равно
// // 'Отменено пользователем!'

// //если countryName равно "Чили"
// // то значение message будет равно
// // 'В выбранную страну доставка недоступна.'

// const a = Number("25px");

console.log(10 + 20 + "30");

// // Write code under this line
// const message =
//   invoice <= 100
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";
