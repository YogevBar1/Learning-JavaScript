// Create an object that outlines a rectangle.
//  Contains the properties: width, height, color,
//   position on the
//  X axis and position on the Y axis.
// The experiment to which the values ​​were
//  hard-coded, presented the details without a
//   for-in loop, presented again by a for-in loop.
// 1. Create an object that outlines a rectangle.
//  Contains the properties: width, height, color,
//   position on the X axis and position on the Y axis.
// The experiment to which the values ​​were hard-coded,
//  presented the details without a for-in loop, presented
//   again by a for-in loop.
//HW1

const rectangle ={
    width: 5,
    hight: 7,
    color: "Blue",
    xValue: 32,
    yValue: 25

}

document.write(`Width = ${rectangle.width} ,Hight = ${rectangle.hight}, Color : ${rectangle.color}, X: ${rectangle.xValue} , Y: ${rectangle.yValue} `);

document.write("<br><hr>");

for(const prop in rectangle)
    document.write(`${prop} ➡️ ${rectangle[prop]} <br>`);