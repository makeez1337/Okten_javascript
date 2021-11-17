// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//Виконання
// function triangleSquare(a,b) {
//     let S;
//     return S = 0,5 * a * b;
// }
//
// console.log(triangleSquare(3, 5));

//------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r

//Виконання
// function circleSquare(r) {
//
//     let S;
//     const P = 3.14;
//     return S = P * (Math.pow(r,2))
//
// }
// console.log(circleSquare(5));

//-------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//Виконання
// function cilynderSquare(R,h) {
//     let S;
//     const P = 3.14;
//     return S = (2 * P * (R ** 2)) + (2 * P * R * h);
// }

//-------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент

//Виконання
// let arr = [3, 5, 'lol', true, {name: 'Max', age: 20}];
//
// function arrCatcher(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arrCatcher(arr)


//-------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//Виконання
// function createParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// createParagraph('Hello dsafa213214 dsadsad dsada')

//-------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//Виконання
// function ulElementCreator(text) {
//     document.write('<ul>')
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write('</ul>')
//
//
// }
//
// ulElementCreator('hello')

//-----------------------------------

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


//Виконання
// function ulElementCreator(text, limit) {
//     document.write('<ul>')
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//
//     document.write('</ul>')
// }
//
// ulElementCreator('lol',40)

//-----------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//Виконання
// let arr = [3, 666, 'Max', true, false, 'hee', 'okten', 999];
//
//
// function creatList(array) {
//     document.write('<ul>')
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write('</ul>')
// }
//
// creatList(arr)

//------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//Виконання
// let arr = [
//     {id:1,username: 'Max', age: 20},
//     {id:2,username: 'Oleg', age: 25},
//     {id:3,username: 'Vasya', age: 30},
//     {id:4,username: 'Jonathan', age: 5},
// ];
//
// function objWrite (array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.username} - ${arrayElement.age} </div>`)
//     }
// }
//
// objWrite(arr);



//----------------------------------

