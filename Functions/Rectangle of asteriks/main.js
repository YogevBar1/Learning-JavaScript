// 12. Accept number n from the user, display
//  a square full of stars of size n. For example, if 
//  4 is received, it must be displayed:
// * * * *
// * * * *
// * * * *
// * * * *
// Appropriate actions must be distributed.

function rowOfAsterisks(num) {
    for (let i = 1; i <= num; i++)
        document.write("* ");
}


function squareOfAsterisks(num) {
    for (let i = 1; i <= num; i++) {
        rowOfAsterisks(num);
        document.write("<br>");
    }
}

const n = +prompt("Insert number");
squareOfAsterisks(n);


// 13. Receive from the user the width and height of a 
// rectangle, display a rectangle filled with stars in the 
// received dimensions. For example, if 6 and 4 are received, you must display:
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// must be divided into appropriate functions.
// Call her the first time by sending hard-coded numbers.
// Call her a second time by sending random numbers.
// She was called a third time by sending numbers from the user.

function rectangleOfAsterisks(height, width) {
    for (let i = 1; i <= height; i++) {
        rowOfAsterisks(width);
        document.write("<br>");
    }
}

document.write("<hr><br>");
rectangleOfAsterisks(5, 8);
let randomHigh = Math.floor(Math.random() * 10 + 1);
let randomWidth = Math.floor(Math.random() * 10 + 1);
document.write("<hr><br>");
rectangleOfAsterisks(randomHigh, randomWidth);
document.write("<hr><br>");
let userHigh = + prompt("Insert high");
let userWidth = + prompt("Insert width");
rectangleOfAsterisks(userHigh, userWidth);
document.write("<hr><br>");


// 14. Create a function that accepts a count argument 
// in parentheses and displays a count of rectangles using 
// the function from the previous section.
// Receive n number from the user, display n random rectangles on the page.
function manyRectanglesOfAsterisks(count) {
    for (let i = 1; i <= count; i++) {
        const randomHigh = Math.floor(Math.random() * 10 + 1);
        const randomWidth = Math.floor(Math.random() * 10 + 1);
        rectangleOfAsterisks(randomHigh, randomWidth);
        document.write("<br>");
    }
}

const countRectangles = + prompt("How many random rectangles you want?");
manyRectanglesOfAsterisks(countRectangles);

// 15. Challenge: Receive from the user the width and
//  height of a rectangle, present an empty rectangle with 
// the received dimensions. For example, if 6 and 4 are received,
//  you must display:
// * * * * * *
// *         *
// *         *
// * * * * * *
// must be divided into appropriate functions.
// Call her the first time by sending hard-coded numbers.
// Call her a second time by sending random numbers.
// She was called a third time by sending numbers from the user.
document.write("<hr><br>");

function spaces(n) {
    for (let i = 1; i <= n; i++)
        document.write("&nbsp;&nbsp;&nbsp;");
}

function emptyRectangle(high, width) {
    rowOfAsterisks(width);
    document.write("<br>");


    for (let i = 1; i <= high - 2; i++) {
        document.write("* ");
        spaces(width - 2);
        document.write("*");
        document.write("<br>");

    }

    

    rowOfAsterisks(width);



}

emptyRectangle(4, 6);
document.write("<hr><br>");

randomHigh = Math.floor(Math.random() * 10 + 1);
randomWidth = Math.floor(Math.random() * 10 + 1);
emptyRectangle(randomHigh, randomWidth);
document.write("<hr><br>");

userHigh = + prompt("Insert high");
userWidth = + prompt("Insert width");
emptyRectangle(userHigh, userWidth);
