// Display all the numbers from 1 to 1000.

for (let i = 1; i <= 1000; i++) {
    document.write(i + " ");
}

document.write("<br><hr>");
// Display all the even numbers from 1 to 1000.

for (let i = 2; i <= 1000; i = i + 2) {
    document.write(i + " ");
}



document.write("<br><hr>");
//Display all odd numbers from 1000 to 2000.

for (let i = 1001; i <= 2000; i = i + 2) {
    document.write(i + " ");
}

document.write("<br><hr>");
//Display all the numbers from 1000 to 1 (descending order).

for (let i = 1000; i >= 1; i--) {
    document.write(i + " ");
}

document.write("<br><hr>");
//Display all the even numbers from 1000 to 1 (descending order).
for (let i = 1000; i >= 1; i = i - 2) {
    document.write(i + " ");
}

document.write("<br><hr>");
//Display all odd numbers from 1000 to 1 (descending order).
for (let i = 999; i >= 1; i = i - 2) {
    document.write(i + " ");
}


document.write("<br><hr>");
// Accept the number n from the user,
//  display all the numbers divisible by 3 without a remainder, from 1 to n.
const n = + prompt("insert a number");

for (let i = 3; i <= n; i = i + 3) {

    document.write(i + " ");

}

document.write("<br><hr>");
//Accept number n from the user, display all the 
//numbers from 1 to n and then again all the numbers from n to 1.
for(let i =1; i<= n; i++)
{
    document.write(i +" ");
}

for(let i =n ; i>= 1; i--)
{
    document.write(i +" ");
}