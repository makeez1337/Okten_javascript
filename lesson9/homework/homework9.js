// Все робити за допомоги js.

// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// Виконання
//
// let divElement = document.createElement('div');
// divElement.style.width = '200px';
// divElement.style.height = '200px';
// divElement.style.backgroundColor = 'red';
// document.body.appendChild(divElement);
// document.body.appendChild(divElement.cloneNode());

//----------------------------------------------

// - Є масив:
//   ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

//Виконання
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let elementsByClassName = document.getElementsByClassName('menu');
//
// arr.map(value => {
//     let liElement = document.createElement('li');
//
//     liElement.innerText = value;
//     elementsByClassName[0].appendChild(liElement);
//
// })


//-----------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

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
// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     document.body.appendChild(divElement);
//     divElement.innerText = `${element.title} - ${element.monthDuration}`;
// }

//------------------------------------------------


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.

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
// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     document.body.appendChild(divElement);
//     divElement.classList.add('item');
//
//     let h1Element = document.createElement('h1');
//     divElement.appendChild(h1Element);
//     h1Element.classList.add('heading');
//     h1Element.innerText = `${element.title}`;
//
//     let pElement = document.createElement('p');
//     divElement.appendChild(pElement);
//     pElement.classList.add('description');
//     pElement.innerText = `${element.monthDuration}`;
// }


//------------------------------------------------