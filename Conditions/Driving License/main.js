// Get an age, present a message indicating whether or not a driver's license can be issued.
//  If not - the number of years to wait must be presented.

const age = + prompt("Insert your age:");

if (age >= 16) {
    document.write("You can be a driver");
}
else {
    document.write(`You can not be a driver, you need to wait ${16 - age} years`);
}

document.write("<br><hr>");


//Capture a number, display "positive", "negative" or "zero" depending on the number.

let num = + prompt("Insert number:");
if (num > 0) {
    document.write(`${num} is positive`);
}
else if (num < 0) {
    document.write(`${num} is negative`);
}
else {
    document.write("The number is zero");
}

document.write("<br><hr>");


// Pick up a number, present:
// A. "The number is a negative number"
// B. "The number is zero"
// C. "The number is between 1 and 100 inclusive"
// D. "The number is between 101 and 1000 inclusive"
// G. "The number is greater than 1000"

num = + prompt("Insert number:");
if (num < 0) {
    document.write(`${num} is negative`);
}

else if(num === 0)
{
    document.write(`${num} is zero`);
}

else if (num <=100)
{
    document.write(`${num} is between 1 and 100 inclusive`);
}

else if(num <= 1000)
{
    document.write(`${num} is between 101 and 1000 inclusive`);
}
else{
    document.write(`${num} is  greater than 1000`);
}