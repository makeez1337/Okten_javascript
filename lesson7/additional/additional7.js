// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//   id: 1,
//   name: 'Leanne Graham','9
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//           lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

//Виконання
// class User {
//     constructor(id, name, username, email, addressStreet,addressSuite,addressCity,addressZipcode,addressGeoLat,addressGeoLng,phone,website,companyName,companyCatchPhrase,companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: addressStreet,
//             suite: addressSuite,
//             zipcode: addressZipcode,
//             geo: {
//                 lat: addressGeoLat,
//                 lng: addressGeoLng
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: companyName,
//             catchPhrase: companyCatchPhrase,
//             bs: companyBs
//         }
//
//
//     }
//
// }
//
// let user1 = new User(1, 'Leanna Graham', 'Bret', 'leonne@gmail.com', 'Kulas Light', 'Atp 556', 'Gwenbourgh', '99231,', '-37.3123', '+37.1231', '380666666', 'website.in.ua', 'Grand Company', 'Multi-layer net', 'harrnes real-time');
//
// console.log(user1);


//----------------------------------------

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//   -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

//Виконання
// class TegDescribe {
//     constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [
//             {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
//             {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2}
//         ];
//     }
// }
//
// let aTag = new TegDescribe('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.');
//
// let divTag = new TegDescribe('div,','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','Задает выравнивание содержимого тега <div>.','title','Добавляет всплывающую подсказку к содержимому.')
//
// let h1Tag = new TegDescribe('h1', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.');
//
// let spanTag = new TegDescribe('span','Тег <span> предназначен для определения строчных элементов документа.');
//
// let inputTag = new TegDescribe('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.', 'alt', 'Альтернативный текст для кнопки с изображением.');
//
// let formTag = new TegDescribe('form', 'Тег <form> устанавливает форму на веб-странице.');
//
// let optionTag = new TegDescribe('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'disabled', 'Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
//
// let selectTag = new TegDescribe('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.', 'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.');

//------------------------------------
