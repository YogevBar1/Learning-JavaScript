//hw2
// Create a matrix called multiplicationBoard.
// Using a nested loop, insert the values ​​of the multiplication table into it:


// Introduce the matrix.
// Calculate and display the sum of all the numbers.


const multiplicationBoard = [];
for (let i = 0; i <=9; i++) {
    multiplicationBoard[i]=[];
    for (let j = 0; j <= 9; j++)
        multiplicationBoard[i][j] =(i +1) *(j+1);
}

for (let i = 0; i < multiplicationBoard.length; i++) {
    for (let j = 0; j < multiplicationBoard[i].length; j++)
       document.write( multiplicationBoard[i][j]+" ");
    document.write("<br>");
}

document.write("<br>");

let sum =0;
for (let i = 0; i < multiplicationBoard.length; i++) {
    for (let j = 0; j < multiplicationBoard[i].length; j++)
       sum += multiplicationBoard[i][j];
    
}

document.write(`Sum = ${sum}`);