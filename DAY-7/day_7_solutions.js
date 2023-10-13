function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4];
console.log(sumArrayValues(numbers));

function sumAllNums() {
  console.log(arguments);
}
sumAllNums(1, 2, "t", 5);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}console.log(sumAll(1, 4, 6, 8, 9));

const sumall = (...args)=>{
    console.log(args)
}
sumall(1,3,4,5)

const topla = (...args) => {
    let sum = 0;
    for (const element of args){
        sum += element
    }return sum
}
console.log(topla(1, 5, 7, 3, 4, 7));

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
anonymousFun();

(function (n) {
  console.log(n * n);
})(6);
const functionName = (math = "value") => {
    console.log(math)
  //codes
};

// Calling function
functionName();
functionName("arg");