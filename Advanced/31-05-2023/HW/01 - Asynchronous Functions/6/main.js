"use strict";


// 6. When surfing the website - change the background color of the page to a random background color.
//  Do this every second so that every second the background color of the page changes to a random background color.

function changeToRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

setInterval(changeToRandomColor, 1000);