///<reference path="jquery-3.7.0.js"/>

"use strict";


// Document Ready
$(()=>{
    // $(".nice").fadeOut(2000);

    // const animationButton = document.getElementById("animationButton");
    // animationButton.addEventListener("click",()=>{

    // });

    $("#animationButton").click(()=>{
        $("div").fadeOut(2000);

    });


    $("#toggleButton").click(()=>{
        $(".red").toggle(2200);
    })


    $("#createButton").click(()=>{
        $("#container").append("<button>Click Me</button>");
    });

    // Wont work:
    // $("#container> button").click(()=>alert("Cool!"));

    // Will work:
    $("#container").on("click","button",()=>alert("Cool"));

    $("#coloredButton").click(()=>{

   

        $("div").each(function (){
            const color = getRandomColor();
            $(this).css("background-color",color);
            
        });
    });

    function getRandomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    $("#domButton").click(()=>{
        // $("#secondDiv").css("background-color","green");
        // $("#secondDiv").next().css("background-color","green");
        // $("#secondDiv").prev().css("background-color","green");
        // $("#secondDiv").siblings().css("background-color","green");
        // $("#secondDiv").siblings("div").css("background-color","green");
        // $("#secondDiv").parent().css("background-color","green");
        $("#secondDiv").children().css("background-color","green");
    });
    


});