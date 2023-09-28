console.log("========================Exercises 1============================");
let variables = [
  firstName,
  lastName,
  sureName,
  userName,
  age,
  isMuslim,
  doesHatesToCode,
  sampleArray,
  person,
];

variables.forEach((variable) => {
  console.log(typeof variable);
});
const person = {
  // Object
  firstName: "mathias",
  lastName: "burger",
  userName: "0xmathiasburger",
};

let firstName = "mathias",
  lastName = "burger",
  sureName = null, // Once again
  userName, // declaring every
  age = 18, // variables in a single line
  isMuslim = true, // add a comma
  doesHatesToCode = false,
  sampleArray = [0, 1, 2, 3, 4, 5];
