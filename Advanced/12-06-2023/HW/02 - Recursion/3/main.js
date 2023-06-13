"use strict";

// 3. Create a recursive function that accepts a number n and displays all numbers divisible by 7 or ending in 7 from n to 1 (descending order).

function test() {
    const n =+ prompt("insert number");
    sevenBoom(n);
}

function sevenBoom(n){
    if(n===0) return;

    if(n % 10 ===7 || n % 7 ===0)
        document.write(n+ " ");

    sevenBoom(n - 1);
}