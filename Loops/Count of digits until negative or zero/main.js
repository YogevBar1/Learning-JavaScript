//HW 15

// Accept numbers from the user repeatedly 
// until they enter 0 or a negative number.
// For each number entered 
// (without the 0 or negative terminating 
//     the input) display
//  what the number of digits of the number is.

let num =+ prompt("Insert number");

while(num > 0)
{
    let num2 = num;//save the value of the number in order to print it
    let countDigits = 0;
    while(num > 0)
    {
        countDigits ++;
        num = parseInt(num / 10);
    }
    document.write(`The count of digits of ${num2}  =  ${countDigits}<br>`);
    num =+ prompt("Insert another number");
}