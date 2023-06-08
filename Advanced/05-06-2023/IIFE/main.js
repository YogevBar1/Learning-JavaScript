"use strict";
(()=> { //IIFE Immediatley Invoked Function Expression

    const msgButton = document.getElementById("msgButton");
    msgButton.addEventListener("click",()=>{
        const msg = getMessage();
        alert(msg);
    });
    const arr=[];

    function showMessage() {
        const msg = getMessage();
        alert(msg);
    }

    function getMessage() {
        return "Hello";
    }
})();

