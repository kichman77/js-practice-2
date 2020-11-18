// const obj = {
//   key: 15,
// }; // литерал объекта

// const key = "person";
// // console.log(key);
// const object = {
//   key,
//   toShowKey(param1, param2, param3) {
//     console.log(param1, param2, param3);
//     return this.key;
//   },
// };
// object[key] = "Mango";
// object.name = "Vasy";
// console.log(object);

// console.log(object.toShowKey(1, 2, 3));
// console.log(object.toShowKey.call(obj, 4, 5, 6));
// console.log(object.toShowKey.call(obj, [7, 8, 9], 10, 11));
// console.log(object.toShowKey.apply(obj, [7, 8, 9], 10, 11));
// console.log(object.toShowKey.bind(obj, [7, 8, 9], 10, 11));

// //объявление функции высшего порядка,
// // ожидание метода объекта в качестве параметра
// function toShowInfo(myMethod) {
//   return myMethod();
// }
// //вызов функции высшего порядка
// //передача метода в качестве аргумента
// console.log(toShowInfo(object.toShowKey.bind(object, "i", "love", "javascript")));
// console.log(toShowInfo(object.toShowKey.bind(obj)));
// //НЕЗАВИСИМО ОТ КОНТЕКСТА ИСПОЛНЕНИЯ
// // КОЛБЭК МЕТОД НЕОБХОДИМО ПРИВЯЗЫВАТЬ К ОБЪЕКТУ - bind(obj)

// ----------------------------------------------------------------

// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capasity: 200,
// };
// console.log(hotel);

// const updateHotelName = function (hotel, newName) {
//   hotel.name = newName;
// };
// updateHotelName(hotel, "Lagoon");// перезаписывает свойство объекта
// console.log(hotel);
// ----------------------------------
// const hotel = {
//   name: "Sunset resort",
//   stars: 5,
//   capasity: 200,

//   updateName(newName, newStars) {
//     console.log("this:", this);

//     this.newMethod(); // вызов метода в методе объекта

//     this.name = newName;
//     this.stars = newStars;
//   },
//   newMethod() {
//     console.log("Hello from newMethod");
//   },
// };
// // console.log(hotel);
// hotel.updateName("Lagoon", 3); // перезаписывает свойство объекта
// hotel.guests = []
// console.log(hotel);
// ------------------------------------------------------

// for in ()
// -------------------------------
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// console.log("good" in feedback); // так работает оператор - in
// console.log("worst" in feedback); // такого ключа нет
// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key);

//   // console.log(feedback.neutral);// обращение к свойству объекта по ключу
//   console.log(feedback[key]); // обращение к свойствам!!! объекта через ключи!!!

//   totalFeedback += feedback[key];
// }
// console.log("totalFeedback:", totalFeedback);
// ---------------------------------------
//   Object.key, Object.value, Object.entryes

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback)
// console.log(keys);
// let totalFedback = 0;

// for(const key of keys){
//   console.log(key);

//   totalFedback += feedback[key]
// }
// console.log("totalFeedback:",totalFedback);
// ---------------------------------

// const values = Object.values(feedback);
// console.log(values);
// let totalFedback = 0;

// for (const value of values) {
//   console.log(value);

//   totalFedback += value;
// }
// console.log("totalFedback:", totalFedback);

// ------------------------------------

// console.log(Object.entries(feedback));

// ----------------------------------------

// const friends = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsy", isActive: false },
//   { name: "Kiwi", isActive: true },
// ];
// console.table(friends);
// console.log(friends[0]);

// const findName = "Ajax";

// for (const friend of friends) {
//   console.log(friend);

//   if (friend.name === findName) {
//     console.log("нашли друга");
//     continue;
//   }
// }

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     // console.log(friend);
//     names.push(friend.name);
//   }

//   return names;
// };
// console.log(getAllNames(friends));
// ------------------------------------

// const getIsActiveFriends = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.isActive) {
//       names.push(friend.name);
//     }
//   }
//   return names;
// };
// console.log(getIsActiveFriends(friends));
// ----------------------------------------------
// ----------------- КОРЗИНА ТОВАРОВ --------------
// const product = [
//   { name: "apple", price: 50 },
//   { name: "cherry", price: 70 },
//   { name: "lemon", price: 80 },
//   { name: "srtrawberry", price: 110 },
// ];

// const cart = {
//   items: [
//     { name: "apple", price: 50, quantity: 1 },
//     { name: "lemon", price: 80, quantity: 1 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       console.log(item);

//       if (item.name === product.name) {
//         console.log("такой продукт уже в корзине");
//         item.quantity += 1;
//         return;
//       }
//     }
//     console.log("добавляем новый продукт");
//     product.quantity = 1;
//     this.items.push(product);
//   },
//   remove(productName) {
//     console.log(productName);
//     for (let i = 0; i < this.items.length; i++) {
//       // console.log(this.items[i]);
//       const item = this.items[i];

//       if (productName === item.name) {
//         console.log("Нашли, удаляем!!!");
//         console.log("Индекс для удаления", i);

//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (const item of this.items) {
//       // console.log(item);// перебрали массив, на каждой итерации произвели необходимое действие!!!
//       total += item.price * item.quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);// удаляем продукт из корзины
//           return;
//         }
//         item.quantity -= 1;
//       }
//     }
//   },
// };
// // console.table(cart.getItems());

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "cherry", price: 70 });
// cart.add({ name: "srtrawberry", price: 110 });

// console.table(cart.getItems());

// // cart.remove("srtrawberry");
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());
// console.log("Total:", cart.countTotalPrice());

// cart.increaseQuantity("srtrawberry");
// console.table(cart.getItems());

// cart.decreaseQuantity("srtrawberry");
// cart.decreaseQuantity("srtrawberry");

// console.table(cart.getItems());

// -----------------------------------------------

