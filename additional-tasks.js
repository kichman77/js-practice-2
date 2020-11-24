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