// let dog={}
// console.log(dog)
// dog={
//   name:"karabas",
//   legs:4,
//   age:12,
//   color:"white-black",
//   bark: function () {
//     return "woof woof"

//   }
// }
// console.log(dog.name,dog.age,dog.legs,dog.color, dog.bark())
// dog.breed = true;
//  dog.getDogInfo = function(){
// return `${dog.name} ${this.age} ${this.color}`
// }
// console.log(dog.getDogInfo())

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
// console.log(Object.values(Object.values(users)[0])[1].length);
// console.log(Object.values(Object.values(users)).length )
// console.log(Object.keys(users)[0])
let max = 0;
let tutucu = 0;

for (let i = 0; i < Object.values(Object.values(users)).length; i++) {
  if (Object.values(Object.values(users)[i])[1].length > max) {
    max = Object.values(Object.values(users)[i])[1].length;
    tutucu = i;
  }
}
7;
console.log(Object.keys(users)[tutucu]);
