"use strict";

function testRecursion(){
    const n =+ prompt("Insert number");
    const sum = showNto1(n);
}

// Signature
function showNto1(n){

    // 2.Exit condition:
    if(n<=0) return;

    document.write(n +" , ");
    // 3.One step:      4.Entire task minus current step
    showNto1(n-1);

}
