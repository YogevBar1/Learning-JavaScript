// 9. Challenge: Create a function
//  that accepts an argument in parentheses that
//  is an array of numbers.
// The function must display the array.
// Called her the first time by sending a hard array.
// Call her a second time by sending an array randomly.



function printArr(arr)
{
    for(let i =0 ; i< arr.length; i++)
        document.write(arr[i] + " ");
}

printArr([4,5,6,3,6,7,7,3,6,3]);
document.write("<br>");


let arr = [];
for(let i= 0 ; i<=9; i++){
    const num = Math.floor(Math.random()*10 +1);
    arr[i] = num;
}

printArr(arr);