// Show 10 random numbers
// show the bigger number from them

let max=0;
for(let i = 1; i<=10; i++)
{
    const num = Math.floor(Math.random()* 1000 )+1;
    document.write(i + " number = " + num +"<br>" );

    if(num > max)
        max = num;
}

document.write("The max number is : " + max);