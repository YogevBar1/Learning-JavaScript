// Received three numbers from the user: first, 
// last and nom. Display all the numbers between the first 
// and the last that are divisible by num without a remainder
// , in ascending order.
//  It can be assumed that first is smaller than last.

let first = + prompt("Insert first number");
let last = + prompt("Insert last number");
let num = + prompt("Insert num number");

for (let i = first; i <= last; i++) {
    if (i % num == 0)
        document.write(i + " ");
}


document.write("<br><hr>");

// Received three numbers from the user: first, last and num.
//  Display all the numbers between first and last that are divisible by 
//  num without a remainder,
//  in ascending order. Do not assume that first is less than last
first = + prompt("Insert first number");
last = + prompt("Insert last number");
num = + prompt("Insert num number");

if (first < last) {
    for (let i = first; i <= last; i++) {
        if (i % num == 0)
            document.write(i + " ");
    }

}
else {
    for (let i = last; i <= first; i++) {
        if (i % num == 0)
            document.write(i + " ");
    }
}