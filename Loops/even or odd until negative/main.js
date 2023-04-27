// Accept numbers from the user repeatedly, until a
//  negative number is entered. Display how many even
//   numbers were picked up and
//  how many odd numbers were picked up

let num =+ prompt("Insert a number");
let countOdd= 0 , countEven =0;
while(num >= 0 )
{
    if(num % 2 ===0)
        countEven++;
    else    
        countOdd++;
    
    num =+ prompt("Insert another number");
}

document.write(`Even numbers: ${countEven}<br>`);
document.write(`Odd numbers: ${countOdd}`);