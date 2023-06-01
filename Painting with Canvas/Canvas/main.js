function drawSomething() {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    //Empty Rectangle:
    painter.strokeStyle = "blue";
    painter.strokeRect(20, 10, 200, 100); //x,y,width,height


    // empty Circle:
    painter.strokeStyle = "red";
    painter.beginPath(); //start new drawing
    painter.arc(100, 100, 50, 0, 2 * Math.PI);//center x , center y , radius, start angle, end angle
    painter.stroke();

    // empty Text:
    painter.strokeStyle = "green";
    painter.font = "40px Arial";
    painter.strokeText("Hello Canvas!", 50, 60);//text,x,y

    // Line:
    painter.strokeStyle = "gray";
    painter.moveTo(200, 200);//x,y go to this location without painting
    painter.lineTo(300, 300); //x,y paint from current location to this location
    painter.stroke();

    // Full Rectangle:
    painter.fillStyle = "yellow";
    painter.fillRect(20, 200, 200, 100); //x,y,width,height

    // Full circle:
    painter.fillStyle = "magenta";
    painter.beginPath();
    painter.arc(400, 100, 70, 0, 2 * Math.PI); //x,y , radius, start, end
    painter.fill();

    // Full text:
    painter.fillStyle = "brown";
    painter.font = "50px David";
    painter.fillText("Coooool!", 200, 300);

}

// Take canvas:
const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

// Take body rectangle:
const bodyRect = document.body.getBoundingClientRect();

// Take canvas rectangle
const canvasRect = myCanvas.getBoundingClientRect();

// calc left offset
const leftOffset = canvasRect.left - bodyRect.left;

// calc top offset
const topOffset = canvasRect.top - bodyRect.top;


function changeColor(color){
    painter.strokeStyle = color;
}


function paint() {
    //if left button is press
    if (event.buttons === 1) {
        painter.lineTo(event.clientX - leftOffset, event.clientY - topOffset);
        painter.stroke();
    }
}


function markPoint(){
    // painter.strokeStyle= paintColor;
    painter.beginPath();
    painter.moveTo(event.clientX - leftOffset, event.clientY - topOffset);

}

