"use strict";

const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
    button1.style.backgroundColor = "green";
});

const divButtons = document.querySelectorAll("#container > button");
for (const button of divButtons) {
    button.addEventListener("click", function () {
        // button.style.backgroundColor = "green";
        this.style.backgroundColor = "green";
    });
}

const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
    console.log(this); //our context object is the button
    setTimeout(function () {
        // alert("Painting...");
        console.log(this); // our context object this window!
        this.style.backgroundColor = "green";
    }, 3000);
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
    const that = this; // that, me, thiz,_this 
    console.log(that); //our context object is the button
    setTimeout(function () {
        // alert("Painting...");
        console.log(that); // that is still the button context
        that.style.backgroundColor = "green";
    }, 3000);
});

const button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    console.log(this); //our context object is the button
    setTimeout(function () {
        console.log(this); //our context object is the button
        this.style.backgroundColor = "green";
    }.bind(this), 3000);
});


const button5 = document.getElementById("button5");
button5.addEventListener("click", function () {
    console.log(this); //our context object is the button
    setTimeout(() => {
        console.log(this); //our context object is the button
        this.style.backgroundColor = "green";
    }, 3000);
});

const button6 = document.getElementById("button6");
// window
button6.addEventListener("click", () => {
    console.log(this); //our context object is the window
    setTimeout(() => {
        console.log(this); //our context object is the window
        this.style.backgroundColor = "green";
    }, 3000);
});

const button7 = document.getElementById("button7");
// window
button7.addEventListener("click", () => {
    console.log(this); //our context object is the window
    this.style.backgroundColor = "green";
});



function paintMe() {
    const button1 = document.getElementById("button1")
    button1.style.backgroundColor = "green";
}