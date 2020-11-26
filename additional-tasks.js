// ---------------- module -1 -------------
// 1. Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// const getYear = prompt("Введите год Вашего рождения ");
// if (!isNaN(getYear)) {
//   getYear % 4 === 0
//     ? alert("Год Вашего рождения высокосный")
//     : alert("Год Вашего рождения не высокосный");
// } else {
//   alert("Вы ввели не число");
// }
// -------------------------------------

// 2.Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу
// вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні)
//  Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)"
// або "Ви програли, компютер загадав (тут варіант компютера)"

// const getNumber = prompt("Введите число от 1 до 10");
// let number = Math.ceil(Math.random() * (10 - 1) + 1);
// console.log(number);

// const result = Number(getNumber) === number;
// result ? alert("Вы угадали") : alert("компьютер выиграл");
// console.log(result);
// console.log(getNumber, typeof getNumber);
// --------------------------------------------
// 3.Написати програму яка буде знаходити суму, різницю, добуток,
// частрку двох чисел Користувач вводить 2 числа потім вводить знак операції
// і отримує результат в форматі
// "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// let number1 = prompt("введите число");
// let number2 = prompt("введите число");
// let value = prompt("введите операцию");
// let result = 0;
// if (value === "+") {
//   result = number1 + number2;
// } else if (value === "-") {
//   result = number1 - number2;
// } else if (value === "*") {
//   result = number1 * number2;
// } else if (value === "/") {
//   result = number1 / number2;
// } else if (value === "%") {
//   result = number1 % number2;
// } else if (value === "**") {
//   result = number1 ** number2;
// }
// console.log(result);

// switch (value) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   case "/":
//     result = number1 / number2;
//     break;
//   case "%":
//     result = number1 % number2;
//     break;
//   case "**":
//     result = number1 ** number2;
//     break;
//   default:
//     alert("введите математический оператор");
// }
// console.log(result);
// ------------------------------------------
// 4.Написати програму яка буде переводити температуру з цельсія в фаренгейти,
//  або навпаки з фаренгейта в цельсії

// let temp = prompt("введите число");
// let value = prompt("введите единицу измерения F или С");
// let result = 0;

// if (value === "C") {
//   result = temp * 1.8 + 32;

//   console.log("градусов по F", result);
// } else if (value === "F") {
//   result = (temp - 32) / 1.8;
//   console.log("градусов по С :", result);
// }

// switch (value) {
//   case "F":
//     result = (temp - 32) / 1.8;
//     break;
//   case "C":
//     result = temp * 1.8 + 32;
//     break;
//   default:
//     alert("введите данные");
// }
// console.log(result);
// ------------------------------
// 5. Написати програму яка перевіряє
// чи введене число потрапляє в діапазон від 55 до 99 включно

// let number = prompt("введите число");

// if (number >= 55 && number <= 99) {
//   console.log("true");
// }else{
//   console.log('false');
// }

// number > 55 && number < 99
//   ? alert("число прошло проверку")
//   : alert("число не прошло проверку");
// ------------------------------------------

// 6.Написати програму де користувач вводить 3 числа,
// після вводу всіх трьох чисел йому на екрані показується найбільше з них.
// Додатково перевіряти чи це взагалі числа

// const num1 = prompt("введите число");
// const num2 = prompt("введите число");
// const num3 = prompt("введите число");
// let result = Math.max(num1, num2, num3);
// // let result = Math.min(num1, num2, num3);
// console.log(result);
// console.log(!isNaN(result));
// ---------------------------------
// 7.Написати програму яка переведе введену оцінку студента до болонського формату
//  89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// let scoreStudent = prompt("введите число");

// if (scoreStudent >= 89 && scoreStudent <= 100) {
//   alert('Ваш уровень "А"');
// } else if (scoreStudent >= 75 && scoreStudent <= 88) {
//   alert('Ваш уровень "B"');
// } else if (scoreStudent >= 60 && scoreStudent <= 74) {
//   alert('Ваш уровень "C"');
// } else if (scoreStudent >= 45 && scoreStudent <= 59) {
//   alert('Ваш уровень "D"');
// } else if (scoreStudent >= 20 && scoreStudent <= 44) {
//   alert('Ваш уровень "E"');
// }else if(scoreStudent <20){
//   alert('Ваш уровень "F"')
// }else if(isNaN(scoreStudent)){
//   alert('Вы ввели не число')
// }
// -------------------------------
// 8.Написати програму яка отримає від користувача число (кількість хвилин)
// і виведе на екран строку в форматі години і хвилини
// Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

// let time = prompt("введите число");
// let hourTime = Math.floor(time / 60);
// console.log(hourTime);
// let minTime = time % 60;
// console.log(minTime);

// console.log(`time : hour ${hourTime} : min ${minTime}`);

// -----------------------------------------------
// 9. Написати гру камінь ножиці папір. Де компютер загадує своє значення
// потім користувач вводить свій варіант і далі ми
// бачимо результат на екпані хто виграв

const gameRef = {
  game: document.querySelector(".game"),
  stone: document.querySelector("[name='stone']"),
  scissors: document.querySelector("[name='scissors']"),
  paper: document.querySelector("[name='paper']"),
  result: document.querySelector(".result"),
};
// console.log(gameRef);

let game = ["stone", "paper", "scissors"];
// console.log(game);

function getIdx(array) {
  let idx = Math.floor(Math.random() * array.length);
  return idx;
}
gameRef.game.addEventListener("click", (e) => {
  // console.log(e.target.name);
  let result;
  let user = e.target.name;
  let comp = game[getIdx(game)];
  // console.log(comp, user);
  if (comp === user) {
    result = `ничья: ${comp} - ${user} играем дальше`;
    gameRef.result.textContent = result;
  } else {
    if (
      (comp === "stone" && user === "scissors") ||
      (comp === "scissors" && user === "paper") ||
      (comp === "paper" && user === "stone")
    ) {
      result = `компьютер со значением ${comp} выиграл у пользователя со значением ${user}`;
      gameRef.result.textContent = result;
    } else if (
      (comp === "stone" && user === "paper") ||
      (comp === "scissors" && user === "stone") ||
      (comp === "paper" && user === "scissors")
    ) {
      result = `user со значением ${user} выиграл у компьютера со значением ${comp}`;
      gameRef.result.textContent = result;
    }
  }
});
