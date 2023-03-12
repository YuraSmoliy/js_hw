// task 1
const a = 1;
const b = 50;
const c = 1000;

console.log('a < b < c - ', (a < b < c));

// task 2
let x = 1;
let y = 2;

let res1 = x + '' + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (y + x) / 'a' // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// task 3
const isAdult = Number(prompt('How old are you?'));
console.log(`${isAdult >= 18 ? 'You are adult!' : 'You are too young!'}`);

// task 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let count = {};
let data;
arr.forEach(
  (el)=>{
    if(!count.hasOwnProperty(el)){
      count [el] = 1;
    }
    else {
      count [el] += 1;
    }
  }
)
let maxIncluded = Math.max(...Object.values(count ))
for(key in count ){
  if(count [key] === maxIncluded) data = key;
}

arr = arr.filter((elem)=>{
return elem!=5;
});

console.log(arr) // [4, 2, 1, 6, 3, 2]

// task 5
const side_a = +prompt('enter side of a triangle "a"');
const side_b = +prompt('enter side of a triangle "b"');
const side_c = +prompt('enter side of a triangle "c"');
if (isNaN(side_a) || isNaN(side_b) || isNaN(side_c) || side_a <= 0 || side_b <= 0 || side_c <= 0) console.log("Incorrect data");
else{
  let halfPerimeter = (side_a + side_b + side_c) / 2;
  let triangleArea = Math.sqrt(halfPerimeter * (halfPerimeter - side_a) * (halfPerimeter - side_b) * (halfPerimeter - side_c));
  console.log(`Area of the triangle: ${triangleArea}`);

  if (side_a ** 2 + side_b ** 2 === side_c ** 2 || side_b ** 2 + side_c ** 2 === side_a ** 2 || side_a ** 2 + side_c ** 2 === side_b ** 2) {
    console.log("A right triangle");
  } else {
    console.log("Not a right triangle");
  }
}

// task 6
const courentHour = (new Date()).getHours();
if(courentHour > 5 && courentHour < 11) console.log("Доброго ранку")
else if(courentHour >= 11 && courentHour < 17) console.log("Доброго дня")
else if(courentHour >= 17 && courentHour < 23) console.log("Доброго вечора")
else console.log("Доброї ночі")

// task 6.2
const courentHour2 = (new Date()).getHours();
switch(true){
  case courentHour2 > 5 && courentHour2 < 11:
    console.log("Доброго ранку");
    break;
  case courentHour2 >= 11  && courentHour2 < 17:
    console.log("Доброго дня");
    break;
  case (courentHour2 >= 17 && courentHour2 < 23):
    console.log("Доброго вечора");
    break
  default:
    console.log("Доброї ночі");
}

// task 7
const INCOME_PER_100_LINES = 50;
const PENALTY_PER_DELAY = 20;
const promptText = `
Please choose calculation:
1. Calculate the number of lines Vasya needs to write to achieve the desired income, considering penalties
2. Calculate how many times Vasya can be late given a certain number of lines of code and desired income
3. Calculate Vasya's income based on the number of lines of code and delays
`;
const calculation = prompt(promptText);
if (calculation === "1") {
  // Calculate the number of lines Vasya needs to write to achieve the desired income, considering penalties
  let desiredIncome = parseInt(prompt("Please enter your desired income:"));
  let delays = parseInt(prompt("Please enter the number of delays:"));
  let penaltyCount = Math.floor(delays / 3) * PENALTY_PER_DELAY;
  let countLines = ((desiredIncome + penaltyCount) / INCOME_PER_100_LINES) * 100;
  alert(`You need to write ${countLines} lines of code.`);
} else if (calculation === "2") {
  // Calculate how many times Vasya can be late given a certain number of lines of code and desired income
  const lines = parseInt(
    prompt("Please enter the number of lines of code you wrote:")
  );
  let income = parseInt(prompt("Please enter your desired income:"));
  let countLineAmount = (lines / 100) * INCOME_PER_100_LINES;
  let countLateness = ((countLineAmount - income) / PENALTY_PER_DELAY) * 3;
  alert(`You can be late up to ${countLateness} times.`);
} else if (calculation === "3") {
  // Calculate Vasya's income based on the number of lines of code and delays
  const lines = parseInt(
    prompt("Please enter the number of lines of code you wrote:")
  );
  let delays = parseInt(prompt("Please enter the number of delays:"));
  let amount = (lines / 100) * INCOME_PER_100_LINES - Math.floor(delays / 3) * PENALTY_PER_DELAY;
  alert(`Your income: ${amount}`);
}
