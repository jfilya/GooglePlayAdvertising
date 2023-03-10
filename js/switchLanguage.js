const allLanguage = ["en", "ru",];
let lang = navigator.language.length === 2 ? navigator.language : navigator.language.substr(-2).toLocaleLowerCase();
const changeURLLanguage = () => {
  location.href = window.location.pathname + "#?lng=" + lang;
};
changeURLLanguage();
const changeLanguage = () => {
  let hash = window.location.hash.substr(-2);
  console.log(hash)
  if (!allLanguage.includes(hash.toLocaleLowerCase())) {
    hash ="en";
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
  renameDate();
  changeLanguage();
    setTimeout(ready, 150);
};