//hw1
// Create a function that displays the message 
// "Make Things Go Right" on the page and then descends a line.
// She was called 3 times.

function goRight() {
    document.write("Make Things Go Right<br>");
}

goRight();
goRight();
goRight();

function myName() {
    document.write("Yogev Bar<br>");
}
document.write("<br><hr>");

//hw2
// Create a function that displays your full name on the screen.
// She was read 100 times
for (let i = 1; i <= 100; i++) {
    myName();
}
document.write("<br><hr>");

//hw3
// Create a function that accepts 
// (as an argument to the parentheses) a string.
// The function must display the string 10 times.
// Call the action the first time by sending a hard string.
// Call the function a second time by sending a string from the user.
function showTenTimes(string) {
    for (let i = 1; i <= 10; i++)
        document.write(`${string} <br>`);
}

showTenTimes("Hey");

document.write("<br><hr>");

const string2 = prompt("Insert string");
showTenTimes(string2);



document.write("<br><hr>");
// 4. Create a function that accepts (in parentheses) two arguments. 
// The first is a message and the second is the number of times the
// message must be displayed. The function must display the message
//  as the number of times it received.
// Read it for the first time by sending hard-coded values.
// Call it a second time by sending values ​​from the user (the user
//      chooses the string and the number of times it should be displayed).

function showMassage(string, count) {
    for (let i = 1; i <= count; i++)
        document.write(string + "<br>");
}

showMassage("Hello world!", 5);
document.write("<br><hr>");

const string3 = prompt("Insert string");
const string3Count = + prompt("How many time you want to print your string?");
showMassage(string3, string3Count);
document.write("<br><hr>");


// 5. Create a function that accepts 3 numbers 
// for brackets. The function should calculate and display their average.
// hard coders.
// Call it a second time by sending values ​​from the user.
// Call her a third time by sending random values.

function avg(num1, num2, num3) {
    const avg = (num1 + num2 + num3) / 3;
    document.write(`Avg = ${avg}`);
}

avg(23, 24, 34);
document.write("<br><hr>");
let num1 = +prompt("Insert number:");
let num2 = +prompt("Insert number:");
let num3 = +prompt("Insert number:");

avg(num1, num2, num3);
document.write("<br><hr>");

let randomNum1 = Math.random() * 100;
let randomNum2 = Math.random() * 100;
let randomNum3 = Math.random() * 100;
avg(randomNum1, randomNum2, randomNum3);

// 6. Create a function that accepts 3 numbers for 
// brackets. The function must calculate and display the maximum number among them.
// hard coders.
// Call it a second time by sending values ​​from the user.
// Call her a third time by sending random values.

function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        document.write(`Max = ${num1}`);
    else if (num2 > num3)
        document.write(`Max = ${num2}`);
    else
        document.write(`Max = ${num3}`);
}

document.write("<br><hr>");

max(234324,23423,324);
num1 = +prompt("Insert number:");
num2 = +prompt("Insert number:");
num3 = +prompt("Insert number:");
document.write("<br><hr>");
max(num1, num2, num3);
randomNum1 = Math.random() * 100;
randomNum2 = Math.random() * 100;
randomNum3 = Math.random() * 100;
document.write("<br><hr>");
max(randomNum1, randomNum2, randomNum3);
