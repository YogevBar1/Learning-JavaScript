"use strict";


function test() {
    const n =+ prompt("insert number");
    const factorial = nFactorial(n);
    document.write(`${n}! = ${factorial}`);
}

function nFactorial(n){
    if(n===1) return 1;

    return n * nFactorial(n -1);
}