"use strict";


function test() {
    const n =+ prompt("insert number");
    numsFrom1ToN(n);
 
}

function numsFrom1ToN(n){
    if(n===0) return;
    numsFrom1ToN(n-1);
    document.write(n + " ");
}