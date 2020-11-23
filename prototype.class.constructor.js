//Прототипное наследование

// const objA = {
//   a: 1,
//   y: 2,
// };
// --------
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

//ООП
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// console.log(getWage(baseSalary, overtime, rate));
// -------------
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage()); // вся инфо собрана в объекте!!
// --------------------------------------------
// функция конструктор содержит в себе свойства и методы будущих экземпляров
// const Hotel = function (name, stars, capasity) {
//   this.name = name;
//   this.stars = stars;
//   this.capasity = capasity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName} welcome to ${this.name}`);
//   };

//   this.addGuest = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuest = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// // создание объекта с помощью функции конструктора
// const hotel = new Hotel("Sunrise hotel", 5, 100);
// console.log(hotel);

// hotel.greet("Mango");
// hotel.addGuest(35);
// console.log(hotel);
// hotel.removeGuest(12);
// console.log(hotel);
// --------------------------------------------------
// универсальная функция учета продаж:

// const Manager = function (name = "manager", sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };
// const mango = new Manager("Mango", 5);
// console.log(mango.sales);
// console.log(mango.sell("TV"));
// console.log(mango.sell("Microwave"));
// console.log(mango.sales);

// const kongo = new Manager("Kongo", 15);
// console.log(kongo.sales);
// console.log(kongo.sell("TV"));
// console.log(kongo.sell("Microwave"));
// console.log(kongo.sales);
// ---------------------------------------------

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience pointe`);
//   this.xp += amount;
// };

// const mango = new Hero("Mango", 1000);
// console.log(mango);
// mango.gainXp(500);
// console.log(mango);

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constuctor = Warrior;
// console.dir(Warrior);

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attack with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");
// console.log(poly);
// poly.attack();
// poly.gainXp(300);
// console.log(poly);

// const kongo = new Warrior("Kongo", 400, 'spear')
// console.log(kongo);
// kongo.attack()
// kongo.gainXp(250)
// console.log(kongo);