"use strict";

// 11. Create a function called getEvenRandomNumberAfterDelay
//  that waits by setTimeout for five seconds, and then returns to 
//  the code that called it (via callback) an even random number between first and last,
//   where first and last are two additional arguments that the function 
// getEvenRandomNumberAfterDelay accepts. Call her a clicker and display the returned number.

function getEvenRandomNumberAfterDelay  (first, last , callback)
{
    let num =1;
    while(num % 2 !==0)
        num = Math.floor(Math.random()*(last- first) + first + 1);
    
    setTimeout(()=>callback(num),5000);
}

function test(){
    const first =+ prompt("insert first");
    const last =+ prompt("insert last");
    getEvenRandomNumberAfterDelay  (first, last , (num)=>{alert(num);});

}