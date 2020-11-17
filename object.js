const obj = {
  key: 15,
}; // литерал объекта

const key = "person";
// console.log(key);
const object = {
  key,
  toShowKey(param1, param2, param3) {
    console.log(param1, param2, param3);
    return this.key;
  },
};
object[key] = "Mango";
object.name = "Vasy";
console.log(object);

console.log(object.toShowKey(1, 2, 3));
console.log(object.toShowKey.call(obj, 4, 5, 6));
console.log(object.toShowKey.call(obj, [7, 8, 9], 10, 11));
console.log(object.toShowKey.apply(obj, [7, 8, 9], 10, 11));
console.log(object.toShowKey.bind(obj, [7, 8, 9], 10, 11));

//объявление функции высшего порядка,
// ожидание метода объекта в качестве параметра
function toShowInfo(myMethod) {
  return myMethod();
}
//вызов функции высшего порядка
//передача метода в качестве аргумента
console.log(toShowInfo(object.toShowKey.bind(object, "i", "love", "javascript")));
console.log(toShowInfo(object.toShowKey.bind(obj)));
//НЕЗАВИСИМО ОТ КОНТЕКСТА ИСПОЛНЕНИЯ
// КОЛБЭК МЕТОД НЕОБХОДИМО ПРИВЯЗЫВАТЬ К ОБЪЕКТУ - bind(obj)

