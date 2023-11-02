// const inputNumber = document.querySelector("#generator");
const numberInputValue = document.getElementById("generator");

const button = document.querySelector("#btn");
const result = document.querySelector("#result");
console.log(numberInputValue);
span = document.createElement("div");

// numberInputValue.addEventListener("change", (e) => {
//   let numbersArray = [];
//   let inputNumber = e.target.value;

//   for (let i = 0; i < inputNumber; i++) {
//     numbersArray.push(i);
//   }
//   let span;
//   for (let i = 0; i < numbersArray.length; i++) {
//     span = document.createElement("div");
//     span.innerHTML = `${numbersArray[i]}`;
//     span.style.width = "40px";
//     span.style.height = "40px";
//     span.style.margin = "2px";
//     span.style.color = "black";
//     span.className = "span";
//     if (!(numbersArray[i] % 2)) {
//       span.style.backgroundColor = "yellow";
//     } else {
//       span.style.backgroundColor = "red";
//     }

//     for (let k = 2; k < numbersArray[i]; k++) {
//       if (numbersArray[i] % k != 0) {
//         span.style.backgroundColor = "green";
//       }
//     }

//     result.appendChild(span);
//   }
// });

button.addEventListener("click", (e) => {
  let numbersArray = [];
  let inputNumber = numberInputValue.value;

  for (let i = 0; i < inputNumber; i++) {
    numbersArray.push(i);
  }
  let span;
  for (let i = 0; i < numbersArray.length; i++) {
    span = document.createElement("div");
    span.innerHTML = `${numbersArray[i]}`;
    span.style.width = "40px";
    span.style.height = "40px";
    span.style.margin = "1px";
    span.style.color = "white";
    span.className = "span";
    if (!(numbersArray[i] % 2)) {
      span.style.backgroundColor = "#F2BF27";
    } else {
      span.style.backgroundColor = "#F21616";
    }

    let isPrime = true;
    for (let k = 2; k < numbersArray[i]; k++) {
      if (numbersArray[i] % k == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && numbersArray[i] > 1) {
      span.style.backgroundColor = "#6524BF";
    }

    result.appendChild(span);
    numberInputValue.value = "";
    numberInputValue.focus();
  }
});

numberInputValue.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    button.click();
  }
});

numberInputValue.onclick = function () {
  numberInputValue.value = "";
  result.innerHTML = "";
};

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
