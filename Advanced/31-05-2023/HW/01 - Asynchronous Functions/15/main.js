"use strict";

// 15. Display a clock in span on the page (every second displays the time)
// Add code so that every second the time is displayed, the font color of the clock changes to a random font color.

function showTime(){
    const clock = document.getElementById("clock");
    const date = new Date();
    const currentHour = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const currentMinutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    const currentSeconds = date.getSeconds()  >=10 ? date.getSeconds() : `0${date.getSeconds()}`;

    clock.innerHTML = `${currentHour}:${currentMinutes}:${currentSeconds}`;

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    clock.style.color =`rgb(${r},${g},${b})`;

    }

    function clock(){
        setInterval(showTime,1000);
    }
 
