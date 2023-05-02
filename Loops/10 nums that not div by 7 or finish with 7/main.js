// Pick up 10 numbers from the user
// If the user entered a number 
// that is divisible by seven or ends in seven - exit the loop immediately

alert("Insert ten numbers that not finish by 7 an not divided by seven");

for(let i = 1; i<= 10; i++)
{
    const n =+ prompt("#" + i);
    if(n % 7 ===0 || n % 10 ===7)
        {
            document.write(n + " is wrong input");
            break;
        }

    document.write(`n: ${n}, power n:${n**2}<br>`);
    document.write("<br>");
}