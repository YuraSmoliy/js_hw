// Task 1
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).

const os = require('os');
const http = require("http");
const path = require('path');

http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(
    `<h2> System information: </h2>
    <div> Currne user name: ${os.userInfo().username}, </div>
    <div> Os type: ${os.type()}, </div>
    <div> System work tome: ${Math.floor(os.uptime() / 60)}, </div>
    <div> Working directory: ${process.cwd()}, </div>
    <div> Server file name: ${path.basename(__filename)} </div>
    `
  );
  response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');


// Task 2
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
//         Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

const personalmodule = require('./personalmodule');
const http = require('http');
const os = require('os');
const path = require('path');
http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  const greetingMsg = personalmodule.greeting(os.userInfo().username);
  response.write(
    `<div> ${greetingMsg} </div>`
  );
  response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

// Task 3 
// Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.

// Кроки:
// 1. Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація. 
// 2. Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл. 
// 3. Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile(). 
// 4. Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
// 5. Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.