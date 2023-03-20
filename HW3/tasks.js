// task 1
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
const arrTask1 = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
  return arr.filter((elem, index) => {
      return index == arr.indexOf(elem);
    });
}

const arr2 = compact(arrTask1);
console.log(arr2); // [5,3,4,6,7]

// task 2
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

let arrTask2 = createArray(2, 9);

function createArray(start, end) {
  const arr = [];
  for (j = start; j <= end; j++) {
    arr.push(j)
  }
  return arr;
}

console.log(arrTask2); // [2,3,4,5,6,7,8,9]

// task 3
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
function showIntegersInRange(a, b) {
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= i; j++) {
      console.log(i);
    }
  }
}
showIntegersInRange(0, 9);

// task 4
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

function randArray(k) {
  const arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}
console.log(randArray(5));

// task 5
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)

let arrTask5 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function funcName(arr) {
  let newArr = arr.flat();
  let arrNumbers = newArr.filter((elem) => {
    return typeof elem === 'number';
  });
  let arrStrings = newArr.filter((elem) => {
    return typeof elem === 'string';
  });
  return [arrNumbers, arrStrings]
}

let arrNew = funcName(arrTask5);
console.log(arrNew);

// task 6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
function calc(a, b, op){
  switch(op){
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log('3 - 2 = ', calc(3,2,1));
console.log('3 * 2 = ', calc(3,2,2));
console.log('4 / 2 = ', calc(4,2,3));
console.log('3 + 2 = ', calc(3,2,4));

// task 7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

function findUnique(arr){
  for(el of arr){
    if(arr.indexOf(el) !== arr.lastIndexOf(el)){
      return false;
    }
  }
  return true
} 
console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

// task 8
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.

function create(argument1){
  let arg = argument1;
  return (argument2)=>{
    return (argument2 === arg)
  }
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom")); //повертає true 
console.log(tom("pass_for_tom")); //повертає false