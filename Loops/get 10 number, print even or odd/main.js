document.write("Get 10 numbers from the user, print even or odd:<br> <br> ");


for(let i = 1 ; i <=10; i = i +1 )
{
   
    const num = +prompt("Insert a number:");

    if(num %2 ===0){
        document.write(`The number ${num} is even <br>`);
    }
    else{
        document.write(`The number ${num} is odd <br>`);
    }
}
