//
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)

//Виконання
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let maxUser = new User(1, 'Max', 'Mex', 'maxmax@mail.com', '06366666');
// let yuraUser = new User(2, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let kekUser = new User(3, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let lolUser = new User(4, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let mexUser = new User(5, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let samUser = new User(6, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let olegUser = new User(7, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let ivanUser = new User(8, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let popUser = new User(9, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let shopUser = new User(10, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
//
// let arr = [];
//
// arr.push(maxUser, yuraUser, kekUser, lolUser, mexUser, samUser, olegUser, ivanUser, popUser, shopUser);
//
// console.log(arr);


//----------------------------


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//Виконання
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let maxUser = new User(1, 'Max', 'Mex', 'maxmax@mail.com', '06366666');
// let yuraUser = new User(2, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let kekUser = new User(3, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let lolUser = new User(4, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let mexUser = new User(5, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let samUser = new User(6, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let olegUser = new User(7, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let ivanUser = new User(8, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let popUser = new User(9, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let shopUser = new User(10, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
//
// let arr = [];
//
// arr.push(maxUser, yuraUser, kekUser, lolUser, mexUser, samUser, olegUser, ivanUser, popUser, shopUser);
//
// let filter = arr.filter(value => value.id % 2 === 0);
//
// console.log(filter);


//------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//Виконання
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let maxUser = new User(1, 'Max', 'Mex', 'maxmax@mail.com', '06366666');
// let yuraUser = new User(8, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let kekUser = new User(7, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let lolUser = new User(5, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let mexUser = new User(4, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let samUser = new User(6, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let olegUser = new User(2, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let ivanUser = new User(3, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let popUser = new User(9, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
// let shopUser = new User(10, 'Yurx', 'Mex', 'maxmax@mail.com', '06366666');
//
// let arr = [];
//
// arr.push(maxUser, yuraUser, kekUser, lolUser, mexUser, samUser, olegUser, ivanUser, popUser, shopUser);
//
// let sort = arr.sort((a, b) => a.id - b.id);
//
// console.log(sort);


//------------------------------

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


//Виконання
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
// let user = new Client('1', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2', 'product3', 'product4']);
// let user1 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2']);
// let user2 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1']);
// let user3 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2']);
// let user4 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2', 'product3', 'product4', 'product5']);
// let user5 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2', 'product3']);
// let user6 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2']);
// let user7 = new Client('2', 'vasya', 'pupkin', 'vasyapupk@mail.com', '3806666666', ['product1', 'product2', 'product3', 'product4']);
//
// let arr = [user, user1, user2, user3, user4, user5, user6, user7]
//
//
// let clients = arr.sort((a, b) => a["order"].length - b["order"].length);
// console.log(clients);


//--------------------------------

