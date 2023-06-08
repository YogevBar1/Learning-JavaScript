"use strict";

// 8. Create a function called getRandomNumberAfterDelay that waits by
//  setTimeout for five seconds, and then returns to the code that called it 
// (via callback) a random number between 0 and 100. Call her a clicker and display the returned number.

function getRandomNumberAfterDelay(callback) {
    const num = Math.floor(Math.random() * 101);
    setTimeout(() => {
        callback(num);

    }, 5000);

}

function test() {
    getRandomNumberAfterDelay((result) => {
        alert(result);
    });
}