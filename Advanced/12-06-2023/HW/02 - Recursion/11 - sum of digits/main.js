"use strict";

// 11. Create a recursive function that accepts a number and returns the sum of its digits.
function test() {
    const num =+ prompt("insert num");
    document.write(`Sum of digits of ${num} = ${sumOfDigits(num)}`);


}

function sumOfDigits(num) {
    if (num < 10) return num;
    const rightDigit = num % 10
    
    return rightDigit + sumOfDigits(Math.floor(num / 10));
}