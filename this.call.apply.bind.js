//this в контексте объекта
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this :", this);
//     console.log("this.tag :", this.tag);
//   },
// };
// user.showTag();
// ----------------------------
// const foo = function () {
//   console.log("this :", this);
// };
// foo()// вызов this без контекста // undefined
// -------------------------------

// const showTag = function () {
//   console.log("this :", this);
//   console.log("this.tag :", this.tag);
// };
// // showTag()//this(контекст) определяется в момент вызова вызова

// const user = {
//   tag: "Mango",
// };

// user.showTag = showTag;//записали функцию как свойство объекта

// console.log(user);
// user.showTag()// вызов функции в контексте объекта
// ----------------------------------
// // this в колбекфункции
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("this :", this);
//     console.log("this.tag :", this.tag);
//   },
// };
// const anvokeAction = function (action) {
//   console.log(action);

//   action()
// };
// anvokeAction(user.showTag)// ошибка прочтения значения
// // вызов без контекста
// -------------------------------------

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     // console.log(this);
//     this.color = color;
//   };
//   const sweater = {
//     color: "teal",
//   };

//   sweater.changeColor = changeColor;

//   return sweater.changeColor;
// };

// const changeColor = makeChangeColor();

// changeColor("blue");
// // еще один пример - ошибка прочтения значения
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
//   changeColor: makeChangeColor(),
// };

// hat.changeColor('orange')
// console.log(hat);
// ----------------------------------

const showTag = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
  console.log("this :", this);
  console.log("this.tag :", this.tag);
};
// console.dir(showTag);
const mango = {
  tag: "Mango",
  showTag,
};

const poly = {
  tag: "Poly",
  showTag,
};

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
