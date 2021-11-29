//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// Виконання
// let main_headerElement = document.getElementById('main_header');
// main_headerElement.innerText = 'sept-2021';

//---------------------------

// b) робить шириниу елементу ul 400px

//Виконання
// let ulElement = document.getElementsByTagName('ul');
// ulElement[0].style.width = '400px';

//---------------------------

// c) робить шириниу всіх елементів з класом linkList шириною 50%

//Виконання
// let linkList = document.getElementsByClassName('linkList');
//
// for (let linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }

//--------------------------

// d) отримує текст який зберігається в елементі з класом listElement2

//Виконання
// let listElement2TextChanger = function (text) {
//     let element = document.getElementsByClassName('listElement2');
//     return element[0].innerText = text;
//
// }
//
// listElement2TextChanger('hello Okten123');


//--------------------------

// e) отримує всі елементи li та змінює ім колір фону на сірий

//Виконання
// let liElements = document.getElementsByTagName('li');
// for (let liElement of liElements) {
//     liElement.style.backgroundColor = 'silver';
// }

//-------------------------

// f) отримує всі елементи 'a' та додає їм клас anchor

//Виконання
// let aTagElements = document.getElementsByTagName('a');
//
// for (let aTagElement of aTagElements) {
//     aTagElement.classList.add('anchar')
// }

//-------------------------

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

//Виконання
// let aTagElements = document.getElementsByTagName('a');
//
// for (let aTagElement of aTagElements) {
//     if (aTagElement.innerText === 'link3') {
//         aTagElement.style.fontSize = '40px';
//     }
// }

//------------------------

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

//Виконання
// let aTagElements = document.getElementsByTagName('a');
//
// for (let aTagElement of aTagElements) {
//     aTagElement.classList.add('element_XXX');
//     aTagElement.innerText = 'XXX'
// }


//-------------------------

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

//Виконання
// let subHeaderElements = document.getElementsByClassName('sub-header');
//
// for (let subHeaderElement of subHeaderElements) {
//     subHeaderElement.style.backgroundColor = prompt('Type a color');
// }

//-------------------------

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

//Виконання
// let subHeaderElements = document.getElementsByClassName('sub-header');
//
// for (let subHeaderElement of subHeaderElements) {
//     if (subHeaderElement.innerText === 'content 2 segment') {
//         subHeaderElement.style.backgroundColor = prompt('Type a color');
//     }
// }


//-----------------------------

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// Виконання
// let content1Element = document.getElementsByClassName('content_1');
// content1Element[0].innerText = prompt('Type text for element')

//----------------------------

// l) отримати елементи p та змінити їм padding на 20px

//Виконання
// let pElements = document.getElementsByTagName('p');
//
// for (let pElement of pElements) {
//     pElement.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// Виконання
// let text2ElementsByClass = document.getElementsByClassName('text2');
//
// text2ElementsByClass[0].innerText = 'sept-2021';


//------------------------------