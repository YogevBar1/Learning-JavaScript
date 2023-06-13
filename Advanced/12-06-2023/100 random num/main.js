"use strict";

function test() {
    const arr = getUniqueRandomNumbers(100, 1, 10000);
    document.write(arr);
}


// O(n) + O(n) = O(2n) = O(n)
function getUniqueRandomNumbers(size, min, max) {

    const numbers = new Set();
    do {
        const num = getRandomNumber(min, max);
        numbers.add(num);
    }
    while(numbers.size < size);
    return Array.from(numbers);

}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}