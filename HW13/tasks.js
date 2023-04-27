// Task 1 
// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, сервер обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі.

const url = 'http://localhost:5500/'
let vote = document.querySelector('.vote');
vote.addEventListener('click', getVoteData);

async function getVoteData(){
  let response = await fetch(url);
  vote.innerText =  await response.text();
}

// Task 2
// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, завантажується файл books.json і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.
const urlTask2 = 'http://localhost:5500/books';
const booksContainer = document.querySelector('.books_container'); 
const downloadBooksBtn = document.querySelector('.download_books_btn'); 

downloadBooksBtn.addEventListener('click',getBooks);
function getBooks(){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", urlTask2, true);
  xhr.onload = function() {
    if (this.status === 200) {
        const books = JSON.parse(this.responseText);
        booksContainer.innerHTML = '<ul>' + createBooks(books).join('') + '</ul>';
    }
}
xhr.send();
}

function createBooks(books){
  let booksHtml = books.books.map(elem=>{
   return  `<li>${elem.author}</li>`
  });
  console.log(booksHtml)
  return booksHtml;
}

// Task 3
// Використати сервіс 
// https://randomuser.me/
// Та при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію про користувача (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).

const urlTask3 = 'https://randomuser.me/api/';
document.querySelector('.urerInfo');
window.addEventListener('load', renderUserInfo);

let userIcon = document.querySelector('.picture')
let userName = document.querySelector('.name')
let userAge = document.querySelector('.age')
let userGender = document.querySelector('.gender')
let userCountry = document.querySelector('.country')
let userPassword = document.querySelector('.login')
let userEmail = document.querySelector('.email')

async function getUserData(){
  let response = await fetch(urlTask3);
  let userData = await response.json();
  const userInfo = userData.results[0]
  let {first, last} = userInfo.name;
  let {username, password} = userInfo.login;
  return [first, last, userInfo.picture.medium, userInfo.dob.age, userInfo.gender, userInfo.email, userInfo.location.country, username, password]
}

async function renderUserInfo(){
  let userData = await getUserData();
  userIcon.setAttribute('src', userData[2]);
  userName.innerText = 'User name: ' + userData[0] + ' ' + userData[1];
  userAge.innerText = 'Age: ' + userData[3];
  userGender.innerText = 'Ginder: ' + userData[4];
  userCountry.innerText = 'Country: ' + userData[6];
  userPassword.innerText = 'Credentials : ' + 'user_name: ' + userData[7] + ' password: ' + userData[8];
  userEmail.innerText = 'Email: ' + userData[5];
}