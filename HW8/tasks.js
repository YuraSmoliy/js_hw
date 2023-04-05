// Task 1
// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 

function upperCase(text){
  const regExp = /^[A-Z]/;
  return "String's starts with uppercase character" ? regExp.test(text) : "String's not starts with uppercase character"
}

console.log(upperCase('regexp')); 
console.log(upperCase('RegExp')); 

// Task 2
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.

function checkEmailTask2(text){
  const regExp = /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
  return regExp.test(text);
}

console.log(checkEmailTask2("Qmail2@gmail.com"));

// Task 3
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const str = "Java Script";
const regex = /^(\w+)\s+(\w+)$/;
const result = str.replace(regex, "$2, $1");
console.log(result);

// Task 4
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999)

function validateCardNumber(cardNumber) {
  const regexCardNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
  return regexCardNumber.test(cardNumber);
}

console.log(validateCardNumber('9999-9999-9999-l999'))
console.log(validateCardNumber('9999-9999-9999-9999'))

// Task 5
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

function checkEmail(email) {
  const regexEmail = /^[a-zA-Z0-9]+[_-]?[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/;
  if (regexEmail.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}

console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

// Task 6
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).

function checkLogin(str){
  const reqexLogin = /^[a-zA-z]{1}([a-zA-Z]|\d+(?:\.\d+)?){1,9}$/;
  const reqexNums = /[-+]?\d*\.?\d+/g; 
  console.log(str.match(reqexNums));
  return reqexLogin.test(str);
}

console.log(checkLogin('ee1.1ret3'));
true 
//1.1, 3

console.log(checkLogin('ee1*1ret3'));
false 
//1, 1, 3