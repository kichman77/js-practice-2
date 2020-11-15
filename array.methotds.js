// ------------------// методы массива //-----------------------------
//----------------  //    for/for of     // ---------------------------

// перебор массива имен / поиск нужного имени

// const friends = ["Mango", "Kiwy", "Ajax", "Poly"];
// const findeName = "Ajax";
// let showMessage = "Don`t finde name";

// for (let i = 0; i < friends.length; i++) {
//   console.log("friends name ", friends[i]); // перебор и вывод в консоль
// }

// friends[4] = "Kongo"; //замена элемента
// console.log(friends);
// friends[0] = "Moty"; // добавление элемента
// console.log(friends.length);

// for (const friend of friends) {
//   if (findeName === friend) {
//     showMessage = "finde name";
//     break;
//   }
// }

// console.log(showMessage);

// // ------------------------------------------------------
// const message7 = "Welcome to Kyiv";
// console.log(message7.split("")); // split()
// console.log(message7.split(" ")); // split()

// console.log(friends.join("")); //join()
// console.log(friends.join(",")); //join()
// console.log(friends.join("-")); //join()

// const friends1 = ["Mango", "Kiwy", "Ajax", "Poly"];
// console.log(friends1.indexOf("Ajax")); // indexOf() - выводит в консоль идекс элемента

// console.log(friends1.includes("Kiwy")); // true()
// console.log(friends1.includes("Moty")); // false()

// const redFruits = ["apple", "strawberry", "chery", "cranberries"];
// const fruit = "chery"; // includes()

// if (redFruits.includes("chery")) {
//   console.log("it is red fruit!"); // includes()
// }

// const clients = ["client1", "client2"];
// console.log(clients);

// console.log(clients.push("client3")); // push()
// console.log(clients.push("client4"));
// console.log(clients);

// console.log(clients.pop()); // pop()
// console.log(clients.pop());
// console.log(clients);

// console.log(clients.shift());
// clients.unshift("client0");
// console.log(clients);

// // --------------------------------------------

// const cars = [
//   {
//     id: 1,
//     name: "bmw",
//     value: 5,
//   },
//   {
//     id: 2,
//     name: "audi",
//     value: 3,
//   },
//   {
//     id: 3,
//     name: "mersedes",
//     value: 2,
//   },
// ];
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].id !== 2) continue;

//   console.log(cars[i]);
// }

// for (let car of cars) {
//   console.log(car);
//   if (car.value !== 5) continue;

//   console.log(car); //for of -  нахрен никому не нужен!!!!!!!
// }

// cars.map((el) => {
//   console.log(el);
// });

// //-------------------- splice() ------------------------//

// const languages = ["C", "C++", "Java", "JavaScript"];
// console.log("languages", languages); // исходный массив
// //удаление
// const c = languages.splice(1, 2);
// console.log("c", c);
// console.log("languages", languages);
// //добавление с заменой и без
// const b = c.splice(1, 1, "C#", "Swift", "Go", "Python");
// console.log("c", c);
// console.log("b", b); // обязательно удаление элемента

//--------------------- forEach() -------------------------- //

// const numbers = [1, 2, 3, 4, 5];
// //классический for() //
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // forEach() //
// numbers.forEach((el) => console.log(el));

// numbers.forEach((num, idx) => console.log(`idx: ${idx} num ${num}`));

// ----------------------- map() ----------------------------- //

// const numbers = [1, 2, 3, 4, 5];
// console.log("array:", numbers);

// numbers.map((num) => console.log("num:", num));

// const dubledNumbers = numbers.map((num) => num * 2);
// console.log("num:", dubledNumbers);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];
// const names = users.map((user) => user.name);
// console.log(names);

// ----------------------- filter() ---------------------------- //

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter((num) => num > 5));
// console.log(numbers.filter((num) => num < 5));
// console.log(numbers.filter((num) => num === 5));

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsy", isActive: false },
// ];

// const isActiveUser = users.filter((user) => user.isActive);
// console.table(isActiveUser);

// const inActiveUser = users.filter((user) => !user.isActive);
// console.table(inActiveUser);

// ----------------------- find() ---------------------------- //

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find((el) => el > 5));
// console.log(numbers.find((el) => el < 5));
// console.log(numbers.find((el) => el === 5));

// const users = [
//   { id: "001", name: "Mango", isActive: true },
//   { id: "002", name: "Poly", isActive: false },
//   { id: "003", name: "Ajax", isActive: true },
//   { id: "004", name: "Chelsy", isActive: false },
// ];

// const user = users.find((user) => user.id === "003");
// console.log(user);

// const getUserById = (arr, id) => arr.find((el) => el.id === id);
// console.log(getUserById(users, "002"));
// console.log(getUserById(users, "001"));

// ----------------------- every() --- / some() ---------------- //

// const isBigEnough = (val) => val >= 10;

// console.log([12, 5, 8, 130, 44].every(isBigEnough));
// console.log([15, 49, 35, 18, 74].every(isBigEnough));

// console.log([2, 5, 8, 1, 4].some(isBigEnough));
// console.log([12, 5, 8, 1, 4].some(isBigEnough));

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "banans", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];
// const allAvailable = fruits.every((fruit) => fruit.amount > 0);
// console.log(allAvailable);
// const anyAvalilable = fruits.some((fruit) => fruit.amount > 0);
// console.log(anyAvalilable);

// ----------------------- reduce() ----------------------------- //

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "css", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const likes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// console.log(likes);

// const countLikes = (tweets) => tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// console.log(countLikes(tweets));

// const countLikes1 = function (tweets) {
//   return tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// };

// console.log(countLikes1(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);
// console.log(tags);

// const getTags = (arr) =>
//   arr.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);
// console.log(getTags(tweets));

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;

//   return acc;
// };
// //  ["js", "nodejs", "html", "css", "html", "css", "nodejs", "css", "react", "js", "nodejs", "react"]

// const countTags = (tags) => tags.reduce(getTagStats, {});
// const tagCount = countTags(tags);
// console.log(tagCount);

// ----------------------- sort() ----------------------- //

// const string = "I love javascript";
// console.log(string.split("").sort());

// const names = ["Sara", "Vova", "Sava", "Vera"];

// console.log(names.sort());
// console.log(names.sort().reverse());

// const numbers = [12, 34, 57, 78, 93, 89, 1, 7, 9, 45];
// console.log(
//   numbers.sort((a, b) => {
//     return a - b;
//   })
// );
// пример перебора на каждой итерации//

// console.log(
//   numbers.sort((a, b) => {
//     b - a;
//     console.log(`a: `, a, `b: `, b);
//     return b - a;
//   })
// );
