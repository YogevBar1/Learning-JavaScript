//HW6
// Get the width and height of a rectangle from the user.
// Display a rectangle filled with asterisks of the received width and height.
// For example, if a user entered a width of 8 and a height of 5, the following rectangle should be displayed:
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *


const hight =+ prompt("Insert hight");
const width =+ prompt("Insert width");

for(let i = 1; i<= hight; i++)
{
    for(let j = 1; j<= width; j++)
        document.write("* ");
    document.write("<br>");
}