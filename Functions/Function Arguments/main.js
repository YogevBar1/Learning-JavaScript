
function printRandomNums(count){
    for(let i =1; i<= count; i++)
    {
        const num = Math.floor(Math.random() * 100) +1;
        document.write(num + " ");
    }
    document.write("<hr>");

}

function displayMax(num1, num2)
{
    if(num1 > num2)
        document.write(`Max number: ${num1}`);
    else
        document.write(`Max number: ${num2}`);
    
    document.write("<hr>");

}

printRandomNums(50);
printRandomNums(130);
printRandomNums(8);
displayMax(244,232);
displayMax(45,65);
displayMax(1234,2452);
displayMax(Math.random() *100 ,Math.random() *100 );

const a =+prompt("Insert num");
const b =+prompt("Insert num");
displayMax(a, b);



