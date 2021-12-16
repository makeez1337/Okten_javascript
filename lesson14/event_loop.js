//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


//async by callbacks


//Виконання
// let userMoney = 1200;
//
// function myDayStart(isDayStarted, cb) {
//     setTimeout(() => {
//         if (isDayStarted) {
//             cb(null, 'Good morning,now cleen ur teeth');
//         } else {
//             cb('Stop sleepin ma friend', null);
//         }
//     }, 1000);
//
// }
//
// function cleanMyTeeth(isTeethCleaned, cb) {
//     setTimeout(() => {
//         if (isTeethCleaned) {
//             cb(null, 'Great,ur teeth so tidy,now u should eat');
//         } else {
//             cb('Clen ur teeth brah,so dirty', null);
//         }
//     }, 500);
// }
//
// function eatDinner(didYouEat, cb) {
//     setTimeout(() => {
//         if (didYouEat) {
//             cb(null, 'Ohh, it was tasty, now I have to go in the shower');
//         } else {
//             cb('You are hungry, better to eat', null);
//         }
//     }, 2000);
// }
//
// function washingInTheShower(didUWash, cb) {
//     setTimeout(() => {
//         if (didUWash) {
//             cb(null, 'I feel so fresh, work waits,I should hurry')
//         } else {
//             cb('Faster visit a shower, work waits', null);
//         }
//     }, 1500);
// }
//
// function cameToTheWork(cameIntime, cb) {
//     setTimeout(() => {
//         if (cameIntime) {
//             cb(null, 'Seems all good, now get start');
//         } else {
//             cb('Shit, boss gonna shout on me', null);
//         }
//     }, 3500);
// }
//
// function endOfWork(workEnd, cb) {
//     setTimeout(() => {
//         if (workEnd) {
//             let todaySalary = 500;
//             userMoney += todaySalary;
//             console.log(`You earned today ${todaySalary}$, your balance ${userMoney}$`);
//             cb(null, userMoney);
//         } else {
//             cb('End your work', null);
//         }
//     }, 5000);
//
// }
//
// function buyFoodInShop(didUBuyFood, cb) {
//     setTimeout(() => {
//         if (didUBuyFood) {
//             let productPrice = 250;
//             userMoney -= productPrice;
//             cb(null, `You bought food for ${productPrice}$, your balance - ${userMoney}`);
//         } else {
//             cb('You should buy products', null);
//         }
//     }, 1500);
// }
//
// function taxiToHome(didUCallTaxi, cb) {
//     setTimeout(() => {
//         if (didUCallTaxi) {
//             let taxiPrice = 50;
//             userMoney -= taxiPrice;
//             cb(null, `You called taxi for ${taxiPrice}$, now u are going home. Your balance - ${userMoney}`);
//         } else {
//             cb('U are tired, call taxi', null);
//         }
//     }, 2000);
// }
//
// function cameHome(didOpenTheDoor, cb) {
//     setTimeout(() => {
//         if (didOpenTheDoor) {
//             cb(null, 'Opened the door and finally came home');
//         } else {
//             cb('Came into your house', null);
//         }
//     }, 3000);
// }
//
// function goToSleep(doYouSleep, cb) {
//     setTimeout(() => {
//         if (doYouSleep) {
//             cb(null, 'Layed down on bed');
//         } else {
//             cb('Feel so tired, maybe i should go sleep', null);
//         }
//     }, 2000);
// }
//
// myDayStart(true, (err, action1) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(action1);
//         cleanMyTeeth(true, (err2, action2) => {
//             if (err2) {
//                 console.error(err2);
//             } else {
//                 console.log(action2);
//                 eatDinner(true, (err3, action3) => {
//                     if (err3) {
//                         console.error(err3);
//                     } else {
//                         console.log(action3);
//                         washingInTheShower(true, (err4, action4) => {
//                             if (err4) {
//                                 console.error(err4);
//                             } else {
//                                 console.log(action4);
//                                 cameToTheWork(true, (err5, action5) => {
//                                     if (err5) {
//                                         console.error(err5);
//                                     } else {
//                                         console.log(action5);
//                                         endOfWork(true, (err6, balance) => {
//                                             if (err6) {
//                                                 console.error(err6);
//                                             } else {
//                                                 buyFoodInShop(true, (err7, action7) => {
//                                                     if (err7) {
//                                                         console.error(err7);
//                                                     } else {
//                                                         console.log(action7);
//                                                         taxiToHome(true, (err8, action8) => {
//                                                             if (err8) {
//                                                                 console.error(err8);
//                                                             } else {
//                                                                 console.log(action8);
//                                                                 cameHome(true, (err9, action9) => {
//                                                                     if (err9) {
//                                                                         console.log(err9);
//                                                                     } else {
//                                                                         console.log(action9);
//                                                                         goToSleep(true, (err10, action10) => {
//                                                                             if (err10) {
//                                                                                 console.log(err10);
//                                                                             } else {
//                                                                                 console.log(action10);
//                                                                             }
//
//                                                                         });
//                                                                     }
//
//                                                                 });
//                                                             }
//
//                                                         });
//                                                     }
//
//                                                 });
//                                             }
//
//                                         });
//
//                                     }
//
//                                 });
//                             }
//
//                         });
//                     }
//                 })
//             }
//         });
//     }
// });

