/* -------------------------------------------------------------------------- */
/*                               Day 4 Solutions                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             Exercises: Level 1                             */
/* -------------------------------------------------------------------------- */

// let age = Number(prompt("Enter your age "));

// if (age>=18){
//     console.log( "You are old enough to drive.")
// }else{
//     console.log(`You are left with ${18-age} years to drive.`)
// }
console.log("2-");
let myAge = 30;
let yourAge = 25;

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}

console.log("3-");
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}.`);
} else {
  console.log(`${b} is greater than ${a}`);
}
let c = 6;
let d = 8;
let result;
result = c > d ? `${c} is greater than ${d}` : `${d} is greater than ${c}`;
console.log(result);

console.log("4-check the number even or odd");
let oddNumber = 8;
oddNumber % 2
  ? console.log(`${oddNumber} is an odd number. `)
  : console.log(`${oddNumber} is an even number.`);
/* -------------------------------------------------------------------------- */
/*                              Exercise: Level 2                             */
/* -------------------------------------------------------------------------- */
console.log("-1-");
let not = 85;
let deger;
switch (true) {
  case not <= 100 && not >= 80:
    deger = "AA";
    break;
  case not <= 79 && not >= 70:
    deger = "BB";
    break;
  case not <= 69 && not >= 60:
    deger = "CC";
    break;
  case not <= 59 && not >= 50:
    deger = "DD";
    break;
  case not <= 49 && not >= 0:
    deger = "FF";
    break;
}
console.log(deger);

console.log("-2-");

let month = "December";
let season;
switch (month) {
  case "September":
  case "October":
  case "November":
    season = "Autumn";
    break;
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;

  default:
    console.log("Please enter a valid value ");
    break;
}
console.log(season);

// let weekDay = prompt(" What is the day  today?").toLocaleLowerCase();
// let situation;

// switch (weekDay) {
//   case "tuesday":
//   case "monday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     situation = "working day";
//     break;
//   case "saturday":
//   case "sunday":
//     situation = "weekend";
//     break;
//   default:
//     situation = "NaN";
//     break;
// }

// weekDay = weekDay.charAt(0).toLocaleUpperCase() + weekDay.slice(1);
// console.log(weekDay);
// console.log(
//   `What is the day  today?: ${weekDay}\n${weekDay} is a ${situation}`
// );
// /* -------------------------------------------------------------------------- */
/*                                 Exercise 3                                 */
/* -------------------------------------------------------------------------- */
let isleapYear = 2015;
let newMonth = "January".toLowerCase();
newMonth = newMonth.charAt(0).toUpperCase() + newMonth.slice(1);
if (
  ((!(isleapYear % 4) && isleapYear % 100) || !(isleapYear && 400)) &&
  newMonth == "February"
) {
  console.log(` ${newMonth} has 29 days at ${isleapYear} year.`);
} else {
  switch (newMonth) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(` ${newMonth} has 31 days at ${isleapYear}.`);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(` ${newMonth} has 30 days at ${isleapYear}.`);
      break;
    case "February":
      console.log(` ${newMonth} has 28 days at ${isleapYear}.`);
      break;

    default:
      console.log("Enter a valid month value");
  }
}
