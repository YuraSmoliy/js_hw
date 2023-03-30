// Task 3
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.

document.querySelector('.first_button').addEventListener('click',()=>{
  document.body.style.backgroundColor = 'blue';
})

document.querySelector('.second_button').addEventListener('dblclick',()=>{
  document.body.style.backgroundColor = 'pink';
})

document.querySelector('.third_button').addEventListener('mousedown',()=>{
  document.body.style.backgroundColor = 'brown';
})

document.querySelector('.third_button').addEventListener('mouseup',()=>{
  document.body.style.backgroundColor = 'white';
})

document.querySelector('a').addEventListener('mouseover',()=>{
  document.body.style.backgroundColor = 'yellow';
})

document.querySelector('a').addEventListener('mouseout',()=>{
  document.body.style.backgroundColor = 'white';
})