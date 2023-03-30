// Task 1
// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 

function upperCase(text){
  let regExp = /^[A-Z]/;
  return "String's starts with uppercase character" ? regExp.test(text) : "String's not starts with uppercase character"
}

console.log(upperCase('regexp')); 
console.log(upperCase('RegExp')); 

// Task 2
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.