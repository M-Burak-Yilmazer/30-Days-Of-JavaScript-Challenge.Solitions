// const inputNumber = document.querySelector("#generator");
const numberInputValue = document.getElementById("inputId");
console.log(numberInputValue.value);



const button = document.querySelector("#btn");
const result = document.querySelector("#result");


numberInputValue.addEventListener("change", (e) => {
  let numbersArray = [];
let inputNumber = e.target.value

  for (let i = 0; i < inputNumber; i++) {
    numbersArray.push(i);
  }
  console.log(numbersArray);
});

// let numbersArray = [];
// for (let i = 0; i < inputNumber; i++) {
//   numbersArray.push(i);
// }
// console.log(numbersArray);

// const generateNumbers = (value) => {
//   let numbersArray = [];

//   for (let i = 0; i < value; i++) {
//     numbersArray.push(i);
//   }
// };

// let number = [1, 2, 3, 4, 5];
// let span;
// for (let i = 0; i < number.length; i++) {
//   span = document.createElement("div");
//   span.innerHTML = `${number[i]}`;
//   span.style.width = "40px";
//   span.style.height = "40px";
//   span.style.margin = "10px";
//   span.className = "span";
//   span.style.backgroundColor = "yellow";
// //   span.style.display = "inline-block";
//   document.body.appendChild(span);
// }
