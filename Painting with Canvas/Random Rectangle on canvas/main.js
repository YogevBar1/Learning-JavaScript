// 4. Received number n from the user. 
// Display random rectangles on a canvas. Each 
// rectangle is in a random position within the canvas,
//  has a random length and width, has a random color, and 
//  has a random line thickness.
// It must be protected against collapses as a tongue.

function drawRectangles() {
    const n =+ prompt("How many Rectangle you want?");
    if (isNaN(n) || n < 0) {
        alert("You must insert a positive number!");
        return;
    }

    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    for (let i = 1; i <= n; i++) {
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
}