const d = new Date();

const dayEn=new Array("Sunday","Monday","Tuesday",
"Wednesday","Thursday","Friday","Saturday");

const monthEn=new Array("January","February","March","April","May","June",
"July","August","September","October","November","December");

if (navigator.language === "en"){
  document.querySelector(".container__date").innerHTML = (dayEn[d.getDay()]+", " +d.getDate()+ " " + monthEn[d.getMonth()]
+ ", " + d.getFullYear());
}
const dayRu=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

const monthRu=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

if (navigator.language === "ru"){
  document.querySelector(".container__date").innerHTML = (dayRu[d.getDay()]+", " +d.getDate()+ " " + monthRu[d.getMonth()]
+ ", " + d.getFullYear());
}

