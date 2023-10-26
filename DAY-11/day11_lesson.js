// // // const numbers = [1, 2, 3];
// // // let [one, two, three] = numbers;
// // // console.log(one, two, three);

// // // const names = ["Asabeneh", "Brook", "David", "John"];
// // // let [firstname, secondname] = names;
// // // console.log(
// // //   `Firstname of array is ${firstname}, Secondname of array is "${secondname}"`
// // // );

// // const fullstack = [
// //   ["html", "css", "javascript", "react"],
// //   ["nodejs", "express", "django"],
// // ];

// // let [[first, second, third]] = fullstack;
// // console.log(first, second, third);
// // for (let [first, second, third, forth = "java"] of fullstack) {
// //   console.log(first, second, third, forth);
// // }
// const number = [1, 3, 5];

// let [first] = number;
// console.log(first);
// // console.log(second);
// // // console.log(third);
// const users = ["ali", "veli", "hüseyin"];
// let [babam, kardeşim, kayinco = "ahmet", ablam = "ayse"] = users;
// console.log(babam, kardeşim, kayinco, ablam);

// const array = [
//   ["java", "php", "django"],
//   ["html", "css", "js"],
// ];
// let [[one, two], [firstEl, secondEl, thirdEl]] = array;
// // console.log(back);
// console.log(firstEl, secondEl);
// console.log(one, two);

// let num = [1, 3, 7];
// const [, , thirdChild] = num;
// console.log(thirdChild);

// const names = [undefined, "Brook", "David"];
// let [
//   firstPerson = "Asabeneh",
//   secondPerson,
//   thirdPerson,
//   fourthPerson = "John",
// ] = names;
// console.log(names);

// const numb = [1, 0, 9, 5, 6, 7];
// let [one1, two2, ...kalanlar] = numb;
// console.log(one1, two2);
// console.log(kalanlar);
// let one2 = numb[0];

// console.log("==========================");
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
//   ["Turkey", "Ankara"],
// ];

// // let [[country, capital]] = countries;
// // console.log(country, capital);

// for (let [country, capital] of countries) {
//   console.log(`${country} of capital is ${capital}`);
// }

// console.log("----------------------");
// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (const [first, second, third, forth = "django"] of fullStack) {
//   console.log(first, second, third, forth);
// }
// console.log("-----");

// const userName = {
//   soyadi: "yilmaz",
//   age: 32,
//   skills: ["html", "css", "js"],
// };
// let {
//   name = "ahmet",
//   soyadi,
//   age,
//   skills,
//   hobby = ["read", "bike"],
// } = userName;
// console.log(name, soyadi, age, skills, hobby);
// console.log(userName);

// const kisi = {
//   name: "ahmet",
//   surname: "kaya",
//   age: 33,
// };
// const getFullName = (obj) => {
//   return `${obj.name} ${obj.surname} is ${obj.age} years old`;
// };
// console.log(getFullName(kisi));

// const fullName = ({ name, surname, age }) => {
//   return `${name} ${surname} is ${age} years old`;
// };
// console.log(fullName(kisi));

// console.log("-----------------------");
// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: undefined,
//   },
// ];
// todoList.forEach(({ task, time, completed }) =>
//   console.log(task, time, completed)
// );
// for (let { task, time, completed =true} of todoList) {
//   console.log(task, time, completed);
// }

const numbers = [1, 2, 3, 4, 5];
const [, , , ...number1] = numbers;
console.log(number1);

// number1.push(6);
// console.log(number1);
// console.log(numbers);

const user = {
  name: "",
  surname: "kaya",
  age: 32,
};
const user1 = { name: "ali", ...user };
console.log(user1);

// const sumAllNums = (...args) => {
//   console.log(args);
// };

// sumAllNums(1, 2, 3, 4, 5);

const sumAllNums = (...a) => {
  let sum = 0;
  for (const num of a) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5));
