//Recive two numbers and show the bigger, 
// if they even so show one of them

const num1 =+prompt("Insert first number");
const num2 =+prompt("Insert second number");

if(num1 > num2)
{
    document.write(`${num1} is bigger than ${num2}`);
}
else{
    document.write(`${num2} is bigger than ${num1}`);
}