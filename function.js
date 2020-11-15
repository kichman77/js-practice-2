// const add = function (a, b, c) {
//   // console.log("Hello");
//   console.log("a:", a);
//   console.log("b:", b);
//   console.log("c:", c);

//   const result = a + b + c;
//   return result;
// };
// const r1 = add(7, 15, 37);
// console.log(r1);
// const r2 = add(29, 32, 97);
// console.log(r2);
// const r3 = add(12, 121, 17);
// console.log(r3);

// ----------------- порядок выполнеия кода --------------------

// const fnA = function () {
//   console.log("Начал выполнение [fnA]");
//   fnB();
//   console.log("Продолжил выполнение [fnA] после выхода из [fnB]");
// };
// const fnB = function () {
//   console.log("Выполняется [fnB]");
// };

// console.log("Начал выполнение [main]");
// fnA();
// console.log("Продолжил выполняться [main]");
// ----------------------------------------------------
// const friends = ["Mango", "Poly", "Ajax", "Chelsy"];

// // for (const friend of friends) {
// //   console.log(friend);
// // };

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // for(const num of numbers){
// //   console.log(num);
// // }

// const logItems = function (items) {
//   for (const item of items) console.log(item);
// };
// logItems(friends);
// logItems(numbers);
// logItems(["x", "y", "z", "Hello", 777]);
// ---------------------------------------------------

// const friends = ["Mango", "Poly", "Ajax", "Chelsy"];

// const nameToFinde = "Ajax";
// let message = "нашли такого друга";

// for (const friend of friends) {
//   if (nameToFinde === friend) {
//     message = "нашли такого друга";
//     break;
//   }
// }
// console.log(message);
// -----------------------
// const findFriends = function (allFriends, name) {
//   console.log("friends:", allFriends);
//   console.log("name:", name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return "нашли такого друга";
//     }
//   }
//   return "Не нашли";
// };
// console.log(findFriends(friends, "Ajax"));
// console.log(findFriends(friends, "Chelsy"));
// console.log(findFriends(friends, "Kiwi"));

// includes()
// const findFriends = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);
//   // ------
//   // if(isInFriends){
//   //   return "нашли такого друга"
//   // }else{
//   //   return "не нали"
//   // }
//   // ------
//   return isInFriends ? "нашли такого друга" : "не нашли";
// };
// console.log(findFriends(friends, "Ajax"));
// console.log(findFriends(friends, "Chelsy"));
// console.log(findFriends(friends, "Kiwi"));
// ---------------------------------------------

// универсальная функция превращения строк в слаги

// const slugify = function (string) {
//   const words = string.toLowerCase().split(" ");
//   const slug = words.join("-");
//   // console.log(words);
//   return slug;
// };
// -----------------
// const slug1 = slugify("Top ten benefits of React framework");
// console.log(slug1);
// const slug2 = slugify("Data protection and protecting your users in light of GDPR");
// console.log(slug2);
// --------------------

// Делаем массив слагов

// const articles = [
//   "Top ten benefits of React framework",
//   "Data protection and protecting your users in light of GDPR",
//   "How to find Unique and Memorable Name of Your Product",
//   "Build Mean Steack Application",
//   "11 fruitful resourses ipruv Javascript knowledge ",
// ];
// console.log('articles',articles);

// const original = [];
// const slugs = [];
// // ---------------------------
// // for of //
// // for (const article of articles) {
// //   const slug = slugify(article);
// //   slugs.push(slug);
// // }
// // -----------------------------
// // map()//
// articles.map((article) => {
//   console.log("original :", article);
//   console.log("slug :", slugify(article));
//   original.push(article);
//   slugs.push(slugify(article));
// });

// console.log('original',original);
// console.log('slugs',slugs);

// ----------------------------------

// const numbers = [25, 47, 90, 45, 78, 37, 15, 7];
// // let smallestNumber = numbers[0];

// // for (let i = 1; i < numbers.length; i += 1) {
// //   // визул итерации по массиву
// //   // console.log("numbers [i]: ",numbers[i]);
// //   // console.log("smallestNumber :", smallestNumber);

// //   if(numbers[i] < smallestNumber){
// //     smallestNumber = numbers[i];
// //   }
// // }
// // console.log(smallestNumber);

// const findSmallesNumber = function (items) {
//   let smallestNumber = items[0];
//   // console.log(item);

//   for (let i = 0; i < items.length; i++) {
//     // console.log("items [i]: ", items[i]);
//     // console.log("smallestNumber :", smallestNumber);
//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }
//   return smallestNumber;
// };
// console.log(findSmallesNumber(numbers));
// console.log(findSmallesNumber([25, 47, 90, 2, 37, 15, 7, -5]));
// ------------------------------------------------------------------

// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const removeCard = function (allCards, cardName) {
//   const index = allCards.indexOf(cardName);

//   allCards.splice(index, 1);

//   // console.log(allCards)
//   // console.log("qweqwe");

//   // allCards.push('Helo')
// };
// removeCard(cards, "card-2");
// removeCard(cards, "card-3");
// cards.push("card-6", "card-7");

// console.log(cards);

// const addCards = function (allCards, cardToInsert, index) {
//   cards.splice(index, 0, cardToInsert);
// };
// addCards(cards, "cards-10", 3);
// console.log(cards);
// ------------------------------------------------

// const fn = function(){
//   console.log([]);
//   console.log(arguments);// псевдомассив
// }
// fn([1, 2, 3, 4, 5])

// const add = function () {
//   const args = Array.from(arguments); // преобразование псевдомассива в массив
//   console.log('псевдомассив',arguments);
//   console.log('массив',args);

//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
// };
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(2, 5, 7, 9));
// ---------------------------------

// rest //
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(2, 5, 7, 9));
// ------------------------------------

const posts = ["post-1", "post-2", "post-3", "post-4", "post-5"];
const tag = "#jqueryrules";

// const postWithTag = [];

// for(const post of posts){
//   postWithTag.push(`${post} ${tag}`)
// }
// console.log(postWithTag);
// -----------------------------
// const addTag = function(tag,...args){
//   // console.log(tag);
//   // console.log(args);
//   const postWithTags = [];

//   for(const arg of args){
//     postWithTags.push(`${arg} ${tag}`)
//   }
//   return postWithTags
// }
// console.log(addTag('#jqueryrules','post-1', 'post-2'));
// console.log(addTag('#react', 'post-1', 'post-2', 'post-3', 'post-4'));
// console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4', 'post-5','post-6'));
// --------------------------------------------

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("недостаточно средств на счету");
//   } else {
//     console.log("операция снятия средств проведена");
//   }
// };
// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// Guard Clause//
const withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log("введите сумму больше нуля");
    return;
  }
  if (amount > balance) {
    console.log("недостаточно средств на счету");
    return;
  }
  console.log("операция снятия средств проведена");
};

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);
