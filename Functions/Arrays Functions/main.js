// 1. Create a function that accepts in parentheses one argument
//  which is an array of numbers. The function must calculate and return
//   the average of the array values. 3 times each time they
//  sent her another one. Each time get the result and present it.

function avgArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    const avg = sum / arr.length;
    return avg;
}


document.write("Avg nums:<br>");
document.write("<br>");

document.write(avgArr([5, 6, 7]) + "<br>");
document.write(avgArr([54, 632, 27]) + "<br>");
document.write(avgArr([0, 2, 10]) + "<br>");
document.write(avgArr([7, 9, 7]) + "<br>");
document.write(avgArr([52, 65, 27]) + "<br>");

// 2. Create a function that accepts in parentheses one 
// argument which is an array of numbers. The function must
//  calculate and return the minimum value in the array. They 
//  called her 3 times, each time they sent
//  her a different array. Each time get the result and present it.

function minArr(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] < min)
            min = arr[i];

    return min;


}

document.write("<br><hr>");

document.write("Min nums:<br>");
document.write(minArr([5, 6, 7]) + "<br>");
document.write(minArr([54, 632, 27]) + "<br>");
document.write(minArr([0, 2, 10]) + "<br>");
document.write(minArr([7, 9, 7]) + "<br>");
document.write(minArr([52, 65, 27]) + "<br>");



// 3. Create a function that accepts in parentheses one 
// argument which is an array of strings. The function must
//  calculate and return the length of the longest string in
//   the array (ie returns a number). They called her 3 times,
//    each time they sent her a 
// different array. Each time get the result and present it.

function theLengthOfTheLongestStringInArr(arr) {
    maxLength = -1;
    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > maxLength)
            maxLength = arr[i].length;

    return maxLength;
}

document.write("Max length of string:<br>");
document.write(theLengthOfTheLongestStringInArr(["5, 6, 7", "fsdsdffsdfds", "sdffds"]) + "<br>");
document.write(theLengthOfTheLongestStringInArr(["gdf", "fsdsdffffffsdfds", "dgfgdgggdg"]) + "<br>");
document.write(theLengthOfTheLongestStringInArr(["aaaaaaaaaaaaaa", "bb", "c"]) + "<br>");


// 4. Create a function that accepts in parentheses one argument
//  which is an array of strings. The function must calculate and
//   return the longest string in the array (ie returns a string).
//    They called her 3 times, each time they sent her
//  a different array. Each time get the result and present it.

function longestStringInArr(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > longest.length)
            longest = arr[i];
    return longest;


}



document.write("Longest string:<br>");
document.write(longestStringInArr(["5, 6, 7", "fsdsdffsdfds", "sdffds"]) + "<br>");
document.write(longestStringInArr(["gdf", "fsdsdffffffsdfds", "dgfgdgggdg"]) + "<br>");
document.write(longestStringInArr(["aaaaaaaaaaaaaa", "bb", "c"]) + "<br>");


// 5. Create a function that accepts in parentheses one argument which is an array of numbers. 
// The function must calculate and return some numbers greater than or equal to the average of
//  the array values. They called her 3 times,
//  each time they sent a different array. Each time get the result and present it.


function howManyBiggerThenAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    const avg = sum / arr.length;
    let count = 0;

    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= avg)
            count++;

    return count;

}

document.write("How many numbers bigger than average:<br>");
document.write(howManyBiggerThenAvg([4, 5, 6, 7, 4, 7, 4, 7, 4]) + "<br>");
document.write(howManyBiggerThenAvg([14, 45, 56, 375, 34, 7, 4, 7, 4]) + "<br>");
document.write(howManyBiggerThenAvg([4, 5, 6, 7, 4, 72, 42, 37, 54]) + "<br>");

// 6. Create a function that receives an array, calculates
//  the index of the minimum number in it and returns the index.
//   If there are the same minimum number of members - return the 
//   first index. They read it 3 times, each time they sent a different array, 
// each time they received the result and presented it.

function indexOfMin(arr) {

    let indexMin = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[indexMin])
            indexMin = i;

    }

    return indexMin;
}

document.write("Index of min in arr:<br>");
document.write(indexOfMin([4, 5, 6, 7, 4, 7, 4, 7, 4]) + "<br>");
document.write(indexOfMin([14, 45, 56, 375, 34, 7, 4, 7, 4]) + "<br>");
document.write(indexOfMin([0, 5, 6, 7, 4, 72, 42, 37, 54]) + "<br>");
document.write(indexOfMin([4, 5, 6, 7, 4, 72, 42, 2, 37, 54]) + "<br>");
document.write(indexOfMin([4, 5, 6, 7, -4, 72, 42, 2, 37, 54]) + "<br>");

// 7. Create a function that receives a matrix of numbers. 
// The function should calculate the maximum 
// number of the matrix and return it. They checked her.

function maxInMatrix(mat) {
    let max = mat[0][0];

    for (let i = 0; i < mat.length; i++)
        for (let j = 0; j < mat[i].length; j++)
            if (mat[i][j] > max)
                max = mat[i][j];
    return max;
}



