//1
let fulname = "Muhittin burak yılmazer";
let fullName = (name) => console.log(name);
fullName(fulname);

let fName = "Burak";
let sName = "Yilmazer";
fullName = (name, lastname) => {
  console.log(`Adı: "${name}", soyadı: "${lastname}"`);
};
fullName(fName, sName);

//3
let x = 7;
let y = 12;
// const addNumbers = (a,b) => a+b
const addNumbers = (a, b) => {
  let sum = 0;
  sum = a + b;
  return sum;
};
console.log(addNumbers(12, 45));

//4
let areaOfRectangle = (len, wid) => len * wid;
let length = 12;
let width = 24;
let area = areaOfRectangle(length, width);
console.log(area);

//5
const perimeterOfRectangle = (len, wid) => (len + wid) * 2;
let perimeter = perimeterOfRectangle(length, width);
console.log(perimeter);

//6
let height = 10;
let volumeOfRectPrism = (len, wid, hgt) => len * wid * hgt;
let volume = volumeOfRectPrism(length, width, height);
console.log(volume);

//7
let areaOfCircle = (pi, r) => pi * r * r;
let radius = 8;
let areaCircle = areaOfCircle(Math.PI, radius);
console.log(areaCircle);

//8let
let circumOfCircle = (pi, r) => 2 * pi * r;
let circumference = Math.floor(circumOfCircle(Math.PI, radius));
console.log(circumference);

//9
let denstiy = (mass, volume) => mass / volume;
let massC = 120;
let volumeC = 80;
let den = denstiy(massC, volumeC);
console.log(den);

//10
let calSpeed = (totalDis, totalTime) => totalDis / totalTime;

//11
let weightOfMatter = (mass, gravity) => mass * gravity;

//13
let bodyMass = (weight, height) => {
  let Bmi = weight / (height * height);
  let deger =
    Bmi > 30
      ? "Obese"
      : Bmi > 25
      ? "Overweight"
      : Bmi > 18.6
      ? "Normal weight"
      : "Underweight";

  return deger;
};

let kilo = 107;
let boy = 1.78;
console.log(bodyMass(kilo, boy));
