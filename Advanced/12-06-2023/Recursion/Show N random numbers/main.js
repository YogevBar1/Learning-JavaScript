"use strict";

function testRecursion(){
    const n =+ prompt("Insert number");
    showNrandomNums(n);
}

// Signature
function showNrandomNums(n){

    // 2.Exit condition:
    if(n<=0) return;

    const randomNum = Math.floor(Math.random()* 100);
    document.write(randomNum + " , ");

    // 3.One step:      4.Entire task minus current step
    showNrandomNums(n-1);

}
