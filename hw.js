//hw-3, task-2//

// const findBestEmployee = function (employees) {
//   const array = Object.entries(employees);
//   // console.log(typeof array); //получили доступ к массиву объектов
//   // console.log(employees); // переменная принимающая в себя объект(список сотрудников)

//   let bestName = array[0][0];
//   let bestScore = array[0][1];
//   // console.log(bestName, bestScore);

//   for (let i = 1; i < array.length; i++) {
//     console.log(array[i]);

//     const innerArray = array[i];// записываем в переменную итерируемый объект
//     // console.log(innerArray);

//     let name = innerArray[0];// имя сотрудника
//     // console.log(name);

//     let score = innerArray[1];// кол-во дел
//     // console.log(score);

//     if (bestScore < score) {       // на каждой итерации сравниваем кол-во
//       bestScore = score;            //дел и вычисляем самого результативного
//       bestName = name;
//       // console.log(bestScore, bestName);
//     }
//   }
//   return bestName;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
// // ----------------------------

// hw-3 task-4 //

// const countTotalSalary = function (employees) {
//   // const arr1 = Object.keys(employees); // получаем доступ к ключам объекта
//   // console.log(arr1);
//   const arr = Object.values(employees); // получаем доступ к значениям элементов объекта
//   console.log(arr);

//   let total = 0;// объявили переменную "счетчик"
//   //
//   for (const elem of Object.values(employees)) { //пребираем объект
//     total += elem;// на каждой итерации в переменную "счетчик" плюсуется значение(value)
//     console.log(total);
//   }
//   return total;// возвращаем значение
// };
// // console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400
// ------------------------------------------

// hw-3 task-5//

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   // console.log(prop);// name/quantity/category
//   // console.log(arr);//массив объектов
//   let array = [];
//   for(let obj of arr){ // перебираем массив в цикле
//     // console.log(obj);// получаем доступ к объектам из массива
//     for(let key in obj){ // перебираем объект с помощью for in
//       // console.log(key);// получаем доступ к ключам
//       if(key === prop){
//         array.push(obj[key])
//       }
//     }
//   }
//   return array
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'price')); //

// -----------------------------------------------------

// hw- 3 task-6//

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   // console.log(allProducts, productName);// параметры принимающие значение из аргументов в вызове функции

//   for (let elem of allProducts) {
//     // перебор массива объектов
//     // console.log(elem); // получили доступ к объектам
//     for (let key in elem) {
//       // перебираем объект
//       // console.log(key);// получили доступ к ключам объекта

//       if (elem[key] === productName) {
//         // если имя объекта совпадает с именем переданным при вызове функции
//         return elem.price * elem.quantity; // возврвщаем результат умножения цены на кол-во
//       }
//     }
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800
// ---------------------------------------------------------------

//hw-3 task-7//

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     let id = this.transactions.length + 1;
//     // console.log(id);

//     const transaction = { id: id, amount: amount, type: type };
//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     return (this.balance += amount);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//       return (this.balance -= amount);
//     }
//     return "не достаточно средств";
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let elem of this.transactions) {
//       // console.log(elem);
//       if (elem.id === id) return elem;
//     }
//     return "такой транзакции нет";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (let elem of this.transactions) {
//       // console.log(elem);
//       if (elem.type === type) {
//         total += elem.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(account.deposit(4000));
// console.log(account.balance);
// console.log(account.deposit(3000));
// console.log(account.balance);
// console.log(account.withdraw(2000));
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// ------------------------------------------------------------------

//hw-4 task-1

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// ----------------------------------------------------------
// hw-4 task-2

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// // console.log(this);
// invokeInventoryAction('Medkit', inventory.add.bind(inventory));// привязка контекста
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));// привязка контекста
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']