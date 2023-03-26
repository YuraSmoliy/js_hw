// Task 4
// https://codepen.io/Yura-Smoliy/pen/abaXbZW

document.querySelector('.btn').addEventListener('click',()=>{
  const userName = document.querySelector("[name='fio']").value;
  const userPhone = document.querySelector("[name='phone']").value;
  const userBirthday = document.querySelector("[name='birthday']").value;
  const userEmail = document.querySelector("[name='email']").value;
  const userData = `
  User name: ${userName},
  phone: ${userPhone},
  birthday: ${userBirthday},
  email: ${userEmail},
  `;
  document.querySelector('.out').innerText = userData;
})


// Task 5
// https://codepen.io/Yura-Smoliy/pen/JjaxjqZ?editors=1111

const circleElem = document.querySelectorAll('.circle');
for(elem of circleElem){
  elem.classList.add(elem.getAttribute('data-anim'));
}

// Task 6
// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colorsElements = document.querySelectorAll('.color');
let priceElement = document.querySelector('#outprice');
priceElement.innerText = 170;

const blueElement = colorsElements[0];
const redElement = colorsElements[1];
const greenElement = colorsElements[2];
const orangeElement = colorsElements[3];
const blackElement = colorsElements[4];

blueElement.addEventListener('click', ()=>{
  document.querySelector('.active').classList.remove('active');
  blueElement.classList.add('active');
  priceElement.innerText = 170;
})
redElement.addEventListener('click', ()=>{
  document.querySelector('.active').classList.remove('active');
  redElement.classList.add('active');
  priceElement.innerText = 570;
})
greenElement.addEventListener('click', ()=>{
  document.querySelector('.active').classList.remove('active');
  greenElement.classList.add('active');
  priceElement.innerText = 190;
})
orangeElement.addEventListener('click', ()=>{
  document.querySelector('.active').classList.remove('active');
  orangeElement.classList.add('active');
  priceElement.innerText = 270;
})
blackElement.addEventListener('click', ()=>{
  document.querySelector('.active').classList.remove('active');
  blackElement.classList.add('active');
  priceElement.innerText = 110;
})