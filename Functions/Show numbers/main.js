// 16. Create a function that receives a number n and displays
//  in one line all the numbers from n to 1 in descending order.
// For example, if you received a 5, you will display:
// 5 4 3 2 1

// Create another function that accepts a size number and displays 
// a decreasing triangle of numbers depending on the size. For example,
//  if you got a 5, you would display:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

function numsFromNto1(n) {
    for (let i = n; i >= 1; i--)
        document.write(i + " ");
}

numsFromNto1(7);

document.write("<br>");

function numTriangle(n) {
    for (let i = n; i >= 1; i--) {
        numsFromNto1(i);
        document.write("<br>");

    }

}
document.write("<br>");

numTriangle(5);
document.write("<br>");
numTriangle(15);

// 17. Receive a number n from the user,
//  display an inverted star triangle as a 
//  function of n. If 4 is taken, it must be presented:
// * * * *
// * * *
// * *
// *
// must be divided into appropriate functions
function rowOfAsterisks(num) {
    for (let i = 1; i <= num; i++)
        document.write("* ");
}

function triangleOfAsterisks(num) {
    for (let i = num; i >= 1; i--) {
        rowOfAsterisks(i);
        document.write("<br>");
    }
}


document.write("<br>");

triangleOfAsterisks(6);

document.write("<br>");

triangleOfAsterisks(16);

// 18. Accept the number n from the user, display the following form as
//  a function of n, for example for 4 you must display:
// 1 2 3 4 * * * *
// 1. 2. 3 * * *
// 1 2 * *
// 1 *
// Divide the program into appropriate functions.


function numsFrom1toN(n) {
    for (let i = 1; i <= n; i++)
        document.write(i + " ");
}

function triangleOfNumsAndAsterisks(num) {
    for (let i = num; i >= 1; i--) {
        numsFrom1toN(i);
        rowOfAsterisks(i);
        document.write("<br>");
    }
}

document.write("<br>");

triangleOfNumsAndAsterisks(4);
document.write("<br>");

triangleOfNumsAndAsterisks(8);
document.write("<br>");

triangleOfNumsAndAsterisks(25);

// 19. Accept the number n from the user,
//  display the following two triangles as a function of
//   n, for example for sub-sect 4 you must display:
// * * * *
// * * *
// * *
// *
// *
// * *
// * * *
// * * * *

function doubledTriangleOfAsterisks(num) {
    firstTriangleOfAsterisks(num);
    secondTriangleOfAsterisks(num);
}

function firstTriangleOfAsterisks(n) {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++)
            document.write("* ");
        document.write("<br>");
    }
}

function secondTriangleOfAsterisks(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++)
            document.write("* ");
        document.write("<br>");
    }
}

document.write("<br>");
doubledTriangleOfAsterisks(4);

document.write("<br>");
doubledTriangleOfAsterisks(7);

document.write("<br>");
doubledTriangleOfAsterisks(17);

let userNum =+ prompt("Insert number");
doubledTriangleOfAsterisks(userNum);


// 20. Challenge: Receive the number n from the user,
//  display the following form as a function of n, if 4 is received, display:

//          1
//        1 2 1
//      1 2 3 2 1
//    1 2 3 4 3 2 1
// Note the symmetry.
// must be divided into appropriate functions.

function spaces(n) {
    document.write("&nbsp;&nbsp;&nbsp;");

}

function pyramidNumber(num) {
    for (let i = 1; i <= num; i++) {

        for (let j = 1; j <= (num - i + 1); j++)
            spaces(j);

        numFrom1ToNumAndBackTo1(i);

        document.write("<br>");
    }
}

function numFrom1ToNumAndBackTo1(n) {
    numsfrom1toN(n);
    numsfromNto1(n);
}

function numsfrom1toN(n) {
    for (let i = 1; i <= n; i++)
        document.write(i + " ");
}

function numsfromNto1(n) {
    //Not icluded N
    for (let i = n - 1; i >= 1; i--)
        document.write(i + " ");
}


document.write("<br>");

pyramidNumber(4);
document.write("<br>");

userNum =+ prompt("Insert number");
pyramidNumber(userNum);