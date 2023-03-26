// Task 2
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
document.querySelector('h1').classList.add('header');
const myDiv = document.querySelector('#myDiv');
myDiv.firstElementChild.style.fontWeight = 800;
myDiv.firstElementChild.nextElementSibling.style.color = 'red';
myDiv.firstElementChild.nextElementSibling.nextElementSibling.style.textDecoration = 'underline';
myDiv.lastElementChild.style.fontStyle = 'italic';

const myList = document.querySelector('#myList');
myList.style.listStyle = 'none';
myList.querySelectorAll('li').forEach((elem)=>{
  elem.style.display = 'inline-block';
});

document.querySelector('span').style.display = 'none';