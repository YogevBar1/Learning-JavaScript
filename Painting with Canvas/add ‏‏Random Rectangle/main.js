// 2. Create a page containing a canvas and a button.
// By pressing the button, draw a random rectangle on the canvas. 
// That is, the rectangle is in a random position, has a random
//  width and height,
//  has a random color and has a random line thickness.

function drawRectangles() {
 

    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

   
        const height = Math.random() * 75 + 1;
        const width = Math.random() * 75 + 1;

        const y = Math.random() * (400 - 2 * height) + height;
        const x = Math.random() * (400 - 2 * width) + width;

        const borderSize = Math.random() * 5 + 1;
        painter.lineWidth = borderSize;



        //random color
        const r = Math.random() * 256;
        const g = Math.random() * 256;
        const b = Math.random() * 256;

        painter.strokeStyle = "black";
        painter.fillStyle = `rgb(${r}, ${g} ,${b})`;


        painter.beginPath();
        painter.fillRect(x, y, width, height);

        painter.strokeRect(x, y, width, height);


    
}