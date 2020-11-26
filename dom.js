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
