let arr1 = [100, 4, 200, 1, 3, 2];
let arr2 = [5, 7, 10, 2,3, 6];
let sorti = [];

const consective = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);

  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] - sorted[i + 1] == -1) {
      if (!sorti.includes(sorted[i]) ) {
        sorti.push(sorted[i]);
        sorti.push(sorted[i + 1]);
      }
    }
  }
  return sorti;
};
console.log(consective(arr2));
