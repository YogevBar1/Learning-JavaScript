// 10. Challenge: Create a function that
//  accepts an argument in parentheses that is an 
//  array of numbers.
// The function should display the average array values.
// Called her the first time by sending a hard array.
// Call her a second time by sending an array randomly.

function avgArr(arr)
{
    let sum = 0;
    for(let i =0 ; i< arr.length; i++)
        sum += arr[i];

    const avg = sum / arr.length;
    document.write(`Avg = ${avg}<br>`);

}

avgArr([4,5,6,7,8,9,10]);
avgArr([9,10]);
avgArr([92,4,5,6,7,10]);
avgArr([1,2,3]);
avgArr([1,2,35]);

const arr=[];
for(let i = 0 ; i< 10; i++)
{
    const num = Math.floor(Math.random()*10 +1);
    arr[i] = num;

}
avgArr(arr);
