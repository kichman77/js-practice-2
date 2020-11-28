import items from "./data/items.js";

// console.dir(window.document);

// const titleRef = document.querySelector("h1");
// //получили ссылку
// console.log(titleRef);
// // изменили textContent
// titleRef.textContent = "Hello America";

// const imageRef = document.querySelector(".photo");
// imageRef.alt = "bridge";
// imageRef.style.border = "3px solid";
// console.log(imageRef);
// console.log(imageRef.getAttribute("alt"));
// imageRef.setAttribute("name", "America"); // добавил атрибут
// console.log(imageRef.classList);
// console.log(imageRef.classList.contains("city"));
// console.log(imageRef.classList.contains("photo"));
// imageRef.classList.add("city-photo"); // добавил класс
// console.log(imageRef);
// imageRef.classList.remove("city-photo"); // удалил класс

// // -------------------------------------------------------
// // создание элемента

// const title = document.createElement("h2");
// console.dir(title);
// title.textContent = "good evening";
// title.classList.add("greet");
// const body = document.querySelector("body");
// console.log(body);
// titleRef.insertAdjacentElement("afterend", title);
// -----------------------------------------------
// const divTest = document.querySelector(".test");
// // console.log(divTest);

// const titleRef = document.createElement("h3");
// titleRef.textContent = "Test";
// titleRef.classList.add("title-test");
// // console.log(titleRef);

// const descTest = document.createElement("p");
// descTest.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, illo!";
// descTest.classList.add("text");
// // console.log(descTest);

// const listTest = document.createElement("ul");
// // console.log(listTest);
// const itemTest = document.createElement("li");
// itemTest.textContent = "testing Item";
// // console.log(itemTest);
// const itemTest1 = document.createElement("li");
// itemTest1.textContent = "testing Item1";

// const itemTest2 = document.createElement("li");
// itemTest2.textContent = "testing Item2";

// const itemTest3 = document.createElement("li");
// itemTest3.textContent = "testing Item3";
// listTest.append(itemTest, itemTest1, itemTest2, itemTest3);
// // console.log(listTest);

// divTest.append(titleRef, descTest, listTest);
// console.log(divTest);

// -------------------------------------

function createElement(array) {
  const title = document.createElement("h2");
  const image = document.createElement("image");
  const count = document.createElement("p");
  const price = document.createElement("p");
  console.log(title, image, count, price);

  console.log(array);
}
createElement(items);

// console.log(items[0]);

items.forEach(item => {
  console.log(createElement(item));
});
const produtCards = items.map(item => createElement(item))
console.log(produtCards);