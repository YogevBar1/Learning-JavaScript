"use strict";


$(() => {

    $("#random").click(() => {
        const divs = $(".square");
        divs.each((index,element)=>{
            const randomNumber = Math.floor(Math.random()*100);
            $(element).text(randomNumber);
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            $(element).css("background-color" , `rgb(${r},${g},${b})`);
        })
    });
});