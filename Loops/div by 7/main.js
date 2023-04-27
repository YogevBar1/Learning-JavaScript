// Accept numbers from the user repeatedly until he enters 0.
// For each number entered (including the 0 that ends the entry) - 
// present whether it is divisible by 7 without a remainder or not.

let num = 1;
while (num != 0) {
    num = + prompt("Insert a number");
    if (num % 7 === 0) {
        document.write(`${num} is divided by 7<br>`);
    }
    else {
        document.write(`${num} is not divided by 7<br>`);
    }

}


// Accept numbers from the user repeatedly until he enters 0.
// For each number entered (not including the 0 that ends the entry) - 
// present whether it is divisible by 7 without a remainder or not.
document.write("<br><hr>");
num = + prompt("Insert number");

while (num != 0) {
    if (num % 7 === 0) {
        document.write(`${num} is divided by 7<br>`);
    }
    else {
        document.write(`${num} is not divided by 7<br>`);
    }
    num = + prompt("Insert another number");

}