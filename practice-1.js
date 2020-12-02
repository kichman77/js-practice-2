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
// ---------------------------------------------
// Задача - сложение 2-х массивов//

// [3,2,6,6],[-7,2,2,8]
// 3266 + (-7228) = -3962
// -3962 перевести в масив [-3,9,6,2]
// function addArrays(array1, array2) {
//   const arrayOfNumbers = [];

//   let arrayToNumber1 = parseInt(array1.join(""));
//   let arrayToNumber2 = parseInt(array2.join(""));
//   const sumNummbers = arrayToNumber1 + arrayToNumber2;
//   const numberToArray = String(sumNummbers).split("");
//   for (let i = 0; i < numberToArray.length - 1; i++) {
//     if (numberToArray[i] === "-") {
//       arrayOfNumbers.push(numberToArray[i] + numberToArray[i + 1]);
//     }
//     if (numberToArray[i] !== "-") {
//       arrayOfNumbers.push(numberToArray[i + 1]);
//     }
//   }

//   return arrayOfNumbers.map((el) => Number(el));
// }
// -------------------------
// let array1 = [3, 2, 6, 6];
// let array2 = [-7, 2, 2, 8];
// let number = -3962;

// const resultArray = [];

// let arr1 = array1.join("");
// console.log(arr1);
// let arr2 = array2.join("");
// console.log(arr2);

// let result = Number(arr1) + Number(arr2);
// console.log(result);
// const num = String(result).split("");
// console.log(num);

// let spliceNum = num.splice(0, 2);
// console.log(num);
// let num1 = [];
// num.forEach((a) => num1.push(Number(a)));

// console.log(spliceNum);
// console.log(Number(spliceNum[0].concat(spliceNum[1])));
// let y = Number(spliceNum[0].concat(spliceNum[1]));
// resultArray.push(y, ...num1);
// console.log(resultArray);
// -------------------------------------------
// function addArrays(array1, array2) {
//   // console.log(array1);
//   // console.log(array2);

//   let a = array1.join("");
//   // console.log(+a);

//   let b = array2.join("");
//   // console.log(+b);

//   let c = +a + +b;
//   // console.log(c);

//   let d = String(c);
//   // console.log(d.substring(0, 1));

//   const result = d.split("");
//   // console.log(result);

//   const arr = [];
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
//     if (result[i] !== "-") {
//       arr.push(+result[i]);
//     } else {

//       let x = result[i] + result[i + 1];
//       result.splice(i+1, 1)
//       // console.log(x);
//       arr.push(+x);
//       // console.log(result.substring((i+1), (i+2)));
//     }
//   }
//   console.log(arr);
// }

// addArrays([3, 2, 6, 6], [-7, 2, 2, 8]);