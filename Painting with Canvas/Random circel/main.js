// 4. Create a page that contains a canvas, a button, a
//  text box for X capture, a text box for Y capture, a 
//  text box for radius capture, and a select box containing 
//  multiple colors for color capture. 
// By pressing the button, the circle captured in the 
// boxes must be drawn on the Canvas (circle with X, Y,
//      radius and color captured)
// Added validation so that if information is missing in
//  one of the boxes - an error message should be displayed
//   and the box should be colored red. Only if all the information
//    is present in the boxes should the action of drawing be performed circle

function drawSomething() {



    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");


    const radiusTextBox = document.getElementById("radius");
    const xTextBox = document.getElementById("x");
    const yTextBox = document.getElementById("y");
    const colorsSelection = document.getElementById("colors");


    const radius =+ radiusTextBox.value;
    const x =+ xTextBox.value;
    const y =+ yTextBox.value;
    const color = colorsSelection.value;
    
  

    if(isNan(x) || x <=0){
        alert("Error! X must to be a positive number");
        xTextBox.focus();
        return;

    }

    if(isNan(y) || y <=0){
        alert("Error! Y must to be a positive number");
        yTextBox.focus();
        return;

    }



    if(isNan(radius) || radius <=0){
        alert("Error! radius must to be a positive number");
        radiusTextBox.focus();
        return;

    }


    painter.fillStyle = color;
    painter.beginPath(); //start new drawing
    painter.arc(x, y, radius, 0, 2 * Math.PI);//center x , center y , radius, start angle, end angle
    painter.stroke();
    painter.fill();


}





