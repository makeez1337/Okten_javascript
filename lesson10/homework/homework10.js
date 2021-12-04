// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// Виконання
// let div = document.createElement('div');
// document.body.appendChild(div);
// div.setAttribute('id', 'text');
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.backgroundColor = 'red';
//
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.onclick = function (e) {
//     div.remove()
// };

////////////////////////////////////////////

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//Виконання
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.style.height = '100px';
// button.style.width = '100px';
//
// button.onclick = function () {
//     this.remove();
// };

////////////////////////////////////////////

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

//Виконання
// let f1 = document.getElementById('f1');
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     if (+f1.age.value > 18) {
//         console.log(f1.age.value, 'your age, is more than 18');
//     } else if (+f1.age.value > 0 && +f1.age.value < 18) {
//         console.log(+f1.age.value, 'your age, is less than 18');
//     } else if (+f1.age.value < 0) {
//         console.log('Error');
//     }else if (+f1.age.value === 18) {
//         console.log('Your age is 18');
//     }
// };

////////////////////////////////////////////

// - Создайте меню, которое раскрывается/сворачивается при клике

//Виконання
// let button = document.getElementById('button');
//
// let menu = document.getElementsByClassName('menu')[0];
//
// button.onclick = function (e) {
//     menu.classList.toggle('open-menu');
//     document.body.style.height = '2000px';
// };


/////////////////////////////////////////////

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.

//Виконання
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
//
// let div = document.createElement('div');
// document.body.appendChild(div);
// let ul = document.createElement('ul');
// div.appendChild(ul);
//
// for (const comment of comments) {
//     for (const commentKey in comment) {
//         let liForKey = document.createElement('li');
//         ul.appendChild(liForKey);
//         liForKey.innerText = `${commentKey} - ${comment[commentKey]}`
//         if (commentKey === 'body') {
//             let buttonForBody = document.createElement('button');
//             buttonForBody.innerText = 'HIDE';
//             ul.appendChild(buttonForBody);
//             buttonForBody.style.height = '20px';
//             buttonForBody.onclick = function () {
//                 liForKey.style.display = 'none';
//             };
//             let buttonForBodyOn = document.createElement('button');
//             ul.appendChild(buttonForBodyOn);
//             buttonForBodyOn.innerText = 'RETURN'
//             buttonForBodyOn.onclick = function () {
//                 liForKey.style.display = 'block';
//             };
//         }
//     }
// }


/////////////////////////////////////////////





