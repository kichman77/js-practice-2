// -------------------- task-1 -----------------------------

let x = undefined;
console.log(`значение: ${x} тип данных ${typeof x}`);

let a = null;
console.log(`значение: ${a} тип данных  ${typeof a}`);

const num = 33;
console.log(`значение: ${num} тип данных ${typeof num}`);

const country = "Ukraine";
console.log(`значение:${country}тип данных: ${typeof country}`);

let isOnline = true;
console.log(`значение: ${isOnline} тип данных ${typeof isOnline}`);

let isOffLine = false;
console.log(`значение: ${isOffLine} тип данных: ${typeof isOffLine} `);

let password = "qweqwe321";
console.log(`значение: ${password} тип данных: ${typeof password}`);

// -------------------- task-2 -----------------------------

let message;
if (typeof x === "undefined") {
  message = `тип данных прошел проверку`;
} else {
  message = `что-то пошло не так`;
}
console.log(message);

if (typeof a === "object") {
  message = `что-то пошло не так`;
} else {
  message = `тип данных прошел проверку`;
}
console.log(message);

if (typeof num === "number") {
  message = `что-то пошло не так`;
} else {
  message = `тип данных прошел проверку`;
}
console.log(message);

if (typeof country === "string") {
  message = `тип данных прошел проверку`;
} else {
  message = `что-то пошло не так`;
}
console.log(message);

if (typeof isOnline === "boolean") {
  message = `тип данных прошел проверку`;
} else {
  message = `что-то пошло не так`;
}
console.log(message);

if (typeof isOffLine === "boolean") {
  message = `что-то пошло не так`;
} else {
  message = `тип данных прошел проверку`;
}
console.log(message);

if (typeof password === "string") {
  message = "парол принят, захады";
} else {
  message = "извини брат, невэрный парол";
}
console.log(message);

// ----------------------------------------------------------

let someNumber = !!55; //приведение числа к boolean
console.log(typeof someNumber);

// -------------------- task-3 -----------------------------

let z = 10;
if (z === 10) {
  console.log(`Верно`);
} else {
  console.log(`Не верно`);
}
// -------------------- task-4 -----------------------------

const min = 13;
if (min >= 0 && min <= 15) {
  console.log(`первая четверть`);
} else if (min >= 16 && min <= 30) {
  console.log(`вторая четверть`);
} else if (min >= 31 && min <= 45) {
  console.log(`третья четверть`);
} else {
  console.log(`четвертая четверть`);
}
// -------------------- task-5 -----------------------------

let lang = "en";
let arr = [];
if (lang === "en") {
  arr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
} else if (lang === "ru") {
  arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else {
  console.log(`choose another language`);
}
console.log(arr);

switch (lang) {
  case "en":
    arr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    break;
  case "ru":
    arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    break;
  default:
    console.log(`choose another language`);
}

const obj = {
  en: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
};
console.log(obj[lang]);

// ----------------------------------------------------------

const target2 = 3;
let sum2 = 0;
for (let i = 0; i < target2; i += 1) {
  console.log(i);
  sum2 += i;
}
console.log(sum2);

const numberY = 10;
for (let i = 0; i < numberY; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

const numberX = "25";
let sum = 0;
for (let i = 0; i < numberX; i++) {
  console.log("i", i);
  sum += i;
  console.log("sum", sum);
}
console.log(sum); // 300

const target1 = 15;
let sum1 = 0;

for (let i = 0; i < target1; i += 1) {
  console.log("i", i);
  sum1 += i;
  console.log(`${i + 1} iteration sum:`, sum1);
}

// ------------------------------------------------

// перебор массива имен/ поиск нужного имени

const friends = ["Mango", "Kiwy", "Ajax", "Poly"];
const findeName = "Ajax";
let showMessage = "Don`t finde name";

for (let i = 0; i < friends.length; i++) {
  console.log("friends name ", friends[i]); // перебор и вывод в консоль
}

friends[4] = "Kongo"; //замена элемента
console.log(friends);
friends[0] = "Moty"; // добавление элемента
console.log(friends.length);

for (const friend of friends) {
  if (findeName === friend) {
    showMessage = "finde name";
    break;
  }
}

console.log(showMessage);

// многомерный массив //

const table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(table[2][2]);
console.log(table[0][1]);
console.log(table.length);

// ------------------// методы массива //-----------------------------

const message7 = "Welcome to Kyiv";
console.log(message7.split("")); // split()
console.log(message7.split(" ")); // split()

console.log(friends.join("")); //join()
console.log(friends.join(",")); //join()
console.log(friends.join("-")); //join()

const friends1 = ["Mango", "Kiwy", "Ajax", "Poly"];
console.log(friends1.indexOf("Ajax")); // indexOf() - выводит в консоль идекс элемента

console.log(friends1.includes("Kiwy")); // true()
console.log(friends1.includes("Moty")); // false()

const redFruits = ["apple", "strawberry", "chery", "cranberries"];
const fruit = "chery"; // includes()

if (redFruits.includes("chery")) {
  console.log("it is red fruit!"); // includes()
}

const clients = ["client1", "client2"];
console.log(clients);

console.log(clients.push("client3")); // push()
console.log(clients.push("client4"));
console.log(clients);

console.log(clients.pop()); // pop()
console.log(clients.pop());
console.log(clients);

console.log(clients.shift());
clients.unshift("client0");
console.log(clients);

// --------------------------------------------

const cars = [
  {
    id: 1,
    name: "bmw",
    value: 5,
  },
  {
    id: 2,
    name: "audi",
    value: 3,
  },
  {
    id: 3,
    name: "mersedes",
    value: 2,
  },
];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  if (cars[i].id !== 2) continue;

  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
  if (car.value !== 5) continue;

  console.log(car); //for of -  нахрен никому не нужен!!!!!!!
}

cars.map((el) => {
  console.log(el);
});

// splice()
const languages = ["C", "C++", "Java", "JavaScript"];
console.log('languages',languages);// исходный массив
//удаление
const c = languages.splice(1, 2);
console.log('c',c);
console.log('languages',languages);
//добавление с заменой и без
const b = c.splice(1, 1, "C#", "Swift",'Go','Python');
console.log('c',c);
console.log('b',b);// обязательно удаление элемента


