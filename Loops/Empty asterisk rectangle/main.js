//hw13
// Receive from the user a number of width and 
// height of a rectangle, display an empty star
//  rectangle. For example, 
// if a width of 8 and a height of 5 are entered, display:

// * * * * * * * *
// *             *
// *             *
// *             *
// * * * * * * * *

const height = +prompt("Insert height");
const width = + prompt("Insert width");

for (let i = 1; i <= width; i++)
    document.write("* ");
document.write("<br>");

for (let i = 1; i <= height - 2; i++) {
    document.write("* ");
    for (let j = 1; j <= width - 2; j++)
        document.write("&nbsp;&nbsp;&nbsp;");
    document.write("* ");
    document.write("<br>");

}

if (height > 1)
    for (let i = 1; i <= width; i++)
        document.write("* ");