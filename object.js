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

const friends = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
  { name: "Chelsy", isActive: false },
  { name: "Kiwi", isActive: true },
];
console.table(friends);
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
