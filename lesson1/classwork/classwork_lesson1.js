// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.


//Виконання
// let nums = [3, 10, Math.floor(Math.random() * 100), 44, 320, 66, 5, 123, 32, 10]
//
//
// let result = 0
//
// for (let i = 0; i < nums.length; i++) {
//   result = result + nums[i]
// }
//
// console.log(result);

//--------------------------------------------------------------------------------

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

//Виконання
// let book = {
//   name: 'Harry Potter',
//   pages: 100,
//   genre: 'fantasy'
// }

//--------------------------------------------------------------------------------

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори


// Виконання
// let book = {
//   name: 'The truth',
//   pages: 1000,
//   genre: 'psychology',
//   authors: [
//     {name: 'Rob', family: 'Suezen'},
//     {name: 'Oliver', family: 'Anthony'}
//   ]
//
//
// }

//--------------------------------------------------------------------------------

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт


// Виконання
// let books = [
//     {bookName: 'The History', pages: 500, genre: 'history', authors: [{name: 'Rob', surname: 'Anthony'}]},
//     {
//         bookName: 'Alone In',
//         pages: 300,
//         genre: ['drama', 'thriller'],
//         authors: [{name: 'Johnny', surname: 'Picasso'}, {name: 'Salvatrucio', surname: 'Picasso'}]
//     },
//     {bookName: 'What is money', pages: 700, genre: 'business', authors: [{name: 'Adolph', surname: 'Kennedy'}]}
//
// ]
//
// for (let book of books) {
//     console.log(book);
// }

//--------------------------------------------------------------------------------

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// Виконання
// function area(height,width) {
//     let s = height*width
//     return s;
// }
//
// console.log(area(23, 10));

//--------------------------------------------------------------------------------

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.


// Виконання
// function capacity(heightC, dC) {
//
//     const PI = 3.14;
//
//     let v = PI*(dC**2)*heightC;
//     return v
// }
//
// console.log(capacity(10, 4));

//--------------------------------------------------------------------------------


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// Виконання
// function hypotenuse(n,m) {
//
//     k = Math.sqrt(Math.pow(n,2)) * Math.sqrt(Math.pow(m,2))
//
//     return k
// }
//
// console.log(hypotenuse(3, 4));


//--------------------------------------------------------------------------------

