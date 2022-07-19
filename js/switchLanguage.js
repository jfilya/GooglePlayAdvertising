const allLanguage = ["en", "ru"];
const changeURLLanguage = () => {
  let lang = navigator.language;
  location.href = window.location.pathname + "#?lng=" + lang;
};
changeURLLanguage();
const changeLanguage = () => {
  let hash = window.location.hash;
  hash = hash.substr(-2);
  console.log(hash);
  if (!allLanguage.includes(hash)) {
    location.href = window.location.pathname + "#?lng=en";
  }
for(let key in LangArray) {
    if(document.querySelector("."+key)){
       document.querySelector("."+key).innerHTML = LangArray[key][hash]; 
    }
}
};
changeLanguage();
