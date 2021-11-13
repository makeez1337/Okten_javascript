// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.


// Виконання
// let num1 = +prompt('Type 1st number');
// let num2 = +prompt('Type 2nd number')
//
// if (num1 > num2) {
//     alert(num1)
// }else if (num2 > num1) {
//     alert(num2)
// }else if (num1 === num2) {
//     alert('Nums are equal')
// }else {
//     alert('Smth went wrong')}


//--------------------------------------------------------------------

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//   Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


// Виконання
// let numberOfFlat = +prompt('Type flat number');
//
// if (numberOfFlat > 0 && numberOfFlat <=20) {
//     alert('This is first approach');
// }else if (numberOfFlat > 20 && numberOfFlat <= 48) {
//     alert('This is the second approach');
// }else if (numberOfFlat > 48 && numberOfFlat <=90) {
//     alert('This is the third approach');
// }else {
//     alert('Choose between 1-90')
// }

//--------------------------------------------------------------------


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// Виконання
// let number = +prompt('Type a number') !== 10 ? alert('False') : alert('True')

//--------------------------------------------------------------------

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//   якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else



// Виконання
// let x = {name: 'Max'}
//
// if (typeof x === 'string') {
//     alert('2')
// } else if (typeof x === 'number') {
//     alert('1')
// } else if (typeof x === 'boolean') {
//     alert('3')
// } else if (typeof x === 'object') {
//     alert('3')
// } else {
//     alert('Idk what is this')
// }

//--------------------------------------------------------------------

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//   Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//   Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// Виконання
// alert('How will we study today?')
// let temperature = +prompt('What temperature is today?')
//
// if (temperature >= 10 && temperature <= 22) {
//     alert('We are going to study in office')
// } else {
//     alert('We are sitting at home and studying offline')
// }


//--------------------------------------------------------------------

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// Виконання
// let turnBaraban = +prompt('Type a number')
// console.log(turnBaraban);
//
// switch (turnBaraban) {
//     case 1:
//         alert('Congratz,you won automobile');
//         break;
//     case 2:
//         alert('Congratz, you won phone');
//         break;
//     case 3:
//         alert('Congratz, you won bicycle');
//         break;
//     case 4:
//         alert('Congratz, you won clock');
//         break;
//     case 5:
//         alert('Congratz, you won headphones');
//         break;
//     default:
//         alert('Ohh, you won nothing')
// }

--------------------------------------------------------------------




