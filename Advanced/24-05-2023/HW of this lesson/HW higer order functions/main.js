// 1. Create a number array of size 20, insert 20
//  random integers into it, any number between 1 and 100.
// By functions belonging to the array object 
// (such as forEach, filter, find, map, reduce, etc.) display the following:
// A. The array itself - each item in a separate line.
// B. the first even number.
// third. the first number greater than 50.
// d. all the odd numbers.
// God. All numbers greater than 50.
// and. the index of the first number greater than 50.
// G. For each number display whether it is even or odd.
// H. the minimum number.
// ninth. the maximum number.


"use strict";


const arr = [];
for (let i = 0; i <= 19; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
}

document.write("The arr:<br>")
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}
document.write("<hr><br>");

const firstOdd = arr.find(function isEven(n) { return n % 2 === 0; });
document.write("First even number: " + firstOdd);

document.write("<hr><br>");
const firstBigger50 = arr.find(function isBig50(n) { return n > 50 });
document.write("First number bigger than 50: " + firstBigger50);

document.write("<hr><br>");
const oddNumbers = arr.filter(n => n % 2 !== 0);
document.write("Odd numbers: " + oddNumbers);

document.write("<hr><br>");
const numsBig50 = arr.filter(n => n > 50);
document.write("Numbers that bigger than 50: " + numsBig50);

document.write("<hr><br>");
const firstBigger50Index = arr.findIndex(function isBig50(n) { return n > 50 });
document.write("index of first number bigger than 50: " + firstBigger50Index);


function isEven(n) { return n % 2 === 0; }
document.write("<hr><br>");
arr.forEach((num) => {
    const text = isEven(num) ? " Even" : " Odd";
    document.write(num + text + "<br>");
});

document.write("<hr><br>");
let min = 101;
arr.forEach((num) => {
    if (min > num)
        min = num;
});

document.write("The min number = " + min);

document.write("<hr><br>");
let max = -1;
arr.forEach((num) => {
    if (max < num)
        max = num;
});

document.write("The max number = " + max);

