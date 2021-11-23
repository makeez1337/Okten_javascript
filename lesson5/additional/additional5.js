// - Дано натуральное число n. Выведите все числа от 1 до n.

// Виконання
// let logToLastNum = (fromOneToNum) => {
//     fromOneToNum = typeof fromOneToNum === 'undefined' ? console.log('Type a number') : fromOneToNum
//     fromOneToNum = typeof fromOneToNum === 'string' ? console.log('Type a number') : fromOneToNum
//     fromOneToNum = fromOneToNum < 0 ? console.log('Number is negative') : fromOneToNum
//     fromOneToNum = fromOneToNum === 0 ? console.log('Number is 0') : fromOneToNum
//     for (let i = 1; i <= fromOneToNum; i++) {
//         if (i > 0) {
//             console.log(i);
//         }
//     }
//
// }
//
// logToLastNum(50)

//----------------------------------

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

//Виконання
// let incrOrDecr = (num1, num2) => {
//     num1 = typeof num1 === 'undefined' ? console.log('Type a number') : num1;
//     num1 = typeof num1 === 'string' ? console.log('Type a number') : num1;
//     num1 = typeof num1 === 'boolean' ? console.log('Type a number') : num1;
//     num2 = typeof num2 === 'string' ? console.log('Type a number') : num2
//     num2 = typeof num2 === 'undefined' ? console.log('Type a number') : num2
//     num2 = typeof num2 === 'boolean' ? console.log('Type a number') : num2
//     if (num1 < num2) {
//         for (let i = num1; i <= num2; i++) {
//             console.log(i)
//         }
//     } else if (num1 > num2) {
//         for (let i = num1; i >= num2; i--) {
//             console.log(i)
//         }
//     } else if (typeof num1 === 'number' && typeof num2 === 'number') {
//         if (num1 === num2) {
//             console.log(`Nums are equal - ${num1}`)
//         }
//     }
// }
//
// incrOrDecr(1,5)

//----------------------------------

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//Виконання
//
// const changeElemInArr = (arr, i) => {
//     if (i <= arr.length - 2) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     } else if (i === arr.length - 1) {
//         [arr[i], arr[0]] = [arr[0], arr[i]]
//     }
//
//     return arr;
// }
//
// console.log(changeElemInArr([9, 8, 0, 4], 0))
// console.log(changeElemInArr([9, 8, 0, 4], 1))
// console.log(changeElemInArr([9, 8, 0, 4], 2))
// console.log(changeElemInArr([9, 8, 0, 4], 3))

//-------------------------------------

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//   Двожина масиву від 2 до 100
// EXAMPLE:
//   [1,0,6,0,3] => [1,6,3,0,0]
//   [0,1,2,3,4] => [1,2,3,4,0]
//   [0,0,1,0]   => [1,0,0,0]


//Виконання
//
// let arr = [2, 4, 0, 6, 0, 3];
// let array1 = [2, 31, 321, 0, 54, 0, 354, 0, 0, 345, 2, 0, 3, 0];
//
// let fixedArr = (arr) => {
//     const array = [...arr];
//     let zeroArr = [];
//     return array.map((value, index) => {
//         if (value === 0) {
//             zeroArr.push(value);
//         } else {
//             return value;
//         }
//     })
//       .filter(value => value !== undefined)
//       .concat(zeroArr);
// }
//
// console.log(fixedArr(array1));

//----------------------------------

