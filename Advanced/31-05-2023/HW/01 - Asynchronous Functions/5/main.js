"use strict";


// 5. Create a text box and a div. When loading the page,
//  display every second inside the div a random number between 0 and the number found in the text box.
// Performing an operation every second must be done by setInterval.
// Is it possible while the site is active to change the number in the 
// text box so that the change does affect the random numbers displayed?

function randomNum() {

    const div = document.getElementById("div");

    setInterval(() => {
        const numTextBox = document.getElementById("num");
        const num = numTextBox.value;
        const randomNum = Math.floor(Math.random() * num);

        div.innerText = randomNum;


    }, 1000);

}