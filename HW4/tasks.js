// task 1
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second){
  if(typeof first !=='number' || typeof second !== 'number'){
    throw new TypeError('Arguments are not numbers')
  }
  if(first > arr.length || second > arr.length){
    throw new RangeError('Arguments are out of the array range')
  }
  return arr[first] + arr[second];
}

const arr1Task1 = [2, 3, 4, 5, 1, 9, 11, 5]; 

try{
  console.log(`sum ${1} and ${5} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, 1, 5));
  console.log(`sum ${'1'} and ${3} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, '1', 9));
  console.log(`sum ${9} and ${3} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, 9, 3));
}catch (e){
  if(e.name === "TypeError") {
    console.log(e.name, " ", e.message);
  }
  if(e.name === "RangeError") {
    console.log(e.name, " ", e.message);
  }
}

// task 2
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge(){
  const role = ['admin', 'moderator', 'user'];
  const userName = prompt('Enter your name');
  const userAge = +prompt('Enter your age');
  const userRole = prompt('Enter your role');

  try{
    if(!userName || !userAge || !userRole){
      throw new Error('The field is empty! Please enter your age')
    }
    if(!role.includes(userRole)){
      throw new EvalError('Incorrect role')
    }
    if(typeof userAge !== 'number'){
      throw new TypeError('Entered age is not a number')
    }
    if(userAge < 18 || userAge > 70){
      throw new RangeError('We don\'t recommend you watch the movie.')
    }

  }catch (ex){
    alert(`${ex.name}: ${ex.message}`)
    return
  }
  alert('You have access to watching film')
}

checkAge();

// task 3
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height){
  if(typeof width !== 'number' || typeof height !== 'number'){
    throw new TypeError('Parameters are not valid')
  }
  return width * height;
}

  try{
    console.log(`Rectangle (width = ${6}, height = ${8}) area = `,calcRectangleArea(6, 8));
    console.log(`Rectangle (width = ${'6'}, height = ${5}) area = `,calcRectangleArea('6', 5));
  }catch (e){
    console.log(e.name, e.message);
  }

// task 4
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException extends Error{
  constructor(message){
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month){
  if(typeof month != 'number' || month < 1 || month > 12){
    throw new MonthException('Incorrect month number')
  }
  const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthsNames[month-1];
}

try{
  console.log(showMonthName(5));
  console.log(showMonthName(14));
}catch (exeption){
  console.log(exeption.name,' ', exeption.message);
}

// task 5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id){
  if(id < 0){
    throw new Error('ID must not be negative')
  }
  return {id}
}

function showUsers(ids){
  return ids.map((element)=>{
    try{
      return showUser(element)
    }catch(exeption){
      console.log(exeption.name, ': ', exeption.message, ': ', element);
    }
  }).filter((elem)=>{
    return elem;
  });
}
console.log(showUsers([7, -12, 44, 22])); 