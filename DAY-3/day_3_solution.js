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
console.log("python".length != "jargon".length);
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
console.log("python".includes("on") && "dragon".includes("on"));
console.log(!(4 === "4"));
//* 7. Use the Date object to do the following activities
//*   1. What is the year today?
console.log(new Date().getFullYear());
//TODO:  2. What is the month today as a number?
console.log(new Date().getMonth() + 1);
//?    3. What is the date today?
console.log(new Date().getDate());

//*4 What is the day today as a number?
console.log(new Date().getDay());
//  ?  5. What is the hours now?
console.log(new Date().getHours());
//    6. What is the minutes now?
console.log(new Date().getMinutes());

//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());
console.log(new Date().getTime());

// TODO ### Exercises: Level 2

// ? 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = +prompt("enter base");
// let height = +prompt("enter height")
// let area = (.5*base*height)
// console.log(`the area of with ${base} and ${height} triangle is ${area}`)
// // ! 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let side_a = +prompt("enter side a");
// let side_b = +prompt("enter side b");
// let side_c=+prompt("enter a side c")
// let perimeter = side_c+side_b +side_a;
// console.log(`the perimeter of the triangle ${perimeter}`)

// let length=+prompt("enter length")
// let width = +prompt("enter width")
// const area_rectangle = (length*width)
// const perimeter_rectangle=2*(width+length)

// let radius_circle= +prompt("get a radius")
// let area_circle = Math.PI*radius_circle*radius_circle;
// let circumference_circle= 2*radius_circle*Math.PI

// let x = +prompt("enter a x-intercept");
// let y = 2 * x - 2;

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

// ! Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = +prompt("enter a x value");
// let y = x ** 2 + 6 * x + 9;
// console.log(`when x is ${x}, y equals ${y}.  `);

//?Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?


// let work_hours = +prompt("enter the hours ")
// let rate_per_hour = +prompt("enter rate per hour")
// let weekly_income =  work_hours * rate_per_hour
// console.log(` your weekly income is${weekly_income}`)

// * 10.If the length of your name is greater than 7 say, your name is long else say your name is short.

// let yourName = prompt("enter your first name");
// if (yourName.length >7){console.log("your name is long")}else { "your name is short"}



// todo Compare your first name length and your family name length and you should get this output.

