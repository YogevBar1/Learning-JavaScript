// A "count" random numbers between start to end
// Including both of them


const start =+ prompt("Insert start");
const end =+ prompt("Insert end");
const count =+prompt("How many random numbers you want?")

for(let i = 1; i<= count;i++)
{
const num = Math.floor(Math.random()*(end- start + 1))+start;
document.write("Random number: " + num+ "<br>");


}