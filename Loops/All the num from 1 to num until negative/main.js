// Accept numbers from the user repeatedly until they enter 0
//  or a negative number. For each number entered 
//  (without the 0 or the negative number that ends the entry) 
// - display all the numbers from it to 1 in descending order

let num =+prompt("Insert number");

while(num > 0)
{
    for(let i = num; i>= 1; i--)
    {
        document.write(i +" ");
    }
    document.write("<br><br>");

    num =+prompt("Insert another number:");
}