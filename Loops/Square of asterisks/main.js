//Accept number n from the user, display a square filled with stars of size n by n.
//For example, if the user entered 4, display:
// * * * *
// * * * *
// * * * *
// * * * *

const n = +prompt("Insert a number:");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++){
        document.write("* ");

    }
    document.write("<br>");
       
}