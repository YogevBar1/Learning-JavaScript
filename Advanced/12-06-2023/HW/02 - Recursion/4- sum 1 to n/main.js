"use strict";


function test() {
    const n =+ prompt("insert number");
    const sum = sum1toN(n);
    document.write(`The sum = ${sum}`);
}

function sum1toN(n){
    if(n===0) return 0;

    return n + sum1toN(n -1);
}