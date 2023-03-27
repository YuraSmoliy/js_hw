// Task 6
 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

let colorPrise = Number(document.querySelector('.color.active').getAttribute('data-price'));
let sizePrise = Number(document.querySelector('.size-elem.elem-active').getAttribute('data-price'));;
let shippingPrise = Number(document.querySelector('.shipping-elem.elem-active').getAttribute('data-price'));;

const colorsContainer = document.querySelector('.colors');
const sizeContainer = document.querySelector('.size-elems');
const shippingContainer = document.querySelector('.shipping-elems');
updateProductPrice();

colorsContainer.addEventListener('click',(event)=>{
  if(event.target.getAttribute('class') === 'color'){
    colorPrise = Number(event.target.getAttribute('data-price'));
    sportsImg = document.querySelectorAll('.shoe')
    let color = event.target.getAttribute('color');
    sportsImg.forEach(element => {
      if(element.getAttribute('color')===color){
        document.querySelector('.shoe.show').classList.remove('show');
        element.classList.add('show');
      }
    });
    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
    updateProductPrice();
  }

})

sizeContainer.addEventListener('click',(event)=>{
  sizePrise = Number(event.target.getAttribute('data-price'));
  document.querySelector('.size-elem.elem-active').classList.remove('elem-active');
  event.target.classList.add('elem-active');
  updateProductPrice();
})

shippingContainer.addEventListener('click',(event)=>{
  shippingPrise = Number(event.target.getAttribute('data-price'));
  document.querySelector('.shipping-elem.elem-active').classList.remove('elem-active');
  event.target.classList.add('elem-active');
  updateProductPrice();
})

function updateProductPrice() {
  const priceElement = document.querySelector("#outprice");
  priceElement.innerText = `$${(colorPrise + sizePrise + shippingPrise).toFixed(2)}`;
}