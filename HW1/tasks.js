// task 2
console.log('Smolii');

// task 3
let variable1 = 1;
let variable2 = 2;
document.querySelector('.task3').innerText=`Variable 1 is ${variable1}, variable 2 is ${variable2}`;
console.log(variable2, variable1);
[variable1, variable2] = [variable2, variable1];
document.querySelector('.task3_after_swap').innerText=`Variable 1 is ${variable1}, variable 2 is ${variable2}`;

// task 4 
const variables = {
  'String': 'String', 
  'Number': 1, 
  'Boolean': true, 
  'Undefined': undefined, 
  'Null': null
}

// task 5 
const isAdult = confirm('Are you 18?');
console.log('is adult ', isAdult);

// task 6
const userName = 'Yurii';
const secondName = 'Smolii';
const group = 749;
const birthday = '11.09';
const marriage = false;

typeof userName;
typeof secondName;
typeof group;
typeof birthday;
typeof marriage;

console.log(group, marriage, userName, secondName, birthday);

const pets = undefined;
const sport = null;

console.log(pets, sport);

// task 7 
const login = prompt('Login');
const email = prompt('email');
const password = prompt('password');
console.log(`Dear ${login}, your email is ${email}, your password is ${password}`)

// task 8
const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMounth = secondsInDay * 30;
document.querySelector('.task8').innerText=`seconds in minute ${secondsInMinute}, seconds in hour ${secondsInHour}, seconds in day ${secondsInDay}, seconds in mounth ${secondsInMounth}`;

// task 9
const seat = Number(prompt('Enter your seat, pls')); 
let stateroom = null;
let upperBed = false;
let vagon = Math.ceil(seat / 54); 

if(seat <= 36 * vagon){
  stateroom = Math.ceil(seat / 4);
}
else if(seat <= 54 * vagon){
  stateroom = 10 - Math.ceil((seat - 36 * vagon) / 2);
};

if(seat % 2 == 0){
  upperBed = true;
};

alert(`Hi your stateroom in ${stateroom} and you have ${upperBed ? 'upper bed' : 'bottom bed'}`);