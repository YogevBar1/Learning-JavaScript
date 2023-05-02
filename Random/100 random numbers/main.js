// 100 random numbers between 1 to 10 including 1 and 10

for(let i =1; i <= 100; i++)
{
    const num = Math.floor(Math.random() * 10) +1;
    document.write(num + " ");
}


document.write("<br><hr>");

// 6 numbers between 1 to 37 including

for(let i =1; i <= 6; i++)
{
    let n = Math.floor(Math.random() *37)+ 1;
    document.write(n + " ");
}
