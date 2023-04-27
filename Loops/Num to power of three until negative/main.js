// Accept whole numbers from the user, until a negative number is entered.
// For each number taken in, display its third power (the number multiplied by itself 3 times). 
//When entering a negative number - do not display anything, but end the loop.

let num =+prompt("Insert a number");

while (num >= 0)
{
    document.write(`${num} in power of 3 = ${num ** 3}<br>`);
    num =+prompt("Insert another number");
}