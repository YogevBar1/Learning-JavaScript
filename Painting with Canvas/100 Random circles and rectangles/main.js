// 3. Create a page containing a canvas and a button.
// By pressing the button, draw 100 random circles and
//  100 random rectangles on the canvas 
// (positions/colors/sizes/line thickness - everything is random).


function draw() {




    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");


    //100 Rectangles:
    for (let i = 1; i <= 100; i++) {
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

    //100 Circles:
    for (let i = 1; i <= 100; i++) {
        const radius = Math.random() * 50 + 1;
        const x = Math.random()* (400 - 2 * radius) + radius;
        const y = Math.random() * (400 - 2 * radius) + radius;


        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);


        painter.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        painter.fillStyle = `rgb(${r}, ${g}, ${b})`;
        painter.beginPath(); //start new drawing
        painter.arc(x, y, radius, 0,2* Math.PI);//center x , center y , radius, start angle, end angle
        painter.fill();
    }
}