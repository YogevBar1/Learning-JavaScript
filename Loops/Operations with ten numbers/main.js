// Collect 10 numbers from the user, display their sum and average.
let sum = 0;
for(let i =1; i<= 10; i++)
{
    let num =+ prompt("Insert number");
    sum = sum + num;

}

document.write(`The sum = ${sum}<br>`);
document.write(`The average = ${sum / 10 }`);




document.write("<br><hr>");
// Receive 10 numbers from the user, display the largest and lowest number received.
let max =+prompt("insert first number");
let min = max;
for(let i =1; i<= 9; i++)
{
    num =+ prompt("Insert another number");
    if(num > max)
        max = num;
    if(num < min)
        min = num;

}
document.write(`The max number is ${max}<br>`);
document.write(`The min number is ${min}<br>`);

document.write("<br><hr>");
//Received 10 numbers from the user, show how many even numbers were
// received and how many odd numbers were received.

let oddCount = 0 , evenCount = 0;
for(let i =1; i<= 10; i++)
{
    let num =+ prompt("Insert number");
    if(num % 2 ===0)
        evenCount++;
    else    
        oddCount++;
    
}

document.write(`even numbers = ${evenCount}<br>`);
document.write(`odd numbers = ${oddCount}<br>`);