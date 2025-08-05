const time = document.querySelector("#time");
const date = document.querySelector("#date");


function  update() {
 let now= new Date();
  let hours = String(now.getHours()).padStart(2,"0");
  let minutes = String(now.getMinutes()).padStart(2,"0");
  let seconds = String(now.getSeconds()).padStart(2,"0");

let period;

if(hours >= 12){
    period = "PM"
    if(hours > 12){
        hours-=12;
    }
}else if(hours ===0){
  hours=12;
  period="AM"
}else {
    period ="AM"
}

let currtime = time.innerHTML=`${hours} : ${minutes} : ${seconds} : ${period}`

//Date 
const days =["Monday", "Tuesday" ,"Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
  let dayName = days[now.getDay()]; 
  let dateNum = now.getDate();
  let monthName = months[now.getMonth()];
  let year = now.getFullYear();
  date.innerText = `${dayName}, ${dateNum} ${monthName} ${year}`;
}
 
setInterval(update, 1000);
update();
