// Task 1
// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

const h2_headElements= $('h2.head');
h2_headElements.addClass('head');
h2_headElements.find('.inner').addClass('inner');


// Task 2
// На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

const reqex = /^https:\/\//;
const link = $('a');
if(reqex.test(link.attr('href'))){
  link.attr('target', "_blank");
}

// Task 3
// Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

const h3Elements = $('h3');
for(let i = 0; i < h3Elements.length; i++){
  let elem = h3Elements[i];
  $(elem).prepend($(elem).next('div'));
}
// Task 4
// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

const checkboxes = $('input');
checkboxes.on('click', disableCheckboxes);
function disableCheckboxes() {
  if($('input:checked').length > 2){
    checkboxes.attr("disabled", true);
  }
}
