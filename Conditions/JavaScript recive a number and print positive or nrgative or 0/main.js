//Check if the number positive or negative or 0

//Get a number from the user:
const num = +prompt("Insert a number");

if (num > 0) {
    document.write(`${num} is positive`);

}
else if(num < 0)
    {
        document.write(`${num} is negative`);
    }
    else{
        document.write(`${num} is zero`);

    }