document.write("Avg value in matrix:<br>");
document.write(maxInMatrix([[4, 5, 6, 17], [4, 7, 4], [4, 7, 4]]) + "<br>");
document.write(maxInMatrix([[4, 5, 6, 17, 4, 7], [4, 117, 4], [4, 17, 4]]) + "<br>");
document.write(maxInMatrix([[4, 5, 6, 17, 4, 7], [4, 7, 444], [4, 37, 4]]) + "<br>");


// 8. Create a function that receives a matrix of numbers. The function must calculate and 
// return the average of the matrix values. They checked her.

function avgInMatrix(mat) {
    let sum = 0, count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
            count++;
        }
    }
    const avg = sum / count;
    return avg;
}


document.write("Avg value in matrix:<br>");
document.write(avgInMatrix([[4, 5, 6, 17], [4, 7, 4], [4, 7, 4]]) + "<br>");
document.write(avgInMatrix([[4, 5, 6, 17, 4, 7], [4, 117, 4], [4, 17, 4]]) + "<br>");
document.write(avgInMatrix([[4, 5, 6, 17, 4, 7], [4, 7, 444], [4, 37, 4]]) + "<br>");
document.write(avgInMatrix([[4, 54, 6, 17, 4, 7], [4, 75, 444], [4, 347, 4]]) + "<br>");
document.write(avgInMatrix([[4, 5, 26, 17, 34, 7], [4, 7, 4444], [4, 337, 4]]) + "<br>");
document.write(avgInMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]) + "<br>");


// 9. Create a function that accepts a matrix containing the multiplication
//  table. The function must check if indeed the matrix contains a valid 
//  multiplication table. If so - return true, if not - return false. They
//   checked it by sending an incorrect
//  multiplication table and by sending a valid multiplication table.

function isValidMultiplicationTable(mat) {
    for (let i = 0; i < mat.length; i++)
        for (let j = 0; j < mat[0].length; j++)
            if (mat[i][j] !== (i + 1) * (j + 1))
                return false;
    return true;
}

const multiplicationTable = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
    [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
    [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
];

const notMultiplicationTable = [
    [11, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 4, 16, 8, 10, 12, 14, 16, 18, 20],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
    [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
    [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
];

document.write("Is valid Multiplication Table :<br>");
document.write(isValidMultiplicationTable(multiplicationTable) + "<br>");
document.write(isValidMultiplicationTable(notMultiplicationTable));

// 10.  Create a function that accepts a number. The 
//   function must return true if the number received a 
//   prime number (divisible by itself and 1 only) 
//   or false if the number received is not prime. They checked her.

function isPrime(num) {
    if(num === 1) return false;

    const limit =Math.floor(Math.sqrt(num));


    for (let i = 2; i <= limit; i++)
        if (num % i === 0)
            return false;

    return true;
}


document.write("<br>Is Prime number :<br>");

document.write(isPrime(5) + "<br>");
document.write(isPrime(15) + "<br>");
document.write(isPrime(75) + "<br>");
document.write(isPrime(51) + "<br>");
document.write(isPrime(7) + "<br>");



// 11. Create a function that receives an array of numbers.
//  The function must return true if all the numbers in the
//   array are prime. If not - return false. The function must use the 
// function you wrote in the previous section. They checked her.
function isAllTheArrPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i]))
            return false;
    }

    return true;
}

document.write("<br>Is All the arr have Prime number :<br>");

document.write(isAllTheArrPrime([5, 7, 3]) + "<br>");
document.write(isAllTheArrPrime([15, 2, 53, 234]) + "<br>");
document.write(isAllTheArrPrime([17, 11, 13, 7]) + "<br>");



// 12. Create a function that accepts two arguments:
//  minimum and maximum. The function must return a random
//   number in the received range, including edges. For example, 
//   if you got 10 and 20, you'll draw a random number between 10
//    and 20 (including edges) and return it.
//  Call it 3 times, each time show the returned number.

function randomNumBetweenStartToEnd(start, end) {
    const num = Math.floor(Math.random() * (end - start + 1) + start);
    return num;
}


document.write("<br>Random numbers:<br>");

document.write(randomNumBetweenStartToEnd(1, 10) + "<br>");
document.write(randomNumBetweenStartToEnd(15, 50) + "<br>");
document.write(randomNumBetweenStartToEnd(150, 500) + "<br>");



// 13. Challenge: Create a function that accepts an argument
//  in parentheses that is the size of an array. On the array 
//  function filled with random numbers (any number between 1 and 
//     100 including edges) and return the array. 3 times, each time
//      send each time again display the returned array.
//  Additional functions you wrote must be used for this purpose.


function arrOfRandomNum(size) {
    let arr = [];
    for (let i = 0; i < size; i++)
        arr[i] = randomNumBetweenStartToEnd(1, 100);
    return arr;
}

document.write("<br>Random Arrays:<br>");
document.write(arrOfRandomNum(50));
document.write("<br>");
document.write(arrOfRandomNum(15));
document.write("<br>");
document.write(arrOfRandomNum(35));

