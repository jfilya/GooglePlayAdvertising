const allLanguage = ["en", "ru"];
const changeURLLanguage = () => {
  let lang = navigator.language;
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
  location.href = window.location.pathname + "#?lng=" + lang;
  seconds = 10;
  changeLanguage();
  renameDate();
  ready();
};