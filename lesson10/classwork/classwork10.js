// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//Виконання
// let form1 = document.getElementById('f1');
// let form2 = document.getElementById('f2');
//
// let button1 = document.getElementById('but1')
// let button2 = document.getElementById('but2');
//
// button1.onclick = function () {
//     console.log(form1.input1.value);
// };
//
// button2.onclick = function () {
//     console.log(form2.input2.value);
// };

/////////////////////////////////////////////

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//Виконання
// let f1 = document.getElementById('f1');
//
// document.body.style.display = 'flex';
// document.body.style.flexWrap = 'wrap';
//
// f1.style.position = 'fixed';
// f1.onsubmit = (e) => {
//     e.preventDefault();
//     let lines1 = +f1.lines.value;
//     let count1 = +f1.count.value;
//     let text1 = f1.text.value;
//
//     let tableCreator = (lines ,count,text) => {
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//         table.setAttribute('border', '1');
//         for (let i = 0; i < lines; i++) {
//             let trCreator = document.createElement('tr');
//             table.appendChild(trCreator);
//             for (let j = 0; j < count; j++) {
//                 let thCreator = document.createElement('th');
//                 thCreator.innerText = text;
//                 trCreator.appendChild(thCreator);
//             }
//
//         }
//     }
//     tableCreator(lines1, count1, text1);
// }


/////////////////////////////////////////////

// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

//Виконання
// let f1 = document.getElementById('f1');
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let arrayOfBadWords = ['syka', 'blyat', 'naxyi', 'eblan'];
//     arrayOfBadWords.map(value => {
//         if (f1.text.value === value) {
//             alert('This is bad word');
//         }
//     });
//
// };


/////////////////////////////////////////////

// - Сворити масив не цензцрних слів.
//   Сворити інпут текстового типу.
//   Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//   Кинути алерт з попередженням у випадку якщо містить.
//   Перевірку робити при натисканні на кнопку

//Виконання
// let f1 = document.getElementById('f1');
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let arrayOfBadWords = ['syka', 'blyat', 'naxyi', 'eblan'];
//     f1.text.value.split(' ').map(value => {
//         arrayOfBadWords.map(value1 => {
//             if (value1 === value) {
//                 alert('You have bad word in sentence');
//             }
//         })
//
//     })
//
// };