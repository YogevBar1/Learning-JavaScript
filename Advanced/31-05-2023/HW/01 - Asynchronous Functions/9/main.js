"use strict";

// 9. Create a function called getRandomNumberAfterDelay that
//  waits by setTimeout for five seconds, and then returns to the code that called it (via callback)
//   a random number between 0 and limit, where limit is an additional argument that the 
// function getRandomNumberAfterDelay accepts. Call her a clicker and display the returned number.

function getRandomNumberAfterDelay(limit,callback) {
    const num = Math.floor(Math.random() * (limit + 1));
    setTimeout(() => {
        callback(num);

    }, 5000);

}

function test() {

    const limitTextBox = document.getElementById("limit");
    const limit = +limitTextBox.value;
    getRandomNumberAfterDelay(limit,(result) => {
        alert(result);
    });
}