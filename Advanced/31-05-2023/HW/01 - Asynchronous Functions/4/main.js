"use strict";

// 4. Display on the page the word start, then after 3 seconds a 
// random number between 0 and 100, then after 5 seconds a random number 
// between 0 and 100, then after 7 seconds a random number between 0 and 100 and then end.
// That is, only the display of the random numbers is found asynchronously,
//  each by its own setTimeout.
// What you should see at the end of the prints will be:
// start
// end
// (random number between 0 and 100)
// (random number between 0 and 100)
// (random number between 0 and 100)

function test() {
    console.log("start");

    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random()*101);

        console.log(randomNum);
    }, 3000);

    setTimeout(() => {
        const randomNum = Math.floor(Math.random()*101);

        console.log(randomNum);
    }, 5000);

    setTimeout(() => {
        const randomNum = Math.floor(Math.random()*101);

        console.log(randomNum);
    }, 7000);


    console.log("end");
}


