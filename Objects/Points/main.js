// Create an empty array named points 
// that describes points in the dimension.
// 3 objects were taken from the user, each
//  object describes a point containing x and y.
//   Each object must be added to the array.
// Display the array on the page. Display the point
//  with the highest x.

const points = [];

for (let i = 1; i <= 3; i++) {

    const point = { x:0 , y:0};
    point.x =+prompt("Enter X: ");
    point.y =+prompt("Enter Y: ");
    points.push(point);

}

for(const item of points){
    document.write(`X: ${item.x} , Y:${item.y}<br>`);
    
}

let maxPoint =points[0] ;

for(const item of points)
if(item.x > maxPoint.x)
        maxPoint = item;

document.write(`Max point X: ${maxPoint.x} , Max point Y: ${maxPoint.y}`);