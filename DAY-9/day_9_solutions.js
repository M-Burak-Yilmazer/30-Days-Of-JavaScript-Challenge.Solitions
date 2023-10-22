const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//3
countries.forEach((country) => console.log(country));

console.log("---------------------");
//4
names.forEach((names) => console.log(names));
console.log("---------------------------");
//5
numbers.forEach((numb) => console.log(numb));
console.log("-----------------------");
//6
const upperCountry = countries.map((c) => c.toUpperCase());
console.log(upperCountry);
console.log("======================");
//7
//Use map to create a new array by changing each number to square in the numbers array
const newArray = numbers.map((n) => n ** 2);
console.log(newArray);
//8
//Use map to change to each name to uppercase in the names array.
const upperWords = names.map((names) => names.toUpperCase());
console.log(upperWords);

//8Use map to map the products array to its corresponding prices
let arr1 = [];
let obj1 = {};
const word = products.map((product, index, arr) => product.price);
console.log(word);

//Use filter to filter out countries containing land.
console.log(
  countries.filter((country) => country.toLowerCase().includes("land"))
);
//12 Use filter to filter out countries having six character.
console.log(countries.filter((country) => country.length == 6));

//13 Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter((country) => country.length >= 6));

//14  Use filter to filter out country start with 'E';
console.log(countries.filter((country) => country[0] == "E"));

//15  Use filter to filter out only prices with values.
console.log(products.filter((b, i) => !(b.price == "") && !(b.price == " ")));

//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (array) => {
  let onlyStrings = array.filter((element) => typeof element == "string");
  return onlyStrings;
};
console.log(getStringLists([1, 2, 5, "jhfksdjhf", "adkşs"]));

// let ary = ["asjdl", "," , "asd",2,3,4]
// console.log(ary.filter((a,i,arr) => (typeof a == "string")))

//17  Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((acc, int) => acc + int, 0));

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatedCountries = countries.reduce((acc, int) => acc + ", " + int);
console.log(concatedCountries);

// Explain the difference between some and every
//* some için bir tane bile doğru varsa aranandan true döner
//! every için tüm elemanların doğru olması gerekir true dönebilmesi için

// Use some to check if some names' length greater than seven in names array
console.log(names.some((nam) => nam.length > 7));

// Use every to check if all the countries contain the word land
console.log(countries.every((c) => c.toLowerCase().includes("land")));
console.log(countries.some((c) => c.toLowerCase().includes("land")));

// Explain the difference between find and findIndex.
//* find aratığımız değer eğer dizi içinde varsa ilk bulunanı getirir,
//todo findIndex ise arattığımız değer dizi içinde varsa index değerini yoksa -1 döndürür.

// Use find to find the first country containing only six letters in the countries array
console.log(countries.find((co) => co.length == 6));

// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((co) => co.length == 6));

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((co) => co =="Norway"));
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((co) => co == "Russia"));
