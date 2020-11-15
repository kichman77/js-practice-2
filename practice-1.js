// //                    Типы данных                           //
// // -------------------- task-1 -----------------------------

// let x = undefined;
// console.log(`значение: ${x} тип данных ${typeof x}`);

// let a = null;
// console.log(`значение: ${a} тип данных  ${typeof a}`);

// const num = 33;
// console.log(`значение: ${num} тип данных ${typeof num}`);

// const country = "Ukraine";
// console.log(`значение: ${country}тип данных: ${typeof country}`);

// let isOnline = true;
// console.log(`значение: ${isOnline} тип данных ${typeof isOnline}`);

// let isOffLine = false;
// console.log(`значение: ${isOffLine} тип данных: ${typeof isOffLine} `);

// let password = "qweqwe321";
// console.log(`значение: ${password} тип данных: ${typeof password}`);

// // -------------------- task-2 -----------------------------

// let message;
// if (typeof x === "undefined") {
//   message = `тип данных прошел проверку`;
// } else {
//   message = `что-то пошло не так`;
// }
// console.log(message);

// if (typeof a === "object") {
//   message = `что-то пошло не так`;
// } else {
//   message = `тип данных прошел проверку`;
// }
// console.log(message);

// if (typeof num === "number") {
//   message = `что-то пошло не так`;
// } else {
//   message = `тип данных прошел проверку`;
// }
// console.log(message);

// if (typeof country === "string") {
//   message = `тип данных прошел проверку`;
// } else {
//   message = `что-то пошло не так`;
// }
// console.log(message);

// if (typeof isOnline === "boolean") {
//   message = `тип данных прошел проверку`;
// } else {
//   message = `что-то пошло не так`;
// }
// console.log(message);

// if (typeof isOffLine === "boolean") {
//   message = `что-то пошло не так`;
// } else {
//   message = `тип данных прошел проверку`;
// }
// console.log(message);

// if (typeof password === "string") {
//   message = "парол принят, захады";
// } else {
//   message = "извини брат, невэрный парол";
// }
// console.log(message);

// // ----------------------------------------------------------

// let someNumber = !!55; //приведение числа к boolean
// console.log(typeof someNumber);

// // -------------------- task-3 -----------------------------

// let z = 10;
// if (z === 10) {
//   console.log(`Верно`);
// } else {
//   console.log(`Не верно`);
// }
// // -------------------- task-4 -----------------------------

// const min = 13;
// if (min >= 0 && min <= 15) {
//   console.log(`первая четверть`);
// } else if (min >= 16 && min <= 30) {
//   console.log(`вторая четверть`);
// } else if (min >= 31 && min <= 45) {
//   console.log(`третья четверть`);
// } else {
//   console.log(`четвертая четверть`);
// }
// // -------------------- task-5 -----------------------------

// let lang = "en";
// let arr = [];
// if (lang === "en") {
//   arr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// } else if (lang === "ru") {
//   arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// } else {
//   console.log(`choose another language`);
// }
// console.log(arr);

// switch (lang) {
//   case "en":
//     arr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//     break;
//   case "ru":
//     arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
//     break;
//   default:
//     console.log(`choose another language`);
// }

// const obj = {
//   en: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
//   ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
// };
// console.log(obj[lang]);

// // ----------------------------------------------------------

// const target2 = 3;
// let sum2 = 0;
// for (let i = 0; i < target2; i += 1) {
//   console.log(i);
//   sum2 += i;
// }
// console.log(sum2);

// const numberY = 10;
// for (let i = 0; i < numberY; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// const numberX = "25";
// let sum = 0;
// for (let i = 0; i < numberX; i++) {
//   console.log("i", i);
//   sum += i;
//   console.log("sum", sum);
// }
// console.log(sum); // 300

// const target1 = 15;
// let sum1 = 0;

// for (let i = 0; i < target1; i += 1) {
//   console.log("i", i);
//   sum1 += i;
//   console.log(`${i + 1} iteration sum:`, sum1);
// }

// // ------------------------------------------------
// // многомерный массив //

// const table = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(table[2][2]);
// console.log(table[0][1]);
// console.log(table.length);


