// Task 1 ++++++++++++++++++++++++++++++++++++++

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// const index = styles.indexOf('blues');

// if (index !== -1) {
//     styles[index] = 'classic';
// }

// function logItems(array) {
// for (let i = 0; i < array.length; i++) {
// console.log(`${i + 1} - ${array[i]}`);
// }
// }

// logItems(styles);

// Task 2 ++++++++++++++++++++++++++++++++++++++

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
// let userName = prompt("Введіть ваш логін");
// if (array.includes(userName)) {
//     alert(`Welcome, ${userName}`);
// } else {
//     alert('User not found');
// }
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// Task 3 +++++++++++++++++++++++++++++++++++++++++

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage () {
//     let total = 0;
//     let counter = 0;
//     for (const arg of arguments) {
//         if (typeof arg === 'number') {
//             total += arg;
//             counter++;
//         }
//     }
//     return total / counter || 0;
// }

// console.log(caclculateAverage(23, 1, 7, 10, 'asdas'));
// console.log(caclculateAverage('asdas'));

// Task 4 ++++++++++++++++++++++++++++++++++++++++

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function summarizeNumbers () {

// }

// Task 7 ++++++++++++++++++++++++++++++++++++

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;

//   const userKeys = Object.keys(user);

//   for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`)
//   }

// Task 8 +++++++++++++++++++++++++++++++++++++

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// for (let summarize of Object.values(salaries)) {
//   sum += summarize;
// }
// console.log(sum);


// Task 9 ++++++++++++++++++++++++++++++++

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.key1 = a;
//         this.key2 = b;
//     },
//     sum() {
//         if (!this.exist()) {
//             return 'No such properties'
//         }
//         return this.key1 + this.key2;
//     },
//     mult() {
//         if (!this.exist()) {
//             return 'No such properties'
//         }
//         return this.key1 * this.key2;
//     },
//     exist () {
//         return this.key1 !== undefined || this.key2 !== undefined
//     }
// };

// calculator.read(2, 3);
// console.log(calculator.mult);


// Task 10 ++++++++++++++++++++++++++++++++++

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(fruits, fruitName) {
// let total = 0;
// for (let onefruit of fruits) {
//     if (onefruit.name === fruitName) {
//         total += onefruit.price * onefruit.quantity;   
//     }
// }
// return total;
// }

// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Апельсин"));