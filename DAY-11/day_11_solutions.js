// //*exercise1
// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ];
// //*1
// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// };

// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// let [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);

// let { width: w, height: h, area: a, perimeter: p } = rectangle;
// console.log(w, h, a, p);

// //todo: exercises: level2

// //*1*

// // for (let key of users) {
// //   console.log(Object.keys(key));
// // }
// //*2
// // let [{ skills, name }] = users;
// // const filtered = users
// //   .filter(({ skills }) => skills.length > 2)
// //   .map(({ name }) => name);
// // console.log(filtered);

// const team = [
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ];
// team.forEach((p) => {
//   const { name, surname, job, age } = p;
//   console.log("Name:", name, surname, job, age);
// });

// const user = {
//   id: 1234434527,
//   name: "Josh",
//   surname: "Barry",
//   job: "developer",
//   age: 30,
// };

// const productPrint =  ({ id, name, surname, age }) {
//   return { kimlikNo: id, adi: name, soyadi: surname, age: age };
// };
// console.log(kisiOku(user));
const araclar = [1, 2, 3, 4, 5];
const [...geriden] = araclar.slice(1, -1);
console.log(geriden);

const arrValue = ["My", "name", "is", "Jack"];
const array = [...arrValue];
console.log(array);
console.log(...["My", "name", "is", "Jack"]);
console.log(arrValue); // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack
