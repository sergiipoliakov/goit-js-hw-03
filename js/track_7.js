// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  //сообщение о недостаточно денег.
  message: '',

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push({ id: this.transactions.length + 1, amount, type });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Счет пополнен на ${amount}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.message = `Со счета снято ${amount}`;
    } else {
      this.message = 'На вашем счету недостаточно денег';
    }

    return this.message;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (id === item.id) {
        return item;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Транзакций ${type} на сумму ${total}`;
  },
};

console.log(account.deposit(50));
//Счет пополнен на 50
console.log(account.withdraw(22));
console.log(account.deposit(50));
//Со счета снято 22
console.log(account.getBalance());
// Баланс: 28
console.log(account.withdraw(7));
// Со счета снято 7
console.log(account.getTransactionDetails(2));
// { id: 2, type: "withdraw", amount: 7 }
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// Транзакций deposit на сумму 50
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//Транзакций withdraw на сумму 29
