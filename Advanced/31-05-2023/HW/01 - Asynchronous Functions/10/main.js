"use strict";

// 10. Create a function called getRandomNumberAfterDelay that 
// waits by setTimeout for five seconds, when it returns to the code that called
//  it (by calling) a random number between first and last, when first and last these
//   are two additional arguments that the function getRandomNumberAfterDelay accepts.
//    Call her a clicker and display the returned number.

function getRandomNumberAfterDelay (first, last , callback)
{
    const num = Math.floor(Math.random()*(last- first) + first + 1);
    setTimeout(()=>callback(num),5000);
}

function test(){
    const first =+ prompt("insert first");
    const last =+ prompt("insert last");
    getRandomNumberAfterDelay (first, last , (num)=>{alert(num);});

}