// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//Виконання
// function minNumLog(num1, num2, num3) {
//
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else if (num3 < num2 && num3 < num1) {
//         console.log(num3);
//     }else {
//         console.log('Error')
//     }
//
// }
//
// minNumLog(9,6,2)

//------------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//Виконання
// function maxNumLog(num1, num2, num3) {
//
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else if (num3 > num2 && num3 > num1) {
//         console.log(num3);
//     }else {
//         console.log('Error')
//     }
//
// }
//
// maxNumLog(9,12,244)

//------------------------------

// - створити функцію яка повертає найбільше число з масиву

//Виконання
// let nums = [3, 5, 9, 2, 224, 322, 34, 50, 900];
//
// function biggestNumLog(array) {
//     console.log(Math.max(...array));
//
// }
//
// biggestNumLog(nums)

//------------------------------

// - створити функцію яка повертає найменьше число з масиву

//Виконання
// let nums = [3, 5, 9, 2, 224, 322, 34, 50, 900];
//
// function biggestNumLog(array) {
//     console.log(Math.min(...array));
//
// }
//
// biggestNumLog(nums)


//---------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//Виконання
// let nums = [3, 5, 9, 2, 224, 322, 34, 50, 900];
//
// function sum (array) {
//     let result = 0;
//     for (const arrayElement of array) {
//         result += arrayElement;
//     }
//     return result;
// }
//
// console.log(sum(nums));

//----------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//Виконання
// let nums = [3, 5, 9, 2, 224, 322, 34, 50, 900];
//
// function averageNum(array) {
//     let result = 0;
//     for (const arrayElement of array) {
//         result += arrayElement / array.length
//     }
//     return result
// }
//
// console.log(averageNum(nums));

//----------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//Виконання
// function numLogger() {
//     let largest = arguments[0]
//     let smallest = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//         if (argument > largest) {
//             largest = argument;
//         } else if (argument < smallest) {
//             smallest = argument;
//         }
//     }
//     console.log(largest);
//     return smallest;
//
//
// }
//
// numLogger(22, 3, 100, 840, 32, 666, 123, 1000, 123, 252, 546)

//---------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//Виконання
// let arr = [];
//
//
// function pushRandomNumsinArray(array, limit) {
//     for (let i = 0; i < limit; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         array.push(randomNum)
//     }
//
// }
//
// pushRandomNumsinArray(arr, 20);
// console.log(arr);

//---------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// Виконання
// let arr = [];
//
// function pushRandomNumsinArray(array, limit) {
//
//
//     for (let i = 0; i < limit; i++) {
//         function getRandomIntInclusive(min, max) {
//             min = Math.ceil(min);
//             max = Math.floor(max);
//             return Math.floor(Math.random() * (max - min + 1) + min);
//         }
//
//         array.push(getRandomIntInclusive(5, 10))
//
//     }
//
// }
//
// pushRandomNumsinArray(arr, 20);
// console.log(arr);


//----------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//Виконання
// let arr = [1, 2, 3];
//
// function reverseArr(array) {
//     return array.reverse()
// }
//
// console.log(reverseArr(arr));

//----------------------------------

