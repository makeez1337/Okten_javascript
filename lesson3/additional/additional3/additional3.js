// 1. Створити пустий масив та :


//   a. заповнити його 50 парними числами за допомоги циклу.

// Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i)
//     }
//
// }
// console.log(arr);

//   b. заповнити його 50 непарними числами за допомоги циклу.

//Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
//
// }
// console.log(arr);

//   c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

//Виконання
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
//
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//Виконання
// let arr = [];
//
// function randomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     arr.push(randomNum(8, 732))
// }
//
// console.log(arr);

//----------------------------------------------------

// 2. Вивести за допомогою console.log кожен третій елемен


// 2.a

// Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i)
//     }
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i+=3) {
//     console.log(arr[i]);
// }

// 2.b

//Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
//
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     console.log(arrElement);
//
// }


// 2.c

//Виконання
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     console.log(arrElement);
//
// }

// 2.d

// Виконання
// let arr = [];
//
// function randomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     arr.push(randomNum(8, 732))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     console.log(arrElement);
//
// }

//----------------------------------------------

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// 3.a

// Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i)
//     }
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 3.b

//Виконання
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
//
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }


// 3.c

// Виконання
// let arr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }

// 3.d

// Виконання
// let arr = [];
//
// function randomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     arr.push(randomNum(8, 732))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// 4.a

//Виконання
// let arr = [];
// let newArr = []
//
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr.push(i)
//     }
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//         newArr.push(arr[i])
//     }
// }
//
// console.log(newArr);

// 4.b


//Виконання
// let arr = [];
// let newArr = []
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
//
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//         newArr.push(arrElement)
//     }
//
// }
// console.log(newArr);


// 4.c


// Виконання
// let arr = [];
// let newArr = [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 100))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//         newArr.push(arrElement)
//     }
//
// }
//
// console.log(newArr);


// 4.d

// Виконання
// let arr = [];
// let newArr = [];
//
//
// function randomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// for (let i = 0; i < 20; i++) {
//     arr.push(randomNum(8, 732))
// }
//
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//         newArr.push(arrElement);
//     }
//
// }
//
// console.log(newArr);

//-----------------------------------------

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// Виконання
// let nums = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 2 === 0) {
//         console.log(nums[i-1])
// }
// }

//-----------------------------------------

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// Виконання
// let nums = [100, 250, 50, 168, 120, 345, 188];
//
// let averageCheck = 0;
// for (const num of nums) {
//     averageCheck += num
// }
//
// averageCheck = averageCheck / nums.length
// console.log(Math.floor(averageCheck));


//--------------------------------------------

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


//Виконання
// function randomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// let arr = []
// let newArr = [];
//
// for (let i = 0; i < 10; i++) {
//     const arrayElement = arr[i];
//
//     arr.push(randomNum(5,50))
// }
//
// for (const arrElement of arr) {
//     newArrElement = arrElement*5
//     newArr.push(newArrElement)
// }
//
// console.log(newArr);


//--------------------------------------------

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// Виконання
// let arr = [3, 5, 'hello', 'Max', 666, {name: 'Vasya', age: 33}]
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);


//9.  Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//   let usersWithId = [
//       {id: 1, name: 'vasya', age: 31, status: false},
//       {id: 2, name: 'petya', age: 30, status: true},
//       {id: 3, name: 'kolya', age: 29, status: true},
//       {id: 4, name: 'olya', age: 28, status: false}
//   ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//   Записати цей об'єкт в новий масив
// Example:
//   let usersWithCities = [
//       {
//           id: 1, // <===
//           name: 'vasya',
//           age: 31,
//           status: false,
//           address: {
//               user_id: 1, // <===
//               country: 'Ukraine',
//               city: 'Ternopil'
//           }
//       },
//       // TO BE CONTINUED .....
//   ]


//Виконання
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let userWithCities = Object.assign(usersWithId);
//
// for (const userWithCityElement of userWithCities) {
//     for (const citiesWithIdElement of citiesWithId) {
//         if (userWithCityElement.id === citiesWithIdElement.user_id) {
//             userWithCityElement.address = citiesWithIdElement;
//         }
//
//     }
// }
//
// console.log(userWithCities);


//----------------------------------------

//10.  Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// Виконання
// let nums = [3, 666, 22, 13, 34, 12, 24, 453, 99, 100];
//
// for (const num of nums) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }


//----------------------------------------

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// Виконання
// let nums = [3, 666, 22, 13, 34, 12, 24, 453, 99, 100];
//
// let emptyArr = [];
//
// for (const num of nums) {
//     emptyArr.push(num);
// }

//----------------------------------------

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//Виконання
// let arr = ['a', 'b', 'c'];
//
// let word = ''
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i]
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

//Виконання
// let arr = ['a', 'b', 'c'];
// let emptyStr = ''
//
// let i = 0;
// while (i < arr.length) {
//     emptyStr += arr[i];
//     i++;
// }
//
// console.log(emptyStr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// Виконання
// let str = ['a', 'b', 'c'];
// let emptyStr = '';
//
// for (const string of str) {
//     emptyStr += string
// }
//
// console.log(emptyStr);




//------------------------------------------------