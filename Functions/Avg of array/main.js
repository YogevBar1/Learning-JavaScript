function getAverage(arr) {
    let sum = 0;
    for (const item of arr)
        sum += item;
    const avg = sum / (arr.length);
    return avg;
}

const avg = getAverage([2, 4, 6, 8]);
document.write(`Avg = ${avg}`);



document.write("<br>");

function getMin(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) return num1;
    if (num2 < num3) return num2;
    return num3;
}

const min = getMin(3, 6, 5);
document.write(`Min = ${min}`);

document.write("<br>");



function isNumInArr(num, arr) {
    for (let i = 0; i < arr.length; i++)
        if (num === arr[i])
            return i;
    return -1;
}

document.write(isNumInArr(4, [4, 5, 6, 3, 6, 2]) + "<br>");
document.write(isNumInArr(14, [4, 5, 6, 3, 6, 2]) + "<br>");
document.write(isNumInArr(4, [2, 3, 4, 6, 2]) + "<br>");