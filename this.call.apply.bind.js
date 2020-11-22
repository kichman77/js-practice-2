// this в контексте объекта
// console.log(this);// область видимости

// const user = {
//   tag: "Mango",
//   name: '77',
//   showTag() {
//     console.log("this :", this);
//     console.log("this.tag :", this.tag);
//     console.log('name :', this.name);
//   },
// };
// user.showTag();
// ----------------------------
// const foo = function () {
//   console.dir("this :", this);
// };
// foo()// вызов this без контекста // undefined
// -------------------------------

// const showTag = function () {
//   console.log("this :", this);
//   console.log("this.tag :", user.tag); //не работает для других объектов
// };
// // showTag()//this(контекст) определяется в момент вызова вызова

// const user = {
//   tag: "Mango",
// };
// const user1 = {
//   tag: "Kongo",
// };
// user.showTag = showTag; //записали функцию как свойство объекта
// user1.showTag = showTag;
// // console.log(user);
// // console.log(user1);
// user1.showTag();
// user.showTag(); // вызов функции в контексте объекта
// ----------------------------------
// // this в колбекфункции
// const myUser = {
//   tag: "Poly",
// };
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this :", this);
//     console.log("this.tag :", this.tag);
//   },
// };
// const anvokeAction = function (action) {
//   // console.log(action);

//   action();
// };
// user.showTag();
// // anvokeAction(user.showTag)// ошибка прочтения значения
// // вызов без контекста
// anvokeAction(user.showTag.bind(user)); // работает))
// anvokeAction(user.showTag.bind(myUser));

// -------------------------------------

// const makeChangeColor = function () {
//   // объявляем функцию для метода объекта
//   const changeColor = function (color) {
//     // console.log(this);
//     return this.color = color;
//   };
//   //создаем объект без метода
//   const sweater = {
//     color: "",
//   };
//   // присваиваем новый метод объекту
//   sweater.changeColor = changeColor;
//   // console.log(sweater);

//   // const sweater = {
//   //   color: "black",
//   //   changeColor(color) {
//   //    return this.color = color;
//   //   },
//   // };

//   return sweater.changeColor; // возврат метода без вызова
// };
// // console.log(makeChangeColor("blue")); // выводит объявление метода, а не вызов
// const changeColor = makeChangeColor();
// // console.log(changeColor);

// changeColor("blue");
// // // еще один пример - ошибка прочтения значения
// ------------------------------------
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log(this);
//     this.color = color;
//   };

//   return changeColor;
// };

// const hat = {
//   color: "blue",
//   // changeColor: makeChangeColor(),// es5 standard
//   changeColor(color){
//     this.color = color //es6 standard
//   }
// };


// hat.changeColor('orange')
// console.log(hat);
// ----------------------------------

// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log("this :", this);
//   console.log("this.tag :", this.tag);
// };
// // console.dir(showTag);
// const mango = {
//   tag: "Mango",
//   showTag,
// };

// const poly = {
//   tag: "Poly",
//   showTag,
// };

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 10, 20, 30);// вызывает функцию на месте

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [10, 20, 30]);//вызывает функцию на месте

// const shouMangoTag = showTag.bind(mango);// делае копию функции с приязкой контекста
// const showPolytag = showTag.bind(poly)
// shouMangoTag(1, 2, 3);
// showPolytag(10, 20, 30)

// -------------------------------
// const cart = {
//   items: ["телефон", "наушники"],
//   showItems() {
//     console.log("this :", this);
//     console.log("this.items :", this.items);
//   },
// };

// document.querySelector(".js-show-items").addEventListener("click", cart.showItems.bind(cart));
