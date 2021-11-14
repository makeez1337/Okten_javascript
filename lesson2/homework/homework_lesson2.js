// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// Виконання
// let time = 43;
// console.log(time);
// if (time >= 0 && time <= 14) {
//     console.log('This is first half of hour')
// } else if (time > 14 && time <= 28) {
//     console.log('This is second half of hour')
// } else if (time > 28 && time <= 42) {
//     console.log('This is third half of hour')
// } else if (time > 42 && time <= 59) {
//     console.log('This is fourth half of hour')
// } else {
//     console.log('Choose between 0-59')
// }

//---------------------------------------------------------------------------


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//Виконання
// let day = 1;
// console.log(day);
//
// if (day > 0 && day <= 10) {
//     console.log('This is the first half of month')
// } else if (day > 10 && day <= 20) {
//     console.log('This is the second half of month')
// } else if (day >= 20 && day <= 31) {
//     console.log('This is the third half of month')
// } else {
//     console.log('Choose between 1-31')
// }

//---------------------------------------------------------------------------


//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

//Виконання
// let test = true;
//
// if (test) {
//     console.log('Right')
// } else {
//     console.log('False')
// }
//
//
// let test1 = ' ' ? console.log('True') : console.log('False')

//---------------------------------------------------------------------------


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//Виконання
// let a = -3;
// console.log(a);
//
// if (a !== 0) {
//     console.log('True')
// } else {
//     console.log('False')
// }

//---------------------------------------------------------------------------------------------

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

//Виконання
// let theShedule = +prompt('Choose day between 1-5');
//
// switch (theShedule) {
//     case 1:
//         let plans1 = {
//             day: 'Monday',
//             schedule: '7:00 - wake up ; 10:00 - clean teeth ; 12:00 - dinner ; 14:00 - go to the work'
//         }
//         alert(JSON.stringify(plans1));
//         break
//     case 2:
//         let plans2 = {
//             day: 'Tuesday',
//             schedule: '7:00 - wake up ; 10:00 - clean teeth ; 12:00 - dinner ; 14:00 - go to the work'
//         }
//         alert(JSON.stringify(plans2));
//         break
//     case 3:
//         let plans3 = {
//             day: 'Wednesday',
//             schedule: '7:00 - wake up ; 10:00 - clean teeth ; 12:00 - dinner ; 14:00 - go to the work'
//         }
//         alert(JSON.stringify(plans3));
//         break
//     case 4:
//         let plans4 = {
//             day: 'Thursday',
//             schedule: '7:00 - wake up ; 10:00 - clean teeth ; 12:00 - dinner ; 14:00 - go to the work'
//         }
//         alert(JSON.stringify(plans4));
//         break
//     case 5:
//         let plans5 = {
//             day: 'Friday',
//             schedule: '7:00 - wake up ; 10:00 - clean teeth ; 12:00 - dinner ; 14:00 - go to the work'
//         }
//         alert(JSON.stringify(plans5));
//         break;
//     default:
//         alert('Choose between 1-5')

// }

//---------------------------------------------------------------------------------------------

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.


//Виконання
// let daysInYear = 366;
//
// if (daysInYear % 4) {
//     console.log('This year is intercalary')
// }else {
//     console.log('This year is not intercalary')
// }

//---------------------------------------------------------------------------------------------


// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

//Виконання
// let officialJsName  = prompt('What the official JavaScript name');
//
// if (officialJsName === 'ECMAScript') {
//     alert('Right');
// }else {
//     alert('You dont know? ECMAScript')
// }


//----------------------------------------------------------------------------------------------
