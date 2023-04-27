//Accept whole numbers from the user, until he enters a number that is divisible by 7 without 
//a remainder. For each number entered (including the number divisible by 7 without a remainder 
//ending the entry),
// display whether it is positive, negative, or 0.

let num =1;
while ((num % 7) != 0)
{
    num =+prompt ("Insert a number:");
    if(num > 0)
        {
            document.write(`${num} is positive<br>`);
        }
    else if (num < 0)
    {
        document.write(`${num} is negative<br>`);

    }

    else{
        document.write(`${num} is zero<br>`);
    }


}