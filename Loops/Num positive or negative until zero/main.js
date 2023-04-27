// Receive whole numbers from the user, until he enters 0. For each number received, display whether the number is positive or negative.
// When entering 0, there is nothing to say, except to end the loop.
let num =+ prompt("Insert a number:")
while (num != 0)
{
    if (num > 0)
    {
        document.write(`${num} is positive<br>`);
    }
    else{
        document.write(`${num} is negative<br>`);
    }

    num =+ prompt("Insert another number:")

}