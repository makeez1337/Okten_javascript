// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

// Виконання
// let contentElement = document.getElementById('content');
// console.log(contentElement.innerText);

//--------------------------

// -- отримує текст з блоку з id "rules"

// Виконання
// let rulesElementById = document.getElementById('rules');
// console.log(rulesElementById.innerText);

//--------------------------

// -- замініть текст параграфа з id 'content' на будь-який інший

//Виконання
// let contentElement = document.getElementById('content');
// let contentChangeText = contentElement.innerText = 'Hello okten';

//--------------------------

// -- замініть текст параграфа з id 'rules' на будь-який інший

// Виконання
// let rulesElementById = document.getElementById('rules');
// rulesElementById.innerText = 'Wassup';

//--------------------------

// -- змініть кожному елементу колір фону на червоний

//Виконання
// let contentElem = document.getElementById('content');
// contentElem.style.backgroundColor = 'red';
//
// let rulesElement = document.getElementById('rules');
// rulesElement.style.backgroundColor = 'red';
//
// let ulTagName = document.getElementsByTagName('ul');
// let fcRule1 = document.getElementsByClassName('fc_rules rule1');
// console.log(fcRule1[0]);
//
// for (let ulTagNameElement of ulTagName) {
//     ulTagNameElement.style.backgroundColor = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

//Виконання
// let contentElem = document.getElementById('content');
// contentElem.style.color = 'blue';
//
// let rulesElement = document.getElementById('rules');
// rulesElement.style.color = 'blue';
//
// let ulTagName = document.getElementsByTagName('ul');
// let fcRule1 = document.getElementsByClassName('fc_rules rule1');
// console.log(fcRule1[0]);
//
// for (let ulTagNameElement of ulTagName) {
//     ulTagNameElement.style.color = 'blue';
// }

//----------------------------

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

//Виконання
// let rulesElementById = document.getElementById('rules');
// console.log(rulesElementById.classList);

//----------------------------

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// Виконання
// let fcRulesElements = document.getElementsByClassName('fc_rules');
//
// for (const fcRulesElement of fcRulesElements) {
//     fcRulesElement.style.color = 'red';
// }


//----------------------------