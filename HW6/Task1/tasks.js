// 6. DOCUMENT OBJECT MODEL (DOM)
// Task 1
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const list = document.querySelector("#list");
const firstElement = list.firstElementChild;
const lastElement = list.lastElementChild;
const secondElement = firstElement.nextElementSibling;
const fourthElement = lastElement.previousElementSibling;
const thirdElement = fourthElement.previousElementSibling;
const listOfElementsContent = [
  firstElement.innerText,
  lastElement.innerText,
  secondElement.innerText,
  fourthElement.innerText,
  thirdElement.innerText,
];
alert(listOfElementsContent.toString());
