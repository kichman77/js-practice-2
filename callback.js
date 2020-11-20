// const greet = function (name) {
//   console.log(`Hello ${name}`);
// };
// const greetWithName = function (callback) {
//   const name = "Mango";
//   console.log(callback);
//   callback(name);
// };

// greetWithName(greet);
// // -------------------------------------

// const button = document.querySelector("button");

// const hendleButtonClick = function () {
//   console.log("click");
// };

// button.addEventListener("click", hendleButtonClick);
// ----------------------------------------

// console.log('в коде перед таймаут');
// setTimeout(function(){
//   console.log('через 3 сек');
// },3000)

// console.log('в коде после таймаута');
// ------------------------------------------
// console.log("перед fetch");

// //вынесли функцию в переменную
// const hendleFetchSaccess = function(data){
//   console.log(data);
// }

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => res.json())
//   .then(hendleFetchSaccess)// используем переменную как колбек
// console.log('после fetch');
// ------------------------------------------
const printMessage = function(message){
  console.log(message);
}

const higherOrderFunction = function(callback){
  const string = 'HOCs are awesome';
  callback(string)
}

higherOrderFunction(printMessage)