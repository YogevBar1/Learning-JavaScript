// 2. Create an empty array. By the experiment loop to it 20 objects where each object describes a point in space containing x and y (the position of the point on the x-axis and y-axis).
// The values ​​must be drawn randomly, each value of x or y is a random number between 0 and 100 including edges.
// By functions belonging to the array object (such as for each, filter, find, map, reduce, etc.) display the following:
// A. The array itself - a display of x and y - each pair in its own row.
// B. The first object x is greater than y.
// third. the first object for which is greater than 50.
// d. all objects for which x is odd.
// God. all objects for which and is greater than 50.
// and. the index of the object with x greater than 50.
// G. For each point - the distance from the beginning of the painters.
// H. the minimum x.
// ninth. the point object with the minimum x.

"use strict";

const arr=[];
for(let i=0;i<=19;i++){
    arr[i]={x : Math.floor(Math.random()*101),
    y : Math.floor(Math.random()*101)};
}

arr.forEach((point)=>{
    document.write(`X: ${point.x} ,Y:${point.y}<br>`);
});

document.write("<hr><br>");
const firstPointXBigY = arr.find((point)=> {return point.x>point.y});
document.write(`The first point where X bigger Y is: X:${firstPointXBigY.x} , Y:${firstPointXBigY.y}`);

document.write("<hr><br>");
const firstPointYBigger50 = arr.find((point)=> {return point.y > 50});
document.write(`The first point where X bigger Y is: X:${firstPointYBigger50.x} , Y:${firstPointYBigger50.y}`);

document.write("<hr><br>");
const pointsWithOddX = arr.filter((point) => point.x % 2!==0);
document.write("Points with odd X: <br>");
pointsWithOddX.forEach((point)=>{
    document.write(`X: ${point.x} ,Y:${point.y}<br>`);
});

document.write("<hr><br>");
const pointsWithYBigger50 = arr.filter((point) => point.y > 50);
document.write("Points with Y bigger 50: <br>");
pointsWithYBigger50.forEach((point)=>{
    document.write(`X: ${point.x} ,Y:${point.y}<br>`);
});

document.write("<hr><br>");
const indexOfFirstPointWithXBigger50 = arr.findIndex((point) => point.x > 50);
document.write("Index of first point that X bigger 50 =" + indexOfFirstPointWithXBigger50);

document.write("<hr><br>");
const arrOfdistancesFromZeroPoint = arr.map((point) => Math.sqrt(point.x**2 + point.y**2).toFixed(2) );

for(let i=0; i<arr.length; i++){
    document.write(`X: ${arr[i].x}, Y: ${arr[i].y} , distance from (0,0) = ${arrOfdistancesFromZeroPoint[i]}<br>`);
}

document.write("<hr><br>");
let minX= Infinity;
arr.forEach((point) =>
{
    if(point.x < minX)
        minX = point.x;
});

document.write(`Min X= ${minX}`);

document.write("<hr><br>");

let pointWithMinX = {x:Infinity , y: 0 };
arr.forEach((point) =>
{
    if(point.x < pointWithMinX.x)
    pointWithMinX = point;
});

document.write(`The point with Min X = ${pointWithMinX.x} , Y = ${pointWithMinX.y}`);

