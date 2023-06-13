"use strict";
// 5. Create a 10x10 matrix with random values.
// Create a function that accepts a matrix and returns the average of its values.
// Call her, send the matrix, present the average.
// What is the complexity of the function?


function test() {

    const mat =[];
    for (let i = 0; i <= 9; i++) {
        mat[i]=[];
        for (let j = 0; j <= 9; j++) {
            const num = Math.floor(Math.random() * 100);
            mat[i][j] = num;
        }
    }
    const avg = avgMat(mat);
    document.write(`The avg of the mat = ${avg}`);
}

// O(n**2)
function avgMat(mat) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            sum += mat[i][j];
            count++
        }
    }
    const avg = sum/count;
    return avg;
}