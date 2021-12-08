// -створити форму з інпутами для name та age.
//   При відправці форми записати об'єкт в localstorage

//Виконання
// let form = document.forms[0];
// let username = document.forms[0].username;
// let usersurname = document.forms[0].usersurname;
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem(username.value, JSON.stringify(usersurname.value));
// }

// -створити форму з інпутами для model,type та volume автівки.
//   при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

//Виконання
// let form = document.forms[0];
// let carModel = form.model;
// let carType = form.type;
// let carVolume = form.volume;
//
// form.onsubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('auto', JSON.stringify([carModel.value, carType.value, carVolume.value]));
// }
//
// let item = localStorage.getItem('auto');
// console.log(JSON.parse(item));





