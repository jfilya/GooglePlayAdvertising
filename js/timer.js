let seconds = 10;
const timeСounter = () => {
    document.getElementById("seconds").innerHTML=seconds;
    seconds -= 1;
    if(seconds === 0){
        location.href = 'http://google.com';
    }
  };
setInterval(timeСounter, 1000);
