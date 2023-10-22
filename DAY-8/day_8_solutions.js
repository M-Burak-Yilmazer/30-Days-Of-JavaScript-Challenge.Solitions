// // let dog={}
// // console.log(dog)
// // dog={
// //   name:"karabas",
// //   legs:4,
// //   age:12,
// //   color:"white-black",
// //   bark: function () {
// //     return "woof woof"

// //   }
// // }
// // console.log(dog.name,dog.age,dog.legs,dog.color, dog.bark())
// // dog.breed = true;
// //  dog.getDogInfo = function(){
// // return `${dog.name} ${this.age} ${this.color}`
// // }
// // console.log(dog.getDogInfo())

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// // console.log(Object.values(Object.values(users)[0])[1].length);
// // console.log(Object.values(Object.values(users)).length )
// // console.log(Object.keys(users)[0])

// //!1
// let max = 0;
// let tutucu = 0;

// for (let i = 0; i < Object.values(Object.values(users)).length; i++) {
//   if (Object.values(Object.values(users)[i])[1].length > max) {
//     max = Object.values(Object.values(users)[i])[1].length;
//     tutucu = i;
//   }
// }
// //   }
// // }
// // 7;
// // console.log(Object.keys(users)[tutucu]);

// // console.log(
// //   Object.values(Object.values(users)[0])[
// //     Object.keys(Object.values(users)[0]).indexOf("isLoggedIn")
// //   ]
// // );
// //*2
// let len = Object.values(Object.values(users)).length;
// let countTrues = 0;
// let countPoints = 0;
// // console.log(len)
// for (let i = 0; i < len; i++) {
//   if (
//     Object.values(Object.values(users)[i])[
//       Object.keys(Object.values(users)[i]).indexOf("isLoggedIn")
//     ] == true
//   )
//     countTrues++;

//   if (
//     Object.values(Object.values(users)[i])[
//       Object.keys(Object.values(users)[i]).indexOf("points")
//     ] >= 50
//   )
//     countPoints++;
// }
// console.log(countTrues, countPoints);

// let arr = [1,2,[1,3],3,4]
// console.log(arr.includes(1,3))

// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
// console.log(products.filter((pro) => pro.price == ""));

console.log("exercises again");

const dog = {};

console.log(dog);
dog.name = "martin";
dog.legs = 4;
dog.color = "black-white";
dog.age = 13;
dog.bark = "woof woof";
console.log(dog.name, dog.legs, dog.color);
dog.breed = 5;
dog.getDogInfo = function () {
  return ` Name : ${this.name}, Leg:  ${dog.legs}, ${dog.color}, ${dog.age}, ${dog.bark} ${dog.breed}`;
};
console.log(dog.getDogInfo());

//* Exercise 2
console.log("==========================================================");

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// console.log(users["Asab"])

const copyofUser = Object.keys(users);
// copyofUser.forEach(a=>console.log(a))
const skillArray = [];
copyofUser.forEach((user) => skillArray.push(users[user].skills.length));
console.log(skillArray);
const mostSkill = copyofUser[skillArray.indexOf(Math.max(...skillArray))];
console.log(mostSkill);
///2
console.log("================22222222222222222222===================");

let countLoggdIn = 0;
let countGreat50 = 0;
const copyOfValues = Object.values(users);
copyOfValues.forEach((user) => {
  user.isLoggedIn == true ? countLoggdIn++ : "";
  user.points >= 50 ? countGreat50++ : "";
});

console.log("Logged In:", countLoggdIn);
console.log("Great than 50:", countGreat50);

console.log("=================================");
//3
const Mern = ["MongoDB", "Express", "React", "Node"];
const listMern = [];
let deger = true;
copyOfValues.forEach((user, index, arr) => {
  for (let i = 0; i < Mern.length; i++) {
    if (user.skills.includes(Mern[i])) {
      deger = true;
    } else {
      deger = false;
      break;
    }
  }
  if (deger) {
    listMern.push(copyofUser[index]);
  }
});

console.log(listMern);


//4
