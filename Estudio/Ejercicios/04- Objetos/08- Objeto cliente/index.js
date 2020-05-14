//admitir varias cuentas bancarias sacar o ingresar dinero de alguna

// let costumer = {
//     name: 'Mariano', 
//     firstName: 'Rajoy',
//     lastName: 'Brey',
//     bankAccount = {
//         bankAccount1: 'ES36 1258 4986 3657 1245 7485',
//         bankAccount2: 'ES45 1645 3452 7568 9786 3456'
//     }, 
//     accountBalance = {
//         accountBalance1: 2000,
//         accountBalance2: 1500,
//     }, 
//     putMoney: function (money = 0) {
//         this.accountBalance += money;  
//     },
//     transferMoney: function (money = 0) {
//         this.accountBalance -= money; 
//     },
//     bankAccount1Income: function (income = 0) {
//          let moreMoney1 = this.accountBalance1 + income; 
//         this.bankAccount1 = moreMoney1; 
//     },
//     bankAccount2Income: function (income = 0) {
//         let moreMoney2 = this.accountBalance2 + income;
//         this.bankAccount2 = moreMoney2;    
//     },
//     bankAccount1Outcome: function (outcome = 0) {
//         let lessMoney1 = this.accountBalance1 - income;
//         this.bankAccount2 = lessMoney1;
//     },
// }

// let costumer = {
//     name: 'Mariano', 
//     firstName: 'Rajoy',
//     lastName: 'Brey',
//     bankAccounts = {
//         bankAccount1: 'ES36 1258 4986 3657 1245 7485',
//         bankAccount2: 'ES45 1645 3452 7568 9786 3456'
//     }, 
//     accountBalance = 2000,


/* crear una propiedad     

*/


let costumer = {
        name: 'Mariano', 
        firstName: 'Rajoy',
        lastName: 'Brey',
        bankAccount = {
            'ES36 1258 4986 3657 1245 7485': {accountBalance = 0},
            'ES45 1645 3452 7568 9786 3456': {accountBalance = 0}
        }, 
        accountBalance: 2000,
        putMoney: function (accountId, money = 0) {
                let account = this.bankAccount[accountId];  
                if (account) {
                    acount.accountBalance += money; 
                }
            },
        transferMoney: function(accountId, money = 0) {
                let account = this.bankAccount[accountId];
                if (account) {
                    account.accountBalnace -= money; 
                } 
            } 
        }

