// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

//Виконання
// let str = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str.length);
// console.log(str2.length);
// console.log(str3.length);

//-------------------------------------------------


// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

//Виконання
// let str = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


//---------------------------------------


// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//Виконання
// let str = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


//-----------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// Виконання
// let str = '  dirty  string   ';
// console.log(str);
// console.log(str.trim());


//------------------------------

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// Виконання
// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (arr) => {
//     return arr.split(' ');
// }
//
// console.log(stringToArray(str));


//---------------------------------

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// Виконання
// let str = 'Каждый охотник желает знать'
//
// let delete_characters = (str, lenght) => {
//     return str.substr(0, lenght);
// }
//
// console.log(delete_characters(str, 7));


//-----------------------------

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//Виконання
// let str = 'HTML JavaScript PHP';
//
// let insert_dash = (str) => {
//
//     return str.replaceAll(' ', '-').toUpperCase();
// }
//
// console.log(insert_dash(str));

//-----------------------------

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// Виконання
// let str = 'hello';
//
// let firstSymbolToUpper = (str) => {
//
//     return str.replace(str[0], str[0].toUpperCase());
//
// }
//
// console.log(firstSymbolToUpper(str1));

//--------------------------------

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// Виконання
// let str = 'hi my name iz xxx'
//
// let capitalizer = (str) => {
//     let split = str.split(' ');
//     let mappedStr = split.map((value, index) => {
//         return value.replace(value[0],value[0].toUpperCase())
//     })
//
//     return str = mappedStr.join(' ');
// }
//
// console.log(capitalizer(str));




