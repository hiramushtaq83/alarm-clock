let submitBtn =document.querySelector("#submit");
let alarmtext=document.querySelector("#alarm-text");
let clearalarm=document.querySelector("#clear-alarm");
let alarmaudio=document.querySelector("#alarm-audio");
let showtime=document.querySelector("#current-time");
let form=document.querySelector(".form-actions");
let almHour=document.querySelector('#almHour');
let almMnts=document.querySelector('#almMnts');
let almSec=document.querySelector('#almSec');
let almZone=document.querySelector('#almZone');
let hourInput=document.querySelector("#input1");
let MntsInput=document.querySelector("#input2");
let Secinput=document.querySelector("#input3");
let zoneInput=document.querySelector('#zone');
let activeAlarm=document.querySelector('#active-alarm')

function Alarm(){
    
    form.style.display='none';
    activeAlarm.style.display='block';
    almHour.innerText+=hourInput.value;
    almMnts.innerText+=MntsInput.value;
    almSec.innerText+=Secinput.value;
    almZone.innerText+=zoneInput.options[zoneInput.selectedIndex].text;

}
submitBtn.onclick=Alarm;


function Time(){

    let time= new Date();
      var hours=time.getHours();
      var min=time.getMinutes();
      let sec=time.getSeconds();
      let am_pm='PM'

      if(hours>12){
          hours=hours-12;
          am_pm="PM";
        }
        if(hours==0){
          hours=12;
          am_pm="AM";
        }
        hours=hours<10 ? "0"+ hours:hours;
        min=min<10 ? "0"+ min:min;
        sec=sec<10 ? "0"+ sec:sec;
        let currenttime=hours+":"+min+":"+sec+" "+am_pm
    
    showtime.innerText=currenttime;

    if(almHour.innerText==hours&&almMnts.innerText==min&&almSec.innerText==sec&&almZone.innerText==am_pm){
      alarmaudio.src='./alarm.mp3';
      alarmaudio.play();
      form.style.display='block';
      activeAlarm.style.display='none';
    }
}
    Time();
    setInterval(Time,1000);


function cancelAlarm(){
  form.style.display='block';
  activeAlarm.style.display='none';
  almHour.innerText='';
  almMnts.innerText='';
  almSec.innerText='';
  almZone.innerText='';
  hourInput.value='';
  MntsInput.value='';
  Secinput.value='';
  zoneInput.value='';
  alarmaudio.pause();
}

clearalarm.onclick=cancelAlarm;