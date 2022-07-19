let a="";
if(navigator.language === "en"){
    a="Attention! in case of inactivity, after 10 seconds you will be redirected to http://google.com";
} else if(navigator.language === "ru"){
    a = "Внимание! в случае бездействия, через 10 секунд вы будите перенаправлены на http://google.com";
}
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    alert(a);
  }
