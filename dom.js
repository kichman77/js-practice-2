// import items from "./data/items.js";
// console.log(items);
// import motos from "./data/moto.js";
// console.log(motos);

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

// --------------------------------------------------------

// const listRef = document.querySelector(".product-list");
// console.log(listRef);

// const createItem = function (array) {
//   const result = array.map((elem) => {
//     // console.log(elem);

//     const { title, image, count, price } = elem;

//     const item = document.createElement("li");
//     item.classList.add("product-item");

//     const producTitle = document.createElement("h4");
//     producTitle.textContent = title;
//     // console.log(producTitle);

//     const productImg = document.createElement("img");
//     productImg.setAttribute("src", image);
//     productImg.setAttribute("alt", title);
//     // console.log(productImg);

//     const productCount = document.createElement("p");
//     productCount.textContent = count;
//     // console.log(productCount);

//     const productPrice = document.createElement("p");
//     productPrice.textContent = price;
//     // console.log(productPrice);

//     item.append(producTitle, productImg, productCount, productPrice);
//     // console.log(item);

//     return item;
//   });
//   return result;
// };
// const a = createItem(items);
// console.log(a);

// listRef.append(...a);
// -----------------------------------------------------

// const motoList = document.querySelector(".moto-list");
// // console.log(motoList);

// const createMotoList = function (array) {
//   const result = array.map((moto) => {
//     // console.log(moto);

//     const { name, images, tags, year, price } = moto;
//     // console.log(name);
//     // console.log(images);
//     // console.log(tags);
//     // console.log(year);
//     // console.log(price);

//     const motoItem = document.createElement("li");
//     // console.log(motoItem);

//     const motoName = document.createElement("h4");
//     motoName.textContent = name;
//     // console.log(motoName);

//     const imgBox = document.createElement("div");
//     // console.log(imgBox);
//     const imgS = images.map((image) => {
//       // console.log(image);
//       const motoImage = document.createElement("img");
//       motoImage.setAttribute("src", image);
//       motoImage.setAttribute("alt", name);
//       motoImage.setAttribute("width", "250px");
//       return motoImage;
//     });
//     imgBox.append(...imgS);

//     const motoTags = document.createElement("div");
//     const tagS = tags.map((tag) => {
//       // console.log(tag);
//       const motoTag = document.createElement("p");
//       motoTag.textContent = tag;
//       // console.log(motoTags, motoTag);
//       return motoTag;
//     });
//     motoTags.append(...tagS);

//     const brthMoto = document.createElement("p");
//     brthMoto.textContent = year;
//     // console.log(brthMoto);

//     const motoCost = document.createElement("p");
//     motoCost.textContent = price;
//     // console.log(motoCost);

//     motoItem.append(motoName, imgBox, motoTags, brthMoto, motoCost);

//     return motoItem;
//   });
//   // console.log(result);
//   return result;
// };

// const x = createMotoList(motos);
// console.log(x);

// motoList.append(...x);
// --------------------------------------------------
//Событие//

// const targetBtnRef = document.querySelector(".js-target-btn");
// const addListenerBtnRef = document.querySelector(".js-add-listener");
// const removeListenerBtnRef = document.querySelector(".js-remove-listener");
// console.log(targetBtnRef,addListenerBtnRef,removeListenerBtnRef);

// ------ test listener //
// targetBtnRef.addEventListener('click', ()=> {
//   console.log(Date.now());// регистрация слушателя события
// })

// targetBtnRef.addEventListener('click', ()=> {
//   console.log('Hello');// регистрация слушателя события
// })
// ---------

// const doStuffonClick = () => {
//   console.log("Click!!");
// };

// addListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", doStuffonClick);
// });

// removeListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", doStuffonClick);
// });

//  targetBtnRef.addEventListener('click', (event)=> {
//     console.log(event.target);// элемент события
//   })

// ----------------------------------------------------
//Событие сабмит на форме//

// const formRef = document.querySelector(".js-registred-form");

// formRef.addEventListener("submit", formCreateDataObj);

// function formCreateDataObj(event) {
//   event.preventDefault();

//   //  console.dir(event.target.elements);

//   // const formElements = event.target.elements;
//   // console.log(formElements.subscription.value);

//   // console.log("Submit");

//   const formRef = event.target;
//   const formData = new FormData(formRef);
//   const submittedData = {};

//   formData.forEach((value, key) => {
//     console.log("value :", value);
//     console.log("key :", key);

//     submittedData[key] = value;
//   });
//   console.log(submittedData);

//   console.log(formRef.elements);
//   let data = JSON.stringify(submittedData);
//   console.log(data);
//   return data
// }
// -------------------------------------
// События input //

// const inputRef = document.querySelector(".js-input");
// // console.log(inputRef);
// const nameLableRef = document.querySelector(".js-button > span");
// // console.log(nameLableRef);
// const licenseRef = document.querySelector(".js-license");
// // console.log(licenseRef);
// const btnRef = document.querySelector(".js-button");
// // console.log(btnRef);

// inputRef.addEventListener("input", handleInputChange);
// inputRef.addEventListener("focus", handleInputFocus);
// inputRef.addEventListener("blur", handleInputBlur);
// licenseRef.addEventListener("change", handleLicenseChange);

// function handleInputFocus() {
//   console.log("Hello");
// }
// function handleInputBlur() {
//   console.log("Goodbye");
// }
// function handleInputChange(e) {
//   console.log(e.target.value);
//   console.log("hello");

//   nameLableRef.textContent = e.target.value;
// }
// function handleLicenseChange(e) {
//   console.log(e);

//   btnRef.disabled = !e.target.checked;
// }
// -----------------------------------------
// События клавиатуры//
// const outputRef = document.querySelector(".js-output");
// // console.log(outputRef);
// const clearBtnRef = document.querySelector(".js-clear");
// console.log(clearBtnRef);

// window.addEventListener("keydown", (e) => {
//   console.log("e.key:", e.key);
//   console.log("e.code:", e.code);

//   if (e.code === "Escape") {
//     console.log("Was press esc!");
//   }
// });

// window.addEventListener("keypress", onKeypress);
// clearBtnRef.addEventListener("click", onClearOutput);

// function onKeypress(event) {
//   outputRef.textContent += event.key;
// }
// function onClearOutput() {
//   outputRef.textContent = "";
// }
// ------------------------------------
//События мыши//
// const bigBoxRef = document.querySelector(".js-big-box");
// // console.log(bigBoxRef);

// bigBoxRef.addEventListener("mouseenter", (event) => {
//   console.log(event);
//   const box = event.target;
//   box.classList.add("box");
// });

// bigBoxRef.addEventListener("mouseleave", (event) => {
//   console.log(event);
//   const box = event.target;
//   box.classList.remove('box')
// });
// mouseover/mouseout - работает аналогично//

// болтливое событие
// bigBoxRef.addEventListener('mousemove', event =>{
//   console.log(event);
// })
// -------------------------------
// Модальное окно

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);

function onOpenModal() {
  document.body.classList.add("show-modal");
}
function onCloseModal() {
  document.body.classList.remove("show-modal");
}

// openModalBtn.removeEventListener("click", onOpenModal);
// closeModalBtn.removeEventListener("click", onCloseModal);
