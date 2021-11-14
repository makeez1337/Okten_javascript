// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//   Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// Виконання
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >=3) {
//     console.log('This is big array, here is 3 or more elements')
// }else {
//     console.log('This is small array, here is less then 3 elements')}


//----------------------------------------------------------------------------------------

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.


//Виконання
// let num1 = +prompt('Type a number')
// let num2 = +prompt('Type a number')
// let num3 = +prompt('Type a number')
//
// if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
//     alert(num1)
// } else if (num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3) {
//     alert(num2);
// } else if (num3 < num2 && num3 > num1 || num3 > num2 && num3 < num1) {
//     alert(num3);
// }

//----------------------------------------------------------------------------------------

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }


// Виконання
// let a = +prompt('Type a number')
// let b = +prompt('Type a number')
//
// let result = a+b < 4 ? alert('Мало') : alert('Багато')

//----------------------------------------------------------------------------------------

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором



// Виконання
// let number = +prompt('Type a number')
//
// if (number > 0) {
//     alert('This is positive number')
// } else if (number === 0) {
//     alert('This is zero')
// } else if (number < 0) {
//     alert('This is negative number')
// }

let number = +prompt('Type a number')
number = number > 0 ? alert('This is positive number') : number < 0 ? alert('This is negative number') : number === 0 ? alert('Number is zero') : alert('Shit')


//----------------------------------------------------------------------------------------