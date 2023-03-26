// Task 6
 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const sizeСoefficient = {
  '36-40':1,
  '41-44':1.1,
  '44-47':1.2,
};

const shippingСoefficient = {
  'Nova Poshta':1,
  'Meest':1.1,
  'UkrPoshta':1.2,
};

const colors = {
  "red": 200,
  "blue": 300,
  "green": 170,
  "orange": 160,
  "black": 189,
}

let currentColorsPrise = colors["blue"];
let currentShippingСoefficient = shippingСoefficient["Nova Poshta"];
let currentSizeСoefficient = sizeСoefficient["36-40"];
updateProductPrice();

const colorOptions = document.querySelectorAll(".color");
colorOptions[0].classList.add('active');
const listSizes = document.querySelectorAll('.size-elem');
listSizes[0].classList.add('elem-active');
const listShippings = document.querySelectorAll('.shipping-elem');
listShippings[0].classList.add('elem-active');

colorOptions.forEach(option => {
  option.addEventListener("click", () => {
    const color = option.getAttribute('color');
    currentColorsPrise = colors[color];
    updateProductPrice();
    colorSelect(option);
  });
});

listSizes.forEach(option => {
  option.addEventListener("click", () => {
    const size = option.innerText;
    currentSizeСoefficient = sizeСoefficient[size];
    updateProductPrice();
    sizeSelect(option);
  });
});

listShippings.forEach(option => {
  option.addEventListener("click", () => {
    const shipping = option.innerText;
    currentShippingСoefficient = shippingСoefficient[shipping];
    updateProductPrice();
    shippingSelect(option);
  });
});

function updateProductPrice(price) {
  const priceElement = document.querySelector("#outprice");
  priceElement.innerText = `$${(currentColorsPrise * currentShippingСoefficient * currentSizeСoefficient).toFixed(2)}`;
}

function colorSelect(elem){
  colorOptions.forEach((element)=>{
    element.classList.remove('active');
  })
  elem.classList.add('active');
}

function sizeSelect(elem){
  listSizes.forEach((element)=>{
    element.classList.remove('elem-active');
  })
  elem.classList.add('elem-active');
}

function shippingSelect(elem){
  listShippings.forEach((element)=>{
    element.classList.remove('elem-active');
  })
  elem.classList.add('elem-active');
}


