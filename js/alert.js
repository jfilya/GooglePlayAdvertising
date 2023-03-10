function ready() {
  let a = "";
  if (window.location.hash.substr(-2) !== "ru") {
    a =
      "Attention! in case of inactivity, after 10 seconds you will be redirected to http://google.com";
  } else if (window.location.hash.substr(-2) === "ru") {
    a =
      "Внимание! в случае бездействия, через 10 секунд вы будите перенаправлены на http://google.com";
  }
  alert(a);
}