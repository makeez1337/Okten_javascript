// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//

//Виконання
// let mail = 'some.eMIl@gmail.com';
//
// let emailValidator = (email) => {
//     let nickBeforeSnail = email.substring(0,email.indexOf('@')).toLowerCase();
//     console.log(`Nickname before @ - '${nickBeforeSnail}'`);
//     if ( email.indexOf('.') < email.indexOf('@') || email.indexOf('.') === email.indexOf('@')+1) {
//         console.log(`Mail '${email.toLowerCase()}' isnot valid`)
//         return false;
//     }else {
//         console.log(`The mail '${email.toLowerCase()}' is valid`)
//         return email.toLowerCase();
//     }
//
// }
//
// emailValidator(mail)


//---------------------------------


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//Виконання
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// let sorted = coursesArray.sort((a, b) => {
//     return b.modules.length - a.modules.length;
// });
// console.log(sorted);


//--------------------------------


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// Виконання
// let str = "Астрономия это наука о небесных объектах";
//
// let symbolCounterInString = (str, symbolToCount) => {
//     let emptyArr = [];
//
//     str.split('').map(value => {
//         if (value === symbolToCount) {
//             emptyArr.push(value);
//         }
//     })
//
//
//     return emptyArr.length;
// }
//
// console.log(symbolCounterInString(str, 'о'));


//-----------------------------


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//   let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

//Виконання
// let str = "Сила тяжести приложена к центру масс тела";
//
// let cutString = (str,n) => {
//
//     return str.split(' ').slice(0,n).join(' ');
//
// }
//
// console.log(cutString(str, 5));



//---------------------------