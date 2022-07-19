const d = new Date();

const day=new Array("Sunday","Monday","Tuesday",
"Wednesday","Thursday","Friday","Saturday");

const month=new Array("January","February","March","April","May","June",
"July","August","September","October","November","December");

document.querySelector(".container__date").innerHTML = (day[d.getDay()]+", " +d.getDate()+ " " + month[d.getMonth()]
+ ", " + d.getFullYear());

// document.addEventListener("DOMContentLoaded", ready);
// function ready() {
//     alert("Внимание! в случае бездействия, через 10 секунд вы будите перенаправлены на http://google.com");
//   }
// const day=new Array("Воскресенье","Понедельник","Вторник",
// "Среда","Четверг","Пятница","Суббота");

// const month=new Array("января","февраля","марта","апреля","мая","июня",
// "июля","августа","сентября","октября","ноября","декабря");