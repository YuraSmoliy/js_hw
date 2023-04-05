// Task 1
// 7-1.
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.

let newWindow = window.open("", "", "width=300, height=300");

setTimeout(() => {
  newWindow.resizeTo(500, 500);
  setTimeout(() => {
    newWindow.moveTo(200, 200);
    setTimeout(() => {
      newWindow.close();
    }, 2000);
  }, 2000);
}, 2000);

// Task 2
// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS(){
  document.querySelector('#text').classList.add('p_style')
}

