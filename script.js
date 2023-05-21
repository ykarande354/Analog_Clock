function show_clock(){
    let weekday = ['Sunday',
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"]
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes + seconds/10}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('clock-ticking-2.mp3');
    sound.play();

   let  dayEL = document.querySelector(".day");
   dayEL.innerHTML = weekday[date.getDay()];

   let dtEL = document.querySelector(".date");
   dtEL.innerHTML = date.getDate()+"/"+(date.getMonth()+1) +"/"+date.getFullYear();
}
setInterval(show_clock,1000);