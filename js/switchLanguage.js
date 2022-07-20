const allLanguage = ["en", "ru"];
  let lang = navigator.language;
const changeURLLanguage = () => {
  location.href = window.location.pathname + "#?lng=" + lang;
};
changeURLLanguage();
const changeLanguage = () => {
  let hash = window.location.hash.substr(-2);
  if (!allLanguage.includes(hash)) {
    location.href = window.location.pathname + "#?lng=en";
  }
  for (let key in LangArray) {
    if (document.querySelector("." + key)) {
      document.querySelector("." + key).innerHTML = LangArray[key][hash];
    }
  }
  
};
changeLanguage();

window.onhashchange = function () {
  lang = window.location.hash.substr(-2);
  seconds = 10;
  changeLanguage();
  renameDate();
  setTimeout(ready, 5);
};