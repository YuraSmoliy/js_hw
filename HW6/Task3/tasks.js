// Task 3
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

const mainElement = document.createElement("main");
mainElement.classList.add("mainClass", "check", "item");
const myDiv = document.createElement("div");
myDiv.setAttribute("id", "myDiv");
const paragraph = document.createElement("p");
paragraph.innerText = "First paragraph";
myDiv.appendChild(paragraph);
mainElement.appendChild(myDiv);
document.body.appendChild(mainElement);
