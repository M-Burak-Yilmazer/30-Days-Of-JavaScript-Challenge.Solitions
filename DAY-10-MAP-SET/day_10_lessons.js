// const newSet = new Set();
// console.log(newSet);
// const newArr = [1, 2, 1, 3, 4];
// const newSet1 = new Set(newArr);
// console.log(newSet1);

// newSet1.add(5);
// console.log(newSet1);
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set();

// const langSet = new Set(languages);
// // console.log(langSet);
// // for (let lang of langSet) {
// //   console.log(lang, "i");
// // }
// console.log(langSet.size);
// let skills = new Set();
// console.log(skills.size);
// skills.add("Html");
// skills.add("Css");
// skills.add("Java-Script");
// skills.add("Bootstrap");
// skills.add("Scss");
// console.log(skills);

for (let lang of languages) {
  langSet.add(lang);
}
// console.log(langSet);
// langSet.delete("Finnish");
// console.log(langSet)
// console.log(langSet.has("Finnish"))
// console.log(langSet.has("English"));
// langSet.clear()
console.log(langSet);
let counts = [];
for (lang of langSet) {
  let filtered = languages.filter((item) => item == lang);
  counts.push({ language: lang, count: filtered.length });
}
console.log(counts);
const result = [];
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
numbers.sort((a, b) => a - b);
const numberSet = new Set(numbers);
console.log(numberSet);
for (let numb of numberSet) {
  const filtered = numbers.filter((item) => item == numb);
  result.push({ number: numb, count: filtered.length });
}
console.log(result);
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
b = new Set(b);
// let c = [...a, ...b]
// c= new Set(c)
// console.log(c)

let insersect = a.filter((item) => !b.has(item));
console.log(insersect);

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
let newcount = new Map(countries);
console.log(newcount)

newcount[1] = 45;
console.log(newcount)
;
newcount.set(1,60)
newcount.set("1", 60);
console.log(newcount[1])
console.log(newcount.get(1))
console.log(newcount)

for(let item of newcount){
    console.log(item)
}
for( let [contry, capital] of newcount){
    console.log(`${contry} has capital ${capital}`)
}