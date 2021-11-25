// - Дано список імен.
//   let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//Виконання
// let n1 = 'Harry.Potter';
// let n2 = 'Ron--Whisley';
// let n3 = 'Hermione_Granger';
//
// let nameValidator = (invalidName) => {
//     if (invalidName.includes('.')) {
//         return invalidName.replaceAll('.', ' ').replace(/\s+/g, ' ');
//     } else if (invalidName.includes('-')) {
//         return invalidName.replaceAll('-', ' ').replace(/\s+/g, ' ');
//     } else if (invalidName.includes('_')) {
//         return invalidName.replaceAll('_', ' ').replace(/\s+/g, ' ');
//     }
// }
//
// console.log(nameValidator(n3));

//----------------------------


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//Виконання
// let arr = [];
//
// let pushRandomNumsInArr = (arrToPush,limitOfElements) => {
//     for (let i = 0; i < limitOfElements; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         arrToPush.push(randomNum)
//     }
//     return arrToPush;
//
// }
//
// pushRandomNumsInArr(arr, 20);
// console.log(arr);


//-----------------------------


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr = [];
//
// let pushRandomNumsInArr = (arrToPush,limitOfElements) => {
//     for (let i = 0; i < limitOfElements; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         arrToPush.push(randomNum)
//     }
//     return arrToPush;
//
// }
//
// pushRandomNumsInArr(arr, 20);
// console.log(arr);
//
// arr.sort((a, b) => {
//     return a - b;
// })
// console.log(arr);


//-----------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

//Виконання
// let arr = [];
//
// let pushRandomNumsInArr = (arrToPush,limitOfElements) => {
//     for (let i = 0; i < limitOfElements; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         arrToPush.push(randomNum)
//     }
//     return arrToPush;
//
// }
//
// pushRandomNumsInArr(arr, 20);
// console.log(arr);
//
// let filteredArray = arr.filter(value => value % 2 === 0);
// console.log(filteredArray);


//-------------------------------


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//Виконання
// let arr = [];
//
// let pushRandomNumsInArr = (arrToPush,limitOfElements) => {
//     for (let i = 0; i < limitOfElements; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         arrToPush.push(randomNum)
//     }
//     return arrToPush;
//
// }
//
// pushRandomNumsInArr(arr, 20);
// console.log(arr);
//
// let numElementToStringElement = arr.map(value => {
//     value = value + '';
//     return value;
// });
//
// console.log(numElementToStringElement);


//------------------------------


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


//Виконання
// let nums = [11, 21, 3];
// console.log(nums);
// let sortNums = (arrToSort,direction) => {
//     if (direction.toLowerCase() === 'ascending') {
//         arrToSort.sort((a, b) => {
//             return a - b;
//         })
//     }else if (direction.toLowerCase() === 'descending') {
//         arrToSort.sort((a, b) => {
//             return b - a;
//         })
//     }else {
//         console.log('Choose between ascending or descending');
//     }
//     return arrToSort;
// }
//
//
// console.log(sortNums(nums, 'ascenDING'));
// console.log(sortNums(nums, 'descending'));


//-----------------------------------------

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// Виконання
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// })
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//Виконання
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let filteredArr = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// console.log(filteredArr);

//---------------------------------

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

//Виконання
let str = 'наслаждение';


let cutString = (str, n) => {
    let split = str.split('');
    for (let i = n-1; i < split.length; i += n) {
        split[i] = split[i].replace(split[i], `${split[i]},`);

    }
    return split.join('').split();
}

console.log(cutString(str, 3));


//---------------------------------=

