//hw7
// Receive a number n from the user, 
// display a triangle as a function of
//  n according to the following format
//  (example where n equals 5):
// * * * * *
// * * * *
// * * *
// * *
// *

let n = + prompt("Insert number");
for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--)
        document.write("* ");
    document.write("<br>");
}


document.write("<br><hr>");

//hw8
//  Accept the number n from the user,
// display a triangle as a function of n according
//to the following format (example that n equals 5):
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
n = + prompt("Insert number");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");

    document.write("<br>");
}



document.write("<br><hr>");
//hw9
// Receive a number n from the user,
//  display a square as a function of n
//   according to the following format
//    (example where n equals 5):
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
n = + prompt("Insert number");
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--)
        document.write(j + " ");
    document.write("<br>");
}


document.write("<br><hr>");
//hw 10
// Receive a number n from the user,
//  display the following form as a function
//   of n (example that n equals 5):
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

n = + prompt("Insert number");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}

document.write("<br><hr>");
//hw 11
// Receive a number n from the user,
//  display the following form as a function
//   of n (example that n equals 5):
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

n = + prompt("Insert number");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}
for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}

document.write("<br><hr>");
//hw 12
//Accept the number n from the user, 
//present the following form as a function of n
// (example that n equals 5):
// 1
// 1 2 3
// 1 2 3 4 5
// 1 2 3
// 1

n = + prompt("Insert number");
for (let i = 1; i <= n; i += 2) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}
if (n % 2 === 0) {
    for (let i = 1; i <= n; i++)
        document.write(i + " ");
    document.write("<br>");
    
    //adding 1 to n because i want the next
    // row will be until the odd number that low from n
    n++;

}

for (let i = n - 2; i >= 1; i -= 2) {
    for (let j = 1; j <= i; j++)
        document.write(j + " ");
    document.write("<br>");
}
