//show all the numbers from 1 to 300:

for(let i = 1; i <=300;i++)
{
    document.write(i +" ");
}

document.write("<br><hr>");

//show all the numbers from -300 to 300:

for(let i = -300; i <=300;i++)
{
    document.write(i +" ");
}

document.write("<br><hr>");

//Accept a positive integer from the user, 
//display all numbers from 1 up to and including edges.

let num =+ prompt("Insert a number");
for(let i = 1; i<= num; i++)
{

    document.write(i +" ");
}

document.write("<br><hr>");

//Accept a positive integer from the user, 
//display all numbers from it up to 1, including edges, in descending order.

num =+ prompt("Insert a number");
for(let i = num ; i >= 1; i--)
{
    document.write(i +" ");
}

document.write("<br><hr>");

//Accept a positive integer from the user, display all the numbers from
// 1 up to and including edges, 
//then all the numbers from it to 1 including edges, in descending order.

num =+ prompt("Insert a number");
for(let i = 1; i<= num; i++)
{

    document.write(i +" ");
}

for(let i = num; i>= 1; i--)
{

    document.write(i +" ");
}
