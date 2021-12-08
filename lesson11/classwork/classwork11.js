// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" ' +
// 'при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.


let favouritesArray = [];
for (const user of users) {
    const divForUser = document.createElement('div');
    document.body.appendChild(divForUser);
    divForUser.innerHTML = `${user.name} - ${user.age} - ${user.status}`;
    divForUser.style.marginBottom = '80px';

    const buttonForUser = document.createElement('button');
    divForUser.appendChild(buttonForUser);
    buttonForUser.style.height = '20px';

    buttonForUser.onclick = function () {
        favouritesArray.push(user);
        localStorage.setItem('favorites', JSON.stringify(favouritesArray));
    };
}

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
