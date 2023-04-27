//Accept whole numbers from the user, until a negative number is entered. For each number entered 
//(including the negative number that ends the entry),
// display its third power (the number multiplied by itself 3 times).

let num = 1;
while (num >= 0 ) 
{
    num =+ prompt("Insert a number:");

    document.write(`${num} in power of 3 = ${num **3}<br>`);
}