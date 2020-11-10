// -------------------- task-1 -----------------------------

let x = undefined;
console.log(`значение: ${x} тип данных ${typeof x}`);

let a = null;
console.log(`значение: ${a} тип данных  ${typeof a}`);

const num = 33;
console.log(`значение: ${num} тип данных ${typeof num}`);

const country = 'Ukraine';
console.log(`значение:${country} тип данных: ${typeof country}`);

let isOnline = true;
console.log(`значение: ${isOnline} тип данных ${typeof isOnline}`);

let isOffLine = false;
console.log(`значение: ${isOffLine} тип данных: ${typeof isOffLine} `);

let password = 'qweqwe321';
console.log(`значение: ${password} тип данных: ${typeof password}`);

// -------------------- task-2 -----------------------------

const message = undefined;
if (message === undefined) {
  console.log(`тип данных прошел проверку`);
} else {
  console.log(`что-то пошло не так`);
}
console.log(message);

const message1 = null;
if (message1 !== null) {
  console.log(`что-то пошло не так`);
} else {
  console.log(`тип данных прошел проверку`);
}
console.log(message1);

const message2 = Number();
if (message2 === NaN) {
  console.log(`что-то пошло не так`);
} else {
  console.log(`тип данных прошел проверку`);
}
console.log(typeof message2);

const message3 = 'Ukraine';
if (message3 === Number()) {
    console.log(`тип данных прошел проверку`);
} else {
    console.log(`что-то пошло не так`);
}
console.log( typeof message3);

// isOnline = true;
// if (isOnline === true) {
//   alert(`тип данных прошел проверку`);
// } else {

//   alert(`что-то пошло не так`);
// }
// console.log(typeof isOnline);

// isOffLine = false;
// if (isOffLine === true) {
//   alert(`что-то пошло не так`);
// } else {
//     alert(`тип данных прошел проверку`);
// }
// console.log(typeof isOffLine);

password = prompt('введите пароль');
if (password === 'qweqwe321') {
  alert('парол принят, захады)');
} else {
  alert('извини брат, невэрный парол');
}
console.log(typeof password);