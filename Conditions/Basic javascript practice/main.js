//Get two Num and show the bigger
const num1 = +prompt("Insert first number");
const num2 = +prompt("Insert second number");

if(num1 > num2)
{
    document.write(`${num1} is bigger<br>`);

}

else{
    document.write(`${num2} is bigger<br>`);

}


//Get a number and show if it divisible by five or not
const num3 = +prompt("Insert a number");
if(num3 % 5 ===0)
{
    document.write(`${num3} divisible by five<br>`);

}

else{
    document.write(`${num3} not divisible by five<br>`);

}
