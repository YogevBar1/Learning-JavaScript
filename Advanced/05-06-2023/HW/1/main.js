"use strict";

// Create a page containing 5 paragraphs with some text in the content.
// Create a button that, when clicked, dynamically registers a click event for each of the paragraphs using addEventListener.
// The dynamic event is activated by clicking on each paragraph.
// In the event, wait a second and then color the paragraph with some background color.
// -this should be used as much as possible.
// Hint:
// You can get an array of all paragraphs by the following command: document.getElementsByTagName("p")

// (() => {
//     const paragraphs = document.getElementsByTagName("p");



//     for (const paragraph of paragraphs) {
//         paragraph.addEventListener("click", function () {
//             setTimeout(() => {
//                 console.log(this);
//                 this.style.backgroundColor = "yellow";

//             }, 1000);
//         })

//     }

// });


(() => {

    let exerciseContext = document.getElementById("exerciseContext");
    exerciseContext.addEventListener("click", () => {
        const paragraphs = document.getElementsByTagName("p");
        for (const paragraph of paragraphs) {
            paragraph.addEventListener("click", function () {
                setTimeout(() => {
                    
                    const colors = ["green", "pink", "black", "red", "blue"];
                    const indexColor = Math.floor(Math.random() * colors.length) + 1;
                    this.style.backgroundColor = colors[indexColor];
                }, 1000)
            })
        }
    })

})();







