// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


// Виконання
// function argReceive() {
//     let concatArgs = '';
//     for (const argument of arguments) {
//         if (arguments.length === 1) {
//             console.log(argument);
//         } else if (arguments.length === 2) {
//             concatArgs += argument;
//         }
//     }
//     return concatArgs;
// }


//---------------------------------

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

//Виконання
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let arr3 = [];
//
// function sumOfArrElem(array1, array2, arrToPush) {
//     for (let i = 0; i < array1.length; i++) {
//         const array1Element = array1[i];
//         for (let j = 0; j < array2.length; j++) {
//             const array2Element = array2[j];
//             if (i === j) {
//                 arrToPush.push(array1Element + array2Element)
//             }
//         }
//
//
//     }
//
//
// }
//
// sumOfArrElem(arr1, arr2, arr3);
// console.log(arr3);


//---------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


//Виконання
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function keysFromArr(arr) {
//     let keysArr = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             keysArr.push(key);
//         }
//     }
//     return keysArr;
// }
//
// console.log(keysFromArr(arr));

//---------------------------------

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


//Виконання
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function keysFromArr(arr) {
//     let keysArr = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             keysArr.push(arrElement[key]);
//         }
//     }
//     return keysArr;
// }
//
// console.log(keysFromArr(arr));


//----------------------------------