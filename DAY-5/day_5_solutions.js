console.log("--------------Day-5----------------");

/* -------------------------------------------------------------------------- */
/*                             Exercise : Level 1                             */
/* -------------------------------------------------------------------------- */
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let emptyArr = Array();
let newArray = Array(8).fill(10);
let len = countries.length;
console.log(len);
console.log(newArray.length);
console.log("first item of Array : ", countries[0]);
console.log("middle item of Array:", countries[Math.ceil((len - 1) / 2)]);
console.log("last item of Array: ", countries[len - 1]);
let mixedDataTypes = [12, "12", true, false, { a: "df" }, ["q"]];
console.log(mixedDataTypes.length);
let itCompanies = ["Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"];
let itComp = itCompanies.join(" ").replaceAll(",", "").split(" ");
console.log(itComp);
console.log(
  itComp[0],
  itComp[(itComp.length - 1) / 2],
  itComp[itComp.length - 1]
);
console.log(itComp.join(" ").toUpperCase());
console.log(itComp.join(", ") + " are big IT companies.");
console.log(itComp.includes("Google"));
let result = itComp.indexOf("facebook");
result != -1
  ? console.log("facebook arraydedir")
  : console.log("facebook arrayda değildir");
console.log(itComp.sort());
console.log(itComp.reverse());
console.log(itComp);
console.log(itComp.slice(0, 3));
console.log(itComp);
console.log(itComp.slice(itComp.length - 3, itComp.length));
console.log(itComp.slice((itComp.length - 1) / 2, (itComp.length - 1) / 2 + 1));
console.log(itComp.shift());
console.log(itComp);
console.log(itComp.splice(Math.floor((itComp.length - 1) / 2), 1));
console.log(itComp);
console.log(itComp.pop());
console.log(itComp.splice(0, itComp.length));
console.log(itComp);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replaceAll(",", "").replaceAll(".", "").split(" ");
console.log(text);
console.log(text.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);
let honey = shoppingCart.indexOf("Honey")
console.log(honey)
shoppingCart.splice(honey,honey+1)

console.log(shoppingCart);
