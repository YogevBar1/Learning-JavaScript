// Accept the number n from the user, 
//display a triangle as a function of n according to the following
// format (example that n equals 5):
// * * * * *
// * * * *
// * * *
// * *
// *

let n =+prompt("Insert a number:");
for(let i = n; i >= 1; i--)
{
    for(let j = 1; j <= i; j++)
    {
        document.write("* ");
    }
    document.write("<br>");
}




document.write("<br><hr>")
// Accept the number n from the user, display a triangle as a function of
//  n according to the following format (example that n equals 5):
// 1
// 1 2
// 1. 2. 3
// 1 2 3 4
// 1 2 3 4 5

n =+prompt("Insert a number:");
for(let i = 1; i <= n ; i++)
{
    for(let j=1; j<= i; j++)
    {
        document.write(j + " ")
    }
    document.write("<br>")
}

document.write("<br><hr>");
// Accept the number n from the user,
//  display a square as a function of n according to the
//   following format (example that n equals 5):
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

n =+prompt("Insert a number:");
for(let i =1; i<= n; i++)
{
    for(let j =n; j >= 1; j-- )
    {
        document.write(j +" ");

    }

    document.write("<br>");
}
