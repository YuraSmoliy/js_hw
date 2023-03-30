// Task 4
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

const options = document.querySelectorAll('option')

document.querySelector('.delete').addEventListener('click',()=>{
  let value = document.querySelector('#mylist').value;
  options.forEach(el=>{
    if(el.value === value){
      el.remove();
    }
  })
})

// Task 5
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

const liveButton = document.querySelector('.task5');
const contentContainer = document.querySelector('.content');

liveButton.addEventListener('click',()=>{
  addElementWithContent('I was pressed!');
})

liveButton.addEventListener('mouseover',()=>{
  addElementWithContent('Mouse on me!')
})

liveButton.addEventListener('mouseout',()=>{
  addElementWithContent('Mouse is not on me!')
})

function addElementWithContent(text){
let newEl = document.createElement('p');
newEl.innerText = text;
contentContainer.appendChild(newEl);
}

// Task 6
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.

const sizeElement = document.querySelector('.size');
sizeElement.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
window.addEventListener('resize', ()=>{
  sizeElement.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});

// Task 7
// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
                    
// <select name="cities" id="cities"></select>
// <p></p>

const countryAndCityList = {
  "ukraine": ["Kyiv", "Lviv", "Odesa", "Kharkiv"],
  "usa": ["New York", "Los Angeles", "Chicago", "Houston"],
  "germany": ["Berlin", "Hamburg", "Munich", "Cologne"]
};

const currentCountryElement = document.querySelector('#countries')
const selectedCountryBlock = document.querySelector("#selected-country");
const selectedCityBlock = document.querySelector("#selected-city");
const citySelect = document.querySelector("#cities");

function setCities(country){
  const cityList = countryAndCityList[country];
  cityList.unshift('----')
  citySelect.innerHTML = '';
  for (let i = 0; cityList && i < cityList.length; i++) {
    let option = document.createElement("option");
    option.text = cityList[i];
    option.value = cityList[i];
    citySelect.add(option);
  }
}

currentCountryElement.addEventListener('change', ()=>{
  if(currentCountryElement.value){
    setCities(currentCountryElement.value);
    selectedCountryBlock.innerText = currentCountryElement.value;
    selectedCityBlock.innerText = "";
  }else{
    selectedCountryBlock.innerText = '';
    selectedCityBlock.innerText = "";
    citySelect.innerHTML = '';
  }
})

citySelect.addEventListener('change', ()=>{
  selectedCityBlock.innerText = citySelect.value;
})