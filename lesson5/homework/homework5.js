// Всі функції повинні бути описані стрілочним типом!!!!


// - створити функцію яка обчислює та повертає площу прямокутника висотою

//Виконання
// let triangleSquare = (a,h) => {
//     const S = a * h;
//     return S;
// }

//---------------------------------

// - створити функцію яка обчислює та повертає площу кола

//Виконання
// let circleSquare = (r) => {
//     const S = Math.PI * (Math.pow(r,2))
//     return S;
// }
//
// console.log(circleSquare(3));

//---------------------------------

// - створити функцію яка обчислює та повертає площу циліндру

//Виконання
//
// let cylinderSquare = (r, h) => {
//     const S = 2 * Math.PI * r * h;
//     return S;
// }

//--------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент

//Виконання
// let arr = [3, 'Max', 312, true, 666, 'hello'];
//
// let arrLog = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// arrLog(arr)

//--------------------------------

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

//Виконання
// let createParagraph = (text) => {
//     document.writeln(`<p>${text}</p>`)
// }
//
// createParagraph('hello trash')

//--------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//Виконання
// let ulWithText = (text) => {
//     document.write('<ul>')
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write('</ul>')
//
// }
//
// ulWithText('wassup')


//---------------------------------

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//Виконання
// let ulWithText = (text, limit) => {
//     limit = typeof limit === 'undefined' || typeof limit === 'string' ? alert('Type a num') : limit;
//     text = typeof text === 'string' ? text : alert('Type a text')
//     document.write('<ul>')
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
//
// ulWithText('lol',50)


//---------------------------------

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//Виконання
// let primitiveArr = [3, true, 'hello'];
//
// let listForPrimArr = (arr) => {
//     document.write('<ul>')
//     for (const arrElement of arr) {
//         document.writeln(`<li>${arrElement}</li>`)
//     }
//     document.write('<ul>')
// }
//
// listForPrimArr(primitiveArr)

//---------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//Виконання
// let users = [
//     {name: 'Max', age: 30, id: 1},
//     {name: 'Oleg', age: 20, id: 2},
//     {name: 'Lalka', age: 40, id: 3}
// ]
//
// let divForArrElem = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age}</div>`)
//     }
// }
//
// divForArrElem(users)

//----------------------------------