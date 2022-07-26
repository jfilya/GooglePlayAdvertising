const d = new Date();

const dayEn = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

const monthEn = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

const dayRu = new Array(
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
);

const monthRu = new Array(
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
);

const langDate = (dayLang, monthLang) => {
  document.querySelector(".container__date").innerHTML =
    dayLang[d.getDay()] +
    ", " +
    d.getDate() +
    " " +
    monthLang[d.getMonth()] +
    ", " +
    d.getFullYear();
};
const renameDate = () => {
  if (window.location.hash.substr(-2) === "en") {
    langDate(dayEn, monthEn);
  }
  if (window.location.hash.substr(-2) === "ru") {
    langDate(dayRu, monthRu);
  }
};
renameDate();