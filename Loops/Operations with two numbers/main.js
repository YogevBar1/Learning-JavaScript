// Receive two numbers from the user, display all the
//  numbers between them in ascending order. 
// It can be assumed that the first is smaller than the second.

let num1 = + prompt("Insert first number");
let num2 = + prompt("Insert second number");

for (let i = num1; i <= num2; i++) {
    document.write(i + " ");
}


document.write("<br><hr>");
//Receive two numbers from the user, display all the numbers
//  between them in ascending order.
//  Do not assume that the first is smaller than the second.
num1 = + prompt("Insert first number");
num2 = + prompt("Insert second number");

if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
        document.write(i + " ");
    }

}

else {
    for (let i = num2; i <= num1; i++) {
        document.write(i + " ");
    }
}




document.write("<br><hr>");
// Receive two numbers from the user, display all the numbers
//  between them in descending order.
//  It can be assumed that the first is smaller than the second.
num1 = + prompt("Insert first number");
num2 = + prompt("Insert second number");

for (let i = num2; i >= num1; i--) {
    document.write(i + " ");
}



document.write("<br><hr>");
// Receive two numbers from the user,
//  display all the numbers between them in descending order.
//   Do not assume that the first is smaller than the second.
num1 = + prompt("Insert first number");
num2 = + prompt("Insert second number");

if (num1 <= num2) {
    for (let i = num2; i >= num1; i--) {
        document.write(i + " ");
    }
}
else{
    for (let i = num1; i >= num2; i--) {
        document.write(i + " ");
    }
}
