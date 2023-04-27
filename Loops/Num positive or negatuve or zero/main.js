//Receive whole numbers from the user, until he enters 0. For each number received (including the 0 that ends the input),
// display whether the number is positive, negative or zero.

let num = +prompt("Insert a number:");

while (num != 0) {

    if (num > 0) {
        document.write(`${num} is positive <br>`);
    }

    else {
        document.write(`${num} is negative <br>`);
    }

    num = +prompt("Insert another number:");
}

document.write(`${num} is zero `);