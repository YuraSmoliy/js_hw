// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (part1)
// Task 1
// Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  static getCircumferenceByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle(this.x, this.y, this.radius);
  }

  static createCircle(x, y, radius) {
    return new Circle(x, y, radius);
  }

  containsDot(x, y) {
    return (
      x >= this.x - this.radius &&
      x <= this.x + this.radius &&
      y >= this.y - this.radius &&
      y <= this.y + this.radius
    );
  }

  toString() {
    return `Circle at (${this.x}, ${this.y}) with radius ${
      this.radius
    } and circumference ${this.getCircumference()}`;
  }
}

const circle = new Circle(0, 0, 5);

// Отримання довжини кола
console.log(circle.getCircumference()); // 31.41592653589793

// Статичний метод для отримання довжини кола за заданим радіусом
console.log(Circle.getCircumferenceByRadius(5)); // 31.41592653589793

// Отримання копії об'єкту круга
const СircleCopy = circle.getCopy();
console.log(СircleCopy.toString());

// Створення об'єкту круга з заданими параметрами
const NewCircle = Circle.createCircle(10, 10, 7);
console.log(NewCircle.toString());

// Перевірка чи точка належить колу
console.log(circle.containsDot(4, 4)); // true
console.log(circle.containsDot(7, 0)); // false

// Перетворення об'єкту на рядок
console.log(circle.toString());

// Task 2.
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = {
//             course: "JS fundamental",
//             duration: 3,
//             direction: "web-development"
//         };
// propsCount(mentor);  // 3

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor));

// Task 3.
// -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи.
// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
// - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `name: ${this.name}, surname: ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return `${super.showFullName()}, midle name ${midleName}`;
  }

  showCourse() {
    return new Date().getFullYear() - this.year;
  }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (part2)
// Task 4.
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

class Marker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }
  print(text) {
    let str = [];
    while (text.length > 0 && this.inkAmount > 0) {
      str.push(text.slice(0, 1));
      if (text.slice(0, 1) !== " ") {
        this.inkAmount -= 0.5;
      }
      text = text.slice(1);
    }
    console.log("%c" + str.join(""), `color:${this.color}`);
  }
}

class MarkerWithRecharging extends Marker {
  constructor(color, inkAmount) {
    super(color, inkAmount);
  }
  recharge(ink) {
    this.inkAmount += ink;
  }
}

const text = `Selenium is the most widely used automation testing tool, which reduces human effort and efficiently handles testing the scenarios we encounter every day. One such scenario is how to get the text of an element in Selenium. Selenium offers a getText() method used to get the text of an element, i.e.; it can be used to read text values of an element from a web page. In this article, we will understand how to get the text of an element using the getText() method offered by Selenium WebDriver. We will understand how we can fetch text from a webpage that might be present in any of the web-element. We will learn various applications of the getText() method, and by the end of this article, you will be fully capable of validating the text or even reading and performing actions on text using Selenium WebDriver.`;

const marker = new Marker("red", 5);
const markerRecarge = new MarkerWithRecharging("blue", 5);
marker.print(text);
markerRecarge.print(text);
markerRecarge.recharge(3);
markerRecarge.print(text);

// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//         4) Вивести значення зарплати з новим experience.
//         5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value
//         6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

class Worker {
  static workers = [];
  #experience;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
    Worker.workers.push(this);
  }

  showSalary() {
    console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
  }

  showSalaryWithExperience() {
    console.log(
      `John Johnson salary with experience: ${
        this.dayRate * this.workingDays * this.#experience
      }`
    );
  }
  get showExp() {
    return this.#experience;
  }

  set setExp(experience) {
    this.#experience = experience;
  }
  static sortWorkers() {
    return Worker.workers.sort((worker1, worker2) => {
      return worker1.showExp - worker2.showExp;
    });
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("Experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 20, 22);
worker2.setExp = 2;
let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 2;
let worker4 = new Worker("Jonny Lee", 50, 20);

const workers = [worker1, worker2, worker3, worker4];

let biggestExperience = 0;
for (let key of workers) {
  if (biggestExperience < key.showExp) {
    biggestExperience = key.showExp;
  }
}
let workersWithBigestEperience = workers
  .filter((element) => {
    return element.showExp === biggestExperience;
  })
  .sort((a, b) => {
    return (
      a.dayRate * a.workingDays * a.experience -
      b.dayRate * b.workingDays * b.experience
    );
  });
for (key of workersWithBigestEperience) {
  console.log(
    `${key.fullName}: ${key.dayRate * key.workingDays * key.showExp}`
  );
}

console.log(Worker.sortWorkers());
