// Accept whole numbers from the user, until he enters a number that is divisible by 7 without 
//a remainder. For each number received, display whether it is positive, negative or 0. 
//When entering a number divisible by 7 without a remainder, 
//nothing should be displayed but the loop should be terminated.

let num = +prompt("Insert a number:");
while ((num % 7) != 0) {

    if (num > 0) {
        document.write(`${num} is positive <br>`);
    }

    else if (num < 0) {

        document.write(`${num} is negative <br>`);
    }
    

    num = +prompt("Insert another number:");
}