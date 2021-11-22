// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//Викоанння
// let minNum = (num1,num2,num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     }else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     }else if (num3 < num1 && num3 < num2) {
//         console.log(num3);
//     }else if (num1 === num2 === num3) {
//         console.log(`${num1} - Numbers are equal `)
//     }else {
//         console.log('The structure isnot true')
//     }
// }
//
//
// minNum(30,5,10)

//----------------------------

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//Виконання
// let maxNum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//     } else if (num3 > num1 && num3 > num2) {
//         console.log(num3);
//     } else if (num1 === num2 === num3) {
//         console.log(`${num1} - Numbers are equal `)
//     } else {
//         console.log('The structure isnot true')
//     }
// }
//
//
// maxNum(30, 50, 100)

//----------------------------


// - створити функцію яка повертає найбільше число з масиву

//Виконання
// let nums = [3, 5, 10, 312, 32131, 2543, 666666];
//
// let maxNumFromArr = (arr) => {
//     let maxNum = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > maxNum) {
//             maxNum = arrElement
//         }
//     }
//     return maxNum;
// }
// console.log(maxNumFromArr(nums));

//---------------------------

// - створити функцію яка повертає найменьше число з масиву


//Виконання
// let nums = [30, 5, 10, 312, 32131, 1, 2543, 666666];
//
// let minNumFromArr = (arr) => {
//     let minNum = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < minNum) {
//             minNum = arrElement
//         }
//     }
//     return minNum;
// }
// console.log(minNumFromArr(nums));


//------------------------------

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//Виконання
// let arr = [1, 2, 5, 10, 321, 453, 666, 999,50];
//
// let sumOfArray = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(sumOfArray(arr));


//-------------------------------

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//Виконання
// let nums = [2, 5, 10, 90, 400, 123, 45];
//
// let averageNum = (arr) => {
//     let result = 0;
//     for (const arrElement of arr) {
//         result += arrElement / arr.length;
//     }
//     return result;
// }
//
// console.log(averageNum(nums));


//-------------------------------

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//Виконання
// let minAndMax = (...args) => {
//     let minNum = args[0];
//     let maxNum = args[0];
//     for (const arg of args) {
//         if (arg < minNum) {
//             minNum = arg;
//         }else if (arg > maxNum) {
//             maxNum = arg;
//         }
//     }
//     console.log(maxNum);
//     return minNum;
// }
//
// console.log(minAndMax(3, 5, 15, 25));


//---------------------------------

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//Виконання
// let arr = [];
//
// let pushRandomNumsInArr = (arr,size) => {
//     for (let i = 0; i < size; i++) {
//         let randomNum = Math.round(Math.floor(Math.random() * 100))
//         arr.push(randomNum)
//     }
//
// }
//
// pushRandomNumsInArr(arr,10)
// console.log(arr);

//---------------------------------

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


//Виконання
// let arr = [];
//
// let pushRandomNumsInArr = (arr,size,limit) => {
//     for (let i = 0; i < size; i++) {
//         let randomNum = Math.round(Math.floor(Math.random() * limit))
//         arr.push(randomNum)
//     }
//
// }
//
// pushRandomNumsInArr(arr,10,5)
// console.log(arr);

//--------------------------------

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//Виконання
// let arr = [1, 2, 3];
// let emptyArr = [];
//
// let reverseArr = (arr, arrToPush) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrToPush.push(arr[i]);
//
//     }
// }