//////////////////////////////////////////////////

//promises

//Виконання
// let userBalance = 2000;
//
// function holidays(goToHolidays) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (goToHolidays) {
//                 resolve('Yee, its holidays time');
//             } else {
//                 reject('This is not time to chill yet');
//             }
//         }, 1000);
//     }))
// }
//
// function placeToChill(choosedPlace) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (choosedPlace) {
//                 resolve('We are going in Carpathians');
//             } else {
//                 reject('Didnt choose place still');
//             }
//         }, 500);
//     }))
//
// }
//
// function welcomeInCarpathians(didWeCome, money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (didWeCome) {
//                 console.log(`Welcome in Carpathians.Your balance:${money}$ `)
//                 resolve(money);
//             } else {
//                 reject('Didnt come yet');
//             }
//         }, 2000);
//     }))
//
// }
//
// function goSkiing(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 250) {
//                 money -= 250;
//                 console.log('Woohoo, skiing is cool');
//                 console.log('-250$ for skiing');
//                 resolve(money);
//             } else {
//                 reject('Have a bad mood, maybe its not time to chill');
//             }
//         }, 1000);
//     }))
//
// }
//
// function rideTheLift(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 150) {
//                 money -= 150;
//                 console.log('Wooho, riding the lift');
//                 console.log('-150$ for riding the lift');
//                 resolve(money);
//             } else {
//                 reject('Seems i should go home');
//             }
//         }, 500);
//     }))
// }
//
// function goInClub(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 300) {
//                 money -= 300;
//                 console.log('Evening has come. Its good idea to visit club');
//                 console.log('-300$ in da club');
//                 resolve(money);
//             } else {
//                 reject('What I am doing here if i wanna nothing?')
//             }
//         }, 5000);
//     }))
// }
//
// function afterParty(areYouTired) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (areYouTired) {
//                 resolve('Time to go home..I dont want to waste all money');
//             } else {
//                 reject('Thats really strange');
//             }
//         }, 1500);
//     }))
//
// }
//
// function cameHome(didUCome) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (didUCome) {
//                 resolve('Finally I came. Now I can sleep a bit');
//             } else {
//                 reject('Go home, dont do any shit');
//             }
//         })
//     }))
//
// }
//
// holidays(true)
//     .then(res => {
//         console.log(res);
//         return placeToChill(true);
//     })
//     .then(res => {
//         console.log(res);
//         return welcomeInCarpathians(true, userBalance);
//     })
//     .then(res => {
//         console.log(res);
//         return goSkiing(res);
//     })
//     .then(res => {
//         console.log('Your balance', res, '$');
//         return rideTheLift(res);
//     })
//     .then(res => {
//         console.log('Your balance', res, '$');
//         return goInClub(res);
//     })
//     .then(res => {
//         console.log('Your balance', res, '$');
//         return afterParty(true);
//     })
//     .then(res => {
//         console.log(res);
//         return cameHome(true);
//     })
//     .then(res => {
//         console.log(res);
//     })
//
//     .catch(e => {
//         console.log(e);
//     })
//     .finally(() => {
//         setTimeout(() => {
//             console.log('FINAL');
//         }, 1500);
//     })

