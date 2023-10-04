console.log("==============DAY-3-EXERCISES===================");
console.log("========================level-1=================");
//!1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "mathias";
const lastName = "burger";
const country = "turkey";
const city = "kayseri";
const age = 33;
let isMarried = true;
let year = 2023;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);
//! 2. Check if type of '10' is equal to 10
console.log("10" == 10);
//!3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);
//!  4.  Boolean value is either true or false.
//! 1. Write three JavaScript statement which provide truthy value.
console.log(null == undefined);
console.log("3" == 3);
console.log(0 == " ");
//! 2. Write three JavaScript statement which provide falsy value.
console.log(NaN == NaN);
console.log(null == "");
console.log(5 === "5");

//*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 === "4"); // false
//    12. Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length != "jargon".length)
 //* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//!   1. 4 > 3 && 10 < 12 // true
// !   2. 4 > 3 && 10 > 12 //false
//  *  3. 4 > 3 || 10 < 12  // true
//   * 4. 4 > 3 || 10 > 12 // true
//  *  5. !(4 > 3)  // false
//  *  6. !(4 < 3) // true 
//  *  7. !(false) // true
//  *  8. !(4 > 3 && 10 < 12) // false
//  *  9. !(4 > 3 && 10 > 12) //  true
//  *  10. !(4 === '4')  // true
//  *  11. There is no 'on' in both dragon and python
console.log("python".includes("on") && "dragon" .includes("on"))
console.log(!(4 === "4"));
//* 7. Use the Date object to do the following activities
//*   1. What is the year today?
console.log(new Date().getFullYear())
//TODO:  2. What is the month today as a number?
console.log(new Date().getMonth() + 1 )
//?    3. What is the date today?
console.log(new Date().getDay())

