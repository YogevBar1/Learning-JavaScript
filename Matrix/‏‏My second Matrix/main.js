//hw1
// Create the following matrix:
// const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];
// Present:
// A. the entire matrix.
// B. all values.
// third. the average of all values.
// d. the maximum number in the matrix.
// God. the minimum number in the matrix.
// and. the matrix, but only the numbers divided by 7 without a remainder,
//  when instead of every other die an emoji must be presented.



const matrix = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40]];
for(let i = 0;i<matrix.length;i++)
{
    for(let j =0 ; j< matrix[i].length;j++)
        document.write(matrix[i][j]+" ");
    document.write("<br>");
}

let sum = 0;
for(let i = 0;i<matrix.length;i++)
{
    for(let j =0 ; j< matrix[i].length;j++)
        sum += matrix[i][j]
}
document.write(`Sum = ${sum}<br>`);

let max = -Infinity;
for(let i = 0;i<matrix.length;i++)
{
    for(let j =0 ; j< matrix[i].length;j++)
        if(max < matrix[i][j])
            max = matrix[i][j];
}
document.write(`Max = ${max}<br>`);

let min = Infinity;
for(let i = 0;i<matrix.length;i++)
{
    for(let j =0 ; j< matrix[i].length;j++)
        if(min > matrix[i][j])
            min = matrix[i][j];
}
document.write(`Min = ${min}<br>`);

document.write("<br><hr>");
for(let i = 0;i<matrix.length;i++)
{
    for(let j =0 ; j< matrix[i].length;j++)
    {
        if(matrix[i][j] % 7 === 0 )
            document.write(matrix[i][j]+" ");
        else    
            document.write("😊");
    }
    document.write("<br>");
}


