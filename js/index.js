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
//function checkForSpam(str) {
'use strict';
// Write code under this line
//   console.log(str.toLowerCase());
//   return (
//     str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
//   );
// }

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); //true

//task-10

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

//task-10

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line

//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

//console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

//console.log(filterArray([1, NaN, Infinity]));
// [1]

//console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]

// task-11

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   let value = array.length;
//   // Write code under this line

//   for (const value of array) {
//     total += value;
//   }
//   return total;
// }

//console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5

// task-12

//function isLoginValid(login, min = 4, max = 16) {
// Write code under this line
//   const loginValid = login.length >= min && login.length <= max;
//   return loginValid;
// }

// function isLoginUnique(allLogins, login) {
//   'use strict';
//   // Write code under this line
//   const loginUnique = allLogins.includes(login);
//   if (loginUnique === true) {
//     return false;
//   }
//   return true;
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === false) {
//     return (message = ERROR);
//   } else if (isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     return (message = SUCCESS);
//   }
//   return (message = REFUSAL);
// }

//const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

//console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

//console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

//console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

//objects

//task-1

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

//Write code under this line
// user[`mood`] = `happy \n`;
// user[`full time`] = true;
// user.hobby = `skydiving`;
// user.premium = false;
//console.log(user);
//const keys = Object.keys(user);
// Write code under this line
// for (const key of keys) {
//   message += `${key} : ${user[key]} ${'\n'}`;
// }
// console.log(keys);
// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

//task-2

// const countProps = function (obj) {
//   'use strict';
//   const value = Object.keys(obj);
//   return value.length;
// };

//console.log(countProps({})); // 0

//console.log(countProps({ a: 1, b: 1 })); // 2

//console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

//task - 3

const findBestEmployee = function (employees) {
  ('use strict');

  const values = Object.values(employees);
  const entries = Object.entries(employees);
  const biggestNumber = Math.max(...values);
  for (const entrie of entries) {
    if (biggestNumber === entrie[1]) {
      return entrie[0];
    }
  }
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
