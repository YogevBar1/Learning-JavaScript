"use strict";

(() => {

    const numButton = document.getElementById("numButton");
    numButton.addEventListener("click",()=>{
        const num = getNumber();
        alert(num);
    })



    function getNumber() {
        return 42;
    }

    function getMessage() {
        return "This is my message!";
    }
})();