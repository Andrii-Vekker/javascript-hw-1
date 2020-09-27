// task-1
// const name = '«Генератор защитного поля»';
// let price = 1000;
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(firstMessage);
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(secondMessage);

// // task-2
// const invoice = 1500;
// const stock = 100;
// Write code under this line
// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';
// console.log(message);
//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

// task-3

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
//   console.log(message);
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else if (userPassword === 123) {
//   message = ACCESS_DENIED;
//   console.log(message);
// } else {
//   userPassword !== ADMIN_PASSWORD;
//   message = ACCESS_DENIED;
// }

// task-3
// const orderPieces = 10;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - totalPrice;
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (credits >= totalPrice) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);
// Write code under this line

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

// task-4

// const countryName = 'КитаЙ';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       countryName !== country;
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

//task-5

// const getItemsString = function (array) {
//'use strict';
// Write code under this line
//   let result = '';

//   for (let i = 0; i < array.length; i += 1) {
//     result += result = `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
// /*
// '1 - 5
// 2 - 10
// 3 - 15

//task - 6

//const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
// message.split(' ').length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

//task-7
// function findLongestWord(string = '') {
// Write code under this line
//   let stringWord = string.split(' ');
//   let longestWord = stringWord[0];
//   for (const word of stringWord) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ('jumped');

// console.log(findLongestWord('Google do a roll'));
// ('Google');

// console.log(findLongestWord('May the force be with you'));
// ('force');

//task-8

// function formatString(string, maxLength = 40) {
//   const dots = `...`;
//   return string.length > maxLength
//     ? string.slice`${maxLength}`.concat(dots)
//     : string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// ('Curabitur ligula sapien, tincidunt non.');

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// ('Vestibulum facilisis, purus nec pulvinar...');

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// ('Vestibulum facilisis, purus ne...');

//task-9
function checkForSpam(str) {
  'use strict';
  // Write code under this line
  console.log(str.toLowerCase());
  return str.toLowerCase().includes('sale' || 'spam');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); //true
