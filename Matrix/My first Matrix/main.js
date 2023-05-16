

const mat = [[1, 2, 3] //0
    , [4, 5, 6, 7, 8], //1
[7, 8, 9]]; //2

document.write(mat + "<br>");

document.write(mat[1][2] + "<br>"); //6

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++)
        document.write(`Row ${i} , Col: ${j} ---> ${mat[i][j]}<br>`);
}

document.write("<br><hr>");


//print the matrix in 2d:
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++)
        document.write(` ${mat[i][j]} `);
    document.write("<br>");
}



document.write("<br><hr>");
//random matrix
const randomMatrix = [];

//adding 5 arrays:
for (let i = 1; i <= 5; i++) {
    //create single array
    const arr = [];
    //Init single array

    for (let j = 1; j <= 15; j++) {
        const n = Math.floor(Math.random() * 100);
        arr.push(n);
    }
    //adding the array to matrix
    randomMatrix.push(arr);
}

//print the matrix in 2d:
for (let i = 0; i < randomMatrix.length; i++) {
    for (let j = 0; j < randomMatrix[i].length; j++)
        document.write(` ${randomMatrix[i][j]} `);
    document.write("<br>");
}

//calculate sum , avg
document.write("<br><hr>");
let sum = 0;
for (let i = 0; i < randomMatrix.length; i++) {
    for (let j = 0; j < randomMatrix[i].length; j++)
        sum += randomMatrix[i][j];

}

document.write(`The sum of the matrtix = ${sum}<br>`);

let countNums = 0;
for (let i = 0; i < randomMatrix.length; i++) {
    for (let j = 0; j < randomMatrix[i].length; j++)
        countNums++;

}

let avg = sum / countNums;

document.write(`The Average of the matrtix = ${avg.toFixed(2)}`);



document.write("<br><hr>");
//print only even numbers, instead odd number, display some emoji

for (let i = 0; i < randomMatrix.length; i++) {
    for (let j = 0; j < randomMatrix[i].length; j++)
    {
        if(randomMatrix[i][j] % 2 ===0 )
            document.write(` ${randomMatrix[i][j]} `);
        else
            document.write("😊");
    }
    document.write("<br>");
}
