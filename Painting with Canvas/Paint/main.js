// Each colored button to choose a color (for global).
//  Each button containing a number to choose a line thickness
//   (for global change)
// The empty square is a canvas that the user can draw on.
//  The drawing must be done in the chosen color and the chosen line thickness.

let currentColor  = "black";
let currentSize = 1;

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


function paint(){
    painter.lineWidth = currentSize;
    painter.strokeStyle = currentColor; 
    //if left button is press
    if(event.buttons === 1){
        painter.lineTo(event.clientX - leftOffset , event.clientY - topOffset);
        painter.stroke();
    }
}

function markPoint(){

    painter.beginPath();

        painter.moveTo(event.clientX - leftOffset , event.clientY - topOffset);
    
}

