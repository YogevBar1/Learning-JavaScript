// Take a number n and present a triangle as a function of n


let n = +prompt("Insert number");
for(let i =1 ; i<=n ;i++)
{
    for(let j = 1;j<=i; j++)
    {
        document.write("$ ");
    }
    document.write("<br>");
}