// Accept numbers from the user repeatedly until a negative number is entered.
// For each number entered (including the negative one that ends the entry) - 
// present its third power (the number in the 3rd power).

let num =1;
while(num >= 0)
{
    num =+ prompt("Insert number");
    document.write(`${num} **3 = ${num ** 3}<br>`);
}

document.write("<br><hr>");
// Accept numbers from the user repeatedly until a negative number is entered.
// For each number entered (not including the negative one that ends the entry) - 
// present its third power (the number in the 3rd power).

num =+prompt("Insert a number");
while(num >= 0)
{    
    document.write(`${num} **3 = ${num ** 3}<br>`);
    num =+ prompt("Insert another number");
}