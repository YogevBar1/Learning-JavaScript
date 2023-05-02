// A 10-long square of asterisks

for(let i =1; i<=10 ;i++)
{
    for(let j = 1; j<=10; j ++)
    {
        document.write("* ");
    }
    document.write("<br>");
}

document.write("<br><hr>");

// A -long square of #
let n =+prompt("Insert a number");
for(let i =1; i<=n ;i++)
{
    for(let j = 1; j<=n; j ++)
    {
        document.write("# ");
    }
    document.write("<br>");
}


// A rectangle of number, length and width according to 
// the user's requirement
// for example height = 3 , width =5
// will give
// 1 2 3 4 5 
// 1 2 3 4 5 
// 1 2 3 4 5 


document.write("<br><hr>");
let height = +prompt("Insert height");
let width = +prompt("Insert width");


for(let i =1; i<= height ;i++)
{
    for(let j = 1; j<= width; j ++)
    {
        document.write(j + " ");
    }
    document.write("<br>");
}


document.write("<br><hr>");
// A number n was and char ch received from the user 
//  displayed a square of size N by N built from ch

const ch = prompt("Insert char");
n =+prompt("Insert number");

for(let i =1; i<= n; i++)
{
    for(let j=1 ; j<= n; j++)
        {
            document.write(ch + " ");
        }
        document.write("<br>");

}

document.write("<br><hr>");
// Accept a number n from the user and display a
//  square of size n by n made up of descending numbers
n =+prompt("Insert number");
for(let i =1; i<= n ; i++)
{
    for(let j=n ; j>= 1; j--)
    {
        document.write(j+ " ");
    }
    document.write("<br>");
}



