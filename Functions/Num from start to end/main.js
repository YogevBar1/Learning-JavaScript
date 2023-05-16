// 11. Create a function that accepts two arguments: start and end.
// The function must display the page a random number in the range 
// sent to it (between start and end including edges).
// Call for action the first time by sending two hard numbers.
// Call the function a second time by sending two numbers from the user.
// Call the function 100 times to display 100 random numbers between
//  (10-) and (10+).


function randomNum(start , end)
{
    const num = Math.floor(Math.random()*(end-start + 1) + start);
    document.write(num + "<br>");
}

randomNum(51,536);
randomNum(521,5136);

const start =+ prompt("Insert start");
const end =+ prompt("Insert end");
randomNum(start , end);

for(let i =1; i<=100;i++)
    randomNum(-10,10);