/////////////////////////////////////////////////

//async await

//Виконання
// let userBalance = 2000;
//
// function holidays(goToHolidays) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (goToHolidays) {
//                 resolve('Yee, its holidays time');
//             } else {
//                 reject('This is not time to chill yet');
//             }
//         }, 1000);
//     }))
// }
//
// function placeToChill(choosedPlace) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (choosedPlace) {
//                 resolve('We are going in Carpathians');
//             } else {
//                 reject('Didnt choose place still');
//             }
//         }, 500);
//     }))
//
// }
//
// function welcomeInCarpathians(didWeCome, money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (didWeCome) {
//                 console.log(`Welcome in Carpathians.Your balance:${money}$ `)
//                 resolve(money);
//             } else {
//                 reject('Didnt come yet');
//             }
//         }, 2000);
//     }))
//
// }
//
// function goSkiing(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 250) {
//                 money -= 250;
//                 console.log('Woohoo, skiing is cool');
//                 console.log('-250$ for skiing');
//                 resolve(money);
//             } else {
//                 reject('You dont have enough money brah');
//             }
//         }, 1000);
//     }))
//
// }
//
// function rideTheLift(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 150) {
//                 money -= 150;
//                 console.log('Wooho, riding the lift');
//                 console.log('-150$ for riding the lift');
//                 resolve(money);
//             } else {
//                 reject('You dont have enough money brah');
//             }
//         }, 500);
//     }))
// }
//
// function goInClub(money) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 300) {
//                 money -= 300;
//                 console.log('Evening has come. Its good idea to visit club');
//                 console.log('-300$ in da club');
//                 resolve(money);
//             } else {
//                 reject('You dont have enough money brah')
//             }
//         }, 5000);
//     }))
// }
//
// function afterParty(areYouTired) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (areYouTired) {
//                 resolve('Time to go home..I dont want to waste all money');
//             } else {
//                 reject('Maybe better to go home?');
//             }
//         }, 1500);
//     }))
//
// }
//
// function cameHome(didUCome) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             if (didUCome) {
//                 resolve('Finally I came. Now I can sleep a bit');
//             } else {
//                 reject('Go home, dont do any shit');
//             }
//         })
//     }))
//
// }
//
// async function howDidSpendHolidays() {
//     try {
//         const celebrate = await holidays(true);
//         console.log(celebrate);
//
//         const carpathiansZone = await placeToChill(true);
//         console.log(carpathiansZone);
//
//         const cameInCarpathians = await welcomeInCarpathians(true, userBalance);
//         console.log(cameInCarpathians);
//
//         const letSkiing = await goSkiing(cameInCarpathians);
//         console.log(letSkiing);
//
//         const ridinLift = await rideTheLift(letSkiing);
//         console.log(ridinLift);
//
//         const visitinClub = await goInClub(ridinLift);
//         console.log(visitinClub);
//
//         const aftParty = await afterParty(true);
//         console.log(aftParty);
//
//         const aldreadyAtHome = await cameHome(true);
//         console.log(aldreadyAtHome);
//     }catch (e) {
//         console.log(e);
//     }
//
//
// }
//
// howDidSpendHolidays()
