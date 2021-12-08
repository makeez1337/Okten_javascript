// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//   Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// Виконання
// document.body.onclick = function (e) {
//     console.log(`Tag - '${e.target.localName}',classList - '${e.target.classList}', id - '${e.target.id}', size - ${e.target.clientHeight}*${e.target.clientWidth}`);
// };


///////////////////////////////////////////////

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//   При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//   Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//Виконання
// let popUp = document.getElementById('popup');
//
// document.body.onclick = function (e) {
//     popUp.innerText = `Tag - '${e.target.localName}',\nclassList - '${e.target.classList}',\n id - '${e.target.id}', \nsize - ${e.target.clientHeight}*${e.target.clientWidth}`;
//     popUp.classList.toggle('hidePopUp');
//
// };


////////////////////////////////////////////////

// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

//Виконання
// let f1 = document.getElementById('f1');
//
// f1.statusFilter.onclick = function () {
//     if (this.checked) {
//         let filter = usersWithAddress.filter(value => {
//             return value.status;
//         });
//         filter.forEach(value => {
//             let liForStatus = document.createElement('li');
//             document.body.appendChild(liForStatus);
//             liForStatus.innerText = `${value.name} - ${value.age} - ${value.status}`;
//         });
//     } else {
//         let liElements = document.getElementsByTagName('li');
//         for (let i = 0; i < liElements.length; i++) {
//             const liElement = liElements[i];
//             liElement.style.display = 'none';
//
//         }
//     }
// };
//
// f1.moreThan29.onclick = function () {
//     if (this.checked) {
//         let filter = usersWithAddress.filter(value => value.age > 29);
//         filter.forEach(value => {
//             let liForAge = document.createElement('li');
//             document.body.appendChild(liForAge);
//             liForAge.innerText = `${value.name} - ${value.age}`
//         })
//     }else {
//         let liElements = document.getElementsByTagName('li');
//         for (const liElement of liElements) {
//             liElement.style.display = 'none';
//         }
//     }
// };
//
// f1.cityKiev.onclick = function () {
//     if (this.checked) {
//         let filter = usersWithAddress.filter(value => value.address.city === 'Kyiv')
//         filter.forEach(value => {
//             let liForCity = document.createElement('li');
//             document.body.appendChild(liForCity);
//             liForCity.innerText = `${value.name} - ${value.address.city}`;
//         })
//     }else {
//         let liElements = document.getElementsByTagName('li');
//         for (const liElement of liElements) {
//             liElement.style.display = 'none';
//         }
//     }
// };

////////////////////////////////////////////////////

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//Виконання
// const button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
//
// let firstImg = document.getElementById('firstImg');
// let secondImg = document.getElementById('secondImg');
// let thirdImg = document.getElementById('thirdImg');
//
//
// firstImg.style.display = 'block';
// console.log(firstImg.style.display);
//
// button2.onclick = function () {
//     if (firstImg.style.display === 'block') {
//         firstImg.style.display = 'none';
//         secondImg.style.display = 'block';
//     }else if (secondImg.style.display === 'block') {
//         secondImg.style.display = 'none';
//         thirdImg.style.display = 'block';
//     }else {
//         thirdImg.style.display = 'none';
//         firstImg.style.display = 'block';
//     }
// };
//
// button1.onclick = function () {
//     if (firstImg.style.display === 'block') {
//         firstImg.style.display = 'none';
//         thirdImg.style.display = 'block';
//     }else if (secondImg.style.display === 'block') {
//         secondImg.style.display = 'none';
//         firstImg.style.display = 'block';
//     }else {
//         thirdImg.style.display = 'none';
//         secondImg.style.display = 'block';
//     }
// };

////////////////////////////////////////////////////

// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// Виконання
// let paragraph = document.getElementsByClassName('paragraph')[0];
//
// paragraph.onmouseup = function (e) {
//     const selObj = window.getSelection();
//     const {startOffset, endOffset} = selObj.getRangeAt(0);
//     console.log(startOffset);
//     console.log(endOffset);
//
//     console.log(selObj);
//
//     let textBeforeCut = selObj.anchorNode.data.substring(0, startOffset);
//     let cutText = `<b>${window.getSelection().toString()}</b>`
//     let textAfterCut = selObj.anchorNode.data.substring(endOffset);
//
//     console.log(textBeforeCut);
//     console.log(cutText);
//     console.log(textAfterCut);
//
//     paragraph.innerHTML = textBeforeCut.concat(cutText).concat(textAfterCut);
//
//
// };

///////////////////////////////////////////////////////

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//   Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ НЕДОРОБИВ
let bat1 = document.getElementById('bat1');
let bat2 = document.getElementById('bat2');

let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');


bat2.onclick = function () {
    function nextElement(startElement) {
        console.log(startElement);
        if (startElement.children.length) {
                bat2.onclick = function () {
                    nextElement(startElement.children[0]);
                }

        } else if (!startElement.children.length) {
            console.error('This is last element');
        }
    }

    nextElement(div1);

};
