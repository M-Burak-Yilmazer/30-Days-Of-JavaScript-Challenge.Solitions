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
let honey = shoppingCart.indexOf("Honey");
console.log(honey);
shoppingCart.splice(honey, 1);

console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

console.log(countries.includes("Ethiopia"));

countries.includes("Ethiopia")
  ? console.log(countries[countries.indexOf("Ethiopia")].toUpperCase())
  : countries.push("Ethiopia");
console.log(countries);

//5
console.log(webTechs.includes("Sass"));
webTechs.includes("Sass")
  ? console.log("Sass is a CSS processor")
  : webTechs.push("Sass");
console.log(webTechs);
//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log("fullstack", fullStack);

console.log("-------------------exercise3------------------------");
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
console.log(ages);
let mid_age = [];
if (ages.length % 2 == 0) {
  mid_age.push(ages[ages.length / 2 - 1]);
  mid_age.push(ages[ages.length / 2]);
}
console.log(mid_age);
let middleItem = mid_age.reduce((a, c) => a + c, 0) / 2;
console.log(middleItem);

let averageItem = Math.round(ages.reduce((a, c) => a + c, 0) / ages.length);
console.log(averageItem);

const rangeAges = ages[ages.length - 1] - ages[0];
console.log(rangeAges);

console.log(Math.abs(ages[0] - averageItem)); //min - average
console.log(Math.abs(ages[ages.length - 1] - averageItem)); // max-average

//1.1
const countriesNew = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const newTen = countriesNew.slice(0, 10);
console.log(newTen);
let middleCountry = [];
if (countriesNew.length % 2) {
  middleCountry.push(countriesNew[Math.floor(countriesNew.length / 2)]);
} else {
  middleCountry.push(countriesNew[Math.floor(countriesNew.length / 2) - 1]);
  middleCountry.push(countriesNew[Math.floor(countriesNew.length / 2)]);
}
console.log(countriesNew.indexOf("Lesotho"));

console.log(middleCountry);

//last question
let halfCountry = [];

if (countriesNew.length % 2) {
  halfCountry = countriesNew.splice(0, Math.round(countriesNew.length / 2));
} else {
  halfCountry = countriesNew.splice(0, Math.round(countriesNew.length / 2));
}
console.log(countriesNew.length);
console.log(halfCountry.length);
