// Accept a number from the user, display the sum of its digits.
// For example, if the user entered: 8415, 18 should be displayed 
// because it is the sum of the digits.
// For example, if the user entered: 7, 7 should be 
// displayed because it is the sum of the digits.
// Accept a number from the user, display his number of digits.
// For example, if the user entered: 8415 4 should be displayed 
// because that is the number of digits.
// For example, if the user entered: 7 1 should be displayed 
// because that is the number of digits.



let num =+ prompt(`Insert number`);
let digitSum = 0 , countDigit =0;


while(num > 0)
{
    digitSum = digitSum + (num % 10);
    num = Math.floor(num / 10);
    countDigit++;
}

document.write(`The sum of digits = ${digitSum}<br>`);
document.write(`The count of digits = ${countDigit}`);