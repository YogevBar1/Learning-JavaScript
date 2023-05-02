//HW14
// Accept numbers from the user repeatedly
//  until they enter 0 or a negative number.
// For each number entered (without the 0
//      or negative ending the entry) display
//       what the sum of the digits of the number is.

let num =+ prompt("Insert number");

while(num > 0)
{
    let num2 = num;//save the value of the number in order to print it
    let sumDigits = 0;
    while(num > 0)
    {
        sumDigits += num % 10;
        num = parseInt(num / 10);
    }
    document.write(`The sum of digits of ${num2}  =  ${sumDigits}<br>`);
    num =+ prompt("Insert another number");
}