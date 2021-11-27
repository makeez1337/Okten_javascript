// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// Виконання
// function Car(model, creator, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         return `We are going with ${this.maxSpeed}k/m per hour`;
//     }
//     this.info = function () {
//         return `Model - ${this.model}, Creator - ${this.creator}, Year - ${this.year}`
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         return this.driver = driver;
//     };
//
// }
//
// let honda = new Car('Hundai', 'Japanese', '2017', '220k/m', 3.5);
//
// console.log(honda.drive());
// console.log(honda.info());
// console.log(honda.increaseMaxSpeed(250));
// console.log(honda.changeYear(2020));
// console.log(honda);
// console.log(honda.addDriver('owner'));
// console.log(honda);

//-------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//Виконання
// class Car {
//     constructor(model, creator, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive () {
//         console.log(`We are going ${this.maxSpeed}k/m by hour`);
//     }
//
//     info() {
//         console.log(`Model - ${this.model} , Creator - ${this.creator} , Year - ${this.year}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDrive(driver) {
//         this.driver = driver;
//     }
//
//
// }
//
// let honda = new Car('Hundai', 'Japanese', '2017', 230, 3.5);
//
// honda.increaseMaxSpeed(300);
// honda.changeYear(2020);
// honda.addDrive('New Driver')
// console.log(honda.info());
// console.log(honda.drive());
// console.log(honda);


//--------------------------------------------


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// Виконання
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, years, shoeThatFoundPrince) {
//         this.name = name;
//         this.years = years;
//         this.shoeThatFoundPrince = shoeThatFoundPrince;
//     }
// }
//
// let prince = new Prince('Prince', 25, 36.5);
//
// let olena = new Cinderella('Olena', 23, 37);
// let nastya = new Cinderella('Nastya', 21, 37.5);
// let alina = new Cinderella('Alina', 24, 36);
// let jennifer = new Cinderella('Jennifer', 22, 36.5);
// let vika = new Cinderella('Vika', 26, 37.5);
// let nadya = new Cinderella('Nadya', 23, 37);
// let yulia = new Cinderella('Yulia', 22, 36);
//
//
// let cinderellasArr = [olena, nadya, nastya, alina, jennifer, vika, yulia];
//
// for (const cinderella of cinderellasArr) {
//     if (cinderella["footSize"] === prince["shoeThatFoundPrince"]) {
//         console.log(`${cinderella['name']} should be with ${prince['name']}`)
//     }
// }
//
// cinderellasArr.find(value => {
//     if (value.footSize === prince.shoeThatFoundPrince) {
//         console.log(`${value.name} should be with ${prince.name}`)
//     }
// })



//-------------------------------------------


