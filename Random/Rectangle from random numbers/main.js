// Build a rectangle from a random numbers between 1 to 9

const hight =+ prompt("Insert height:");
const width =+ prompt("Insert width:");

for(let i = 1; i<= hight; i++)
{
    for(let j =1; j<= width; j++)
        document.write(Math.floor(Math.random() * 10) + " ");

        document.write("<br>");
}
