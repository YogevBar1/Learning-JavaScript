"use strict";

function test() {
    const num = +prompt("insert num");
    document.write(`count of digits of ${num} = ${countOfDigits(num)}`);


}

function countOfDigits(num) {
    if (num < 10) return 1;    
    return 1 + countOfDigits(Math.floor(num / 10));
}