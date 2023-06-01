// 3. Receive number n from the user. Display n random 
// circles on a canvas. Each circle is in a random position
//  within the canvas, has a random radius and a random color.
// It must be protected against collapses as a tongue.


function drawSomething() {

    let n = + prompt("How many random circles you want?");
    if(isNaN(n) || n<=0)
    {
        alert("n must to be a poistive number!");
        return;
    }

    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");

    for (let i = 1; i <= n; i++) {
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





