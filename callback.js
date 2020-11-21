// const greet = function (name) {
//   console.log(`Hello ${name}`);
// };
// const greetWithName = function (callback) {
//   const name = "Mango";
//   console.log(callback);
//   callback(name);
// };

// greetWithName(greet);
// // -------------------------------------

// const button = document.querySelector("button");

// const hendleButtonClick = function () {
//   console.log("click");
// };

// button.addEventListener("click", hendleButtonClick);
// ----------------------------------------

// console.log('в коде перед таймаут');
// setTimeout(function(){
//   console.log('через 3 сек');
// },3000)

// console.log('в коде после таймаута');
// ------------------------------------------
// console.log("перед fetch");

// //вынесли функцию в переменную
// const hendleFetchSaccess = function(data){
//   console.log(data);
// }

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => res.json())
//   .then(hendleFetchSaccess)// используем переменную как колбек
// console.log('после fetch');
// ------------------------------------------
// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);
// -------------------------------------------

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i++) console.log(i);
// };
// repeatLog(5); // аргумент определяет кол-во итераций в цикле
// ---------------------------------------------

// const printValue = function (value) {
//   console.log(value);
// };
// const pryttyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };
// repeat(3, printValue);
// repeat(5, pryttyPrint);
// ---------------------------------------
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };
// const labels = [];
// repeat(5, (value) => labels.push(`Lebel ${value + 1}`));
// console.log(labels);
// --------------------------------------------
// const filter = function (array, test) {
//   const filtredElements = [];

//   for (const elem of array) {
//     const passed = test(elem);
//     if (passed) {
//       filtredElements.push(elem);
//     }
//   }
//   return filtredElements;
// };
// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];
// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits);
// const fruitWithQuantity = filter(fruits, fruit => fruit.quantity >= 120)
// console.log(fruitWithQuantity);