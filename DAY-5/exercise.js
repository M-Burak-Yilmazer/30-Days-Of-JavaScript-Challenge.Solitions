// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// const companies = companiesString.split(", ");
// console.log(companies)
// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// const words = txt.replaceAll(",","").replaceAll(".","").split(" ")
// console.log(words)

// let number = 3
// let str = number.toString();
// console.log(str)
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// console.log(names.join(", "))
// const numbers = [1, 2, 3, 4, 5, 6];

// let atılan = numbers.splice(3, 3, 7, 8, 9)
// console.log(atılan)

// const number1 = [1, 2, 3, 4, 5];
// console.log(number1.pop());

// const ages = [-5,5,119,19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// ages.sort(function (a, b) {
//   return a - b;
// });
// console.log(ages)

// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// for (let i = 0; i < itCompanies.length; i++) {

//   if (
//     itCompanies[i].toLowerCase().indexOf("o") <
//     itCompanies[i].toLowerCase().lastIndexOf("o")
//   ) {
//     itCompanies.splice(i, 1);
//     i--
//   }
// }

// console.log(itCompanies);
// let pattern = /o/gi;
// console.log("google".match(pattern))

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
for (let i = 0; i < itCompanies.length; i++) {
  let pattern = /o/gi;
  let item = itCompanies[i].toLowerCase().match(pattern);
  
    if ((Object.keys(item)).length > 1) {
      itCompanies.splice(i, 1);
      i--;
    }
}
