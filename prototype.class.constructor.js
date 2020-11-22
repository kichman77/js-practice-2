//Прототипное наследование

//const objA = {
//   a: 1,
//   y: 2,
// };

// const objB = {
//   z: 10,
// };
// console.log("objB :", objB);

// const objA = Object.create(objB);

// objA.x = 1;
// objA.y = 2;
// console.log("objA :", objA);
// console.log("objA :", objA.z); // находит значение по ссылке в __proto__
// ------------------------------
// Функции Конструкторы

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1; // добавляем свойство в prototype для дальнейшего переиспользования другими экземплярами(объектами)
// };
// // console.dir(Manager);

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Manager("Mango", 5);
// console.log(mango);
// mango.sell();
// console.log(mango);

// const poly = new Manager("Poly", 10);
// console.log(poly);
// poly.sell();
// console.log(poly);

// poly.changeName("NePoly");
// console.log(poly);

// console.log(mango.__proto__ === Manager.prototype);
// --------------------------------------------