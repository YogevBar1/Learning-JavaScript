//Accept two whole numbers from the user (presumably the first one is smaller), display all the numbers between them,
// including edges, from smallest to largest.

let num1 = + prompt("Insert First number:");
let num2 = + prompt("Insert Second number:");

for (let i = num1; i <= num2; i++) {
    document.write(i + " ");
}


document.write("<br><hr> ");

//Accept two whole numbers from the user (do not assume that the first one is smaller), display all the numbers between them,
// including edges, from the smallest to the largest.


num1 = + prompt("Insert First number:");
num2 = + prompt("Insert Second number:");

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        document.write(i + " ");
    }
}

else {
    for (let i = num2; i <= num1; i++) {
        document.write(i + " ");
    }
}



document.write("<br><hr> ");

// Accept two whole numbers from the user (do not assume that the
// first one is smaller), display all the numbers between them, which end in 7, 
//or are divisible by 7, from smallest to largest including edges.

num1 = + prompt("Insert First number:");
num2 = + prompt("Insert Second number:");

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if ((i % 7) == 0 || (i % 10) == 7) {
            document.write(i + " ");
        }
    }
}

else {
    for (let i = num2; i <= num1; i++) {
        if ((i % 7) == 0 || (i % 10) == 7) {
            document.write(i + " ");
        }
    }
}