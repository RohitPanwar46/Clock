let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let clock_sound = new Audio("clock_sound.mp3");


setInterval(() => {
    clock_sound.play();
    let d = new Date()
    let Thours = d.getHours()
    let Tminutes = d.getMinutes()
    let Tseconds = d.getSeconds()

    let Rhh = Thours*30 + Tminutes*0.5;
    let Rmh = Tminutes*6 + Tseconds*0.1;
    let Rsh = Tseconds*6;

    hours.style.transform = `rotate(${Rhh}deg)`
    minutes.style.transform = `rotate(${Rmh}deg)`
    seconds.style.transform = `rotate(${Rsh}deg)`
    
}, 1000);


 