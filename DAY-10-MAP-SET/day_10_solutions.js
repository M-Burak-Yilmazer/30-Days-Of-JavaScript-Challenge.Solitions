//* Exersise 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// 1
const newSet = new Set();

//
let arr = Array(11)
  .fill(0)
  .map((item, i) => item + i);
console.log(arr);

const setSet = new Set(arr);
console.log(setSet);
setSet.delete(0);
console.log(setSet);
setSet.clear();
console.log(setSet);
let strArray = ["il", "kayseri", "denmark", "sweeden", "ilce"];
let arraytoSet = new Set(strArray);
console.log(arraytoSet);

let newMap = new Map();
for (let item of countries) {
  newMap.set(item, item.length);
}
console.log(newMap);
let B = new Set(b);
let c = [...a, ...b];
console.log(c);
c = new Set(c);
console.log(c);

console.log(a.filter(item => B.has(item)))

