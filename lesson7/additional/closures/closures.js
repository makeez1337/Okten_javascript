function userCard(number) {
    let obj = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };
    let workWithObj = {
        getCardOptions: function () {
            return obj;
        },
        putCredits: function (money) {
            obj.balance += money;
            obj.historyLogs.push({operationType: 'Received credits', credits: money, operationTime: new Date().toUTCString()})
        },
        takeCredits: function (creditMoney) {
            if (creditMoney > obj.balance) {
                console.error('You dont have enough money');
            } else if (creditMoney > obj.transactionLimit) {
                console.error('Limit forbid you to take money');
            } else {
                obj.balance -= creditMoney;
                obj.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: creditMoney,
                    operationTime: new Date().toUTCString()
                })
            }
        },
        setTransactionLimit: function (limit) {
            obj.transactionLimit = limit;
            obj.historyLogs.push({
                operationType: 'Transactions limit change',
                credits: limit,
                operationTime: new Date().toUTCString()
            })
        },
        transferCredits: function (value, cardToTransfer) {
            obj.balance -= value+((value*0.5)/100);
            cardToTransfer.putCredits(value);
            obj.historyLogs.push({
                operationType: 'Transaction on another card',
                credits: value,
                operationTime: new Date().toUTCString()
            })

        }

    }
    return workWithObj;

}


class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];

    }


    addCard() {
        this.cards.push(userCard());
    }

    getCardByKey(num) {
        return userCard(num);
    }


}


let bob = new UserAccount('Bob');

bob.addCard();
bob.addCard();

let card2 = bob.getCardByKey(2);
let card1 = bob.getCardByKey(1);

card1.putCredits(500);
card1.transferCredits(215, card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());


