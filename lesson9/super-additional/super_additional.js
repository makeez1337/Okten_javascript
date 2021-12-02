let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

//Виконання
// let emptyArr = [];
//
// for (const user of users) {
//     emptyArr.push(user.address);
// }
//
// console.log(emptyArr);

//---------------------------------------


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

//Виконання
// let userDiv = document.createElement('div');
// document.body.appendChild(userDiv);
// for (const user of users) {
//     let pAboutUser = document.createElement('p');
//     userDiv.appendChild(pAboutUser)
//     pAboutUser.innerText = `${user.name} , ${user.age} , status - ${user.status}`;
//     let ulElement = document.createElement('ul');
//     userDiv.appendChild(ulElement);
//     for (const userKey in user.address) {
//         let liOfUserKey = document.createElement('li');
//         liOfUserKey.innerText = `${userKey} - ${user.address[userKey]}`;
//         ulElement.appendChild(liOfUserKey);
//     }
// }

//---------------------------------------

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// Виконання
// for (const user of users) {
//     let divForUser = document.createElement('div');
//     document.body.appendChild(divForUser);
//     divForUser.style.marginBottom = '80px';
//
//
//     let divForName = document.createElement('div');
//     divForUser.appendChild(divForName);
//     divForName.innerText = user.name;
//
//     let divForAge = document.createElement('div');
//     divForUser.appendChild(divForAge);
//     divForAge.innerText = user.age;
//
//     let divForStatus = document.createElement('div');
//     divForUser.appendChild(divForStatus);
//     divForStatus.innerText = user.status;
//
//
//
//     let divForAddress = document.createElement('div');
//     divForUser.appendChild(divForAddress);
//     let ulForAdress = document.createElement('ul');
//     divForAddress.appendChild(ulForAdress);
//     for (const addressKey in user.address) {
//         let liOfAddress = document.createElement('li');
//         ulForAdress.appendChild(liOfAddress);
//         liOfAddress.innerText = `${addressKey} - ${user.address[addressKey]}`;
//     }
//
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//Виконання
// for (const user of users) {
//     let divForUser = document.createElement('div');
//     document.body.appendChild(divForUser);
//     divForUser.style.marginBottom = '80px';
//
//
//     let divForName = document.createElement('div');
//     divForUser.appendChild(divForName);
//     divForName.innerText = user.name;
//
//     let divForAge = document.createElement('div');
//     divForUser.appendChild(divForAge);
//     divForAge.innerText = user.age;
//
//     let divForStatus = document.createElement('div');
//     divForUser.appendChild(divForStatus);
//     divForStatus.innerText = user.status;
//
//
//
//     let divForAddress = document.createElement('div');
//     divForUser.appendChild(divForAddress);
//     let divForUl = document.createElement('div');
//     divForAddress.appendChild(divForUl);
//     let ulForAddress = document.createElement('ul');
//     divForUl.appendChild(ulForAddress);
//     for (const addressKey in user.address) {
//         let divForLi = document.createElement('div');
//         ulForAddress.appendChild(divForLi);
//         let liForAddress = document.createElement('li');
//         divForLi.appendChild(liForAddress);
//         liForAddress.innerText = `${addressKey} - ${user.address[addressKey]}`;
//     }
//
// }


//-----------------------------------------

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//   створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//   Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// Виконання
// let idContent = document.getElementById('content');
// console.log(idContent);
// let ulForContent = document.createElement('ul');
// idContent.appendChild(ulForContent);
//
// function documentReader(elementToStart) {
//     let h1Elements = elementToStart.getElementsByTagName('h1');
//     for (const h1Element of h1Elements) {
//         console.log(h1Element);
//         let liForUl = document.createElement('li');
//         ulForContent.appendChild(liForUl);
//         liForUl.innerText = h1Element.innerText;
//
//         let h2Elements = elementToStart.getElementsByTagName('h2');
//         for (const h2Element of h2Elements) {
//             console.log(h2Element);
//             let cloneNode = liForUl.cloneNode();
//             ulForContent.appendChild(cloneNode);
//             cloneNode.innerText = h2Element.innerText;
//
//         }
//     }
//
//
//     if (elementToStart.children.length) {
//         for (const child of elementToStart.children) {
//             documentReader(child);
//         }
//     }
// }
//
// documentReader(document.body);


//-----------------------------------------


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//   При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//   Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


// Виконання
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// for (const rule of rules) {
//     let divForEveryRule = document.createElement('div');
//     document.body.appendChild(divForEveryRule);
//
//     let titleForEveryRule = document.createElement('h2');
//     divForEveryRule.appendChild(titleForEveryRule);
//     titleForEveryRule.innerText = rule.title;
//
//     let pForEveryRule = document.createElement('p');
//     divForEveryRule.appendChild(pForEveryRule);
//     pForEveryRule.innerText = rule.body;
//
// }
//
// let allDives = document.getElementsByTagName('div');
//
// for (let i = 0; i < allDives.length; i++) {
//     allDives[i].classList.add('rule');
//     allDives[i].classList.add(`rule${i+1}`);
// }
//




//------------------------------------------
