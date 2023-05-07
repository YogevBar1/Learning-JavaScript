//Create an empty array, put 10 whole random numbers into
// it, any number between 1 and 100.
// Display the maximum number. Enter the minimum number.

const arr = [];
for(let i =1; i<=10 ; i++)
    {
        const num= Math.floor(Math.random() * 100) +1;
        arr.push(num);
    }

let max =0, min =101;
for(item of arr)
{
    if(item > max)
        max= item;
    
    if(item < min)
        min = item;
}

document.write(`The max number: ${max}<br>`);
document.write(`The min number: ${min}`);
