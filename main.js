let start = document.getElementById("Start");
let pause = document.getElementById("Pause");
let reset = document.getElementById("Reset");


var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
  startTimer = setInterval(function() {
    timer();
   
  }, 1000);
    
})

pause.addEventListener('click', function(){
  clearInterval(startTimer);
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    clearInterval(startTimer);
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = "00";
        m.value = "00";
        s.value = "00";
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}
