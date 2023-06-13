"use strict";

// 2. Create a recursive function that accepts a number n and displays all the numbers from n to 1 (descending order).

function test() {
    const n =+ prompt("insert number");
    numbersFromNto1(n);
}

function numbersFromNto1(n){
    if(n===0) return;
    document.write(n + " ");
    numbersFromNto1(n -1);
}

