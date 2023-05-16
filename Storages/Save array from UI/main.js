
function saveToStorage(){
const x1Box =document.getElementById("x1Box");
const y1Box =document.getElementById("y1Box");
const x2Box =document.getElementById("x2Box");
const y2Box =document.getElementById("y2Box");
const x3Box =document.getElementById("x3Box");
const y3Box =document.getElementById("y3Box");



const x1 =+ x1Box.value;
const y1 =+ y1Box.value;
const x2 =+ x2Box.value;
const y2 =+ y2Box.value;
const x3 =+ x3Box.value;
const y3 =+ y3Box.value;

const point1 = {x: x1, y: y1};
const point2 = {x: x2, y: y2};
const point3 = {x: x3, y: y3};

const points =[point1, point2 , point3];

const json =JSON.stringify(points);
localStorage.setItem("points" , json);    

}

function loadFromStorage(){
    const pointsDiv = document.getElementById("pointsDiv");
    const json = localStorage.getItem("points");
    const points = JSON.parse(json);

    pointsDiv.innerHTML="";//clear Div

    for(const item of points){
        pointsDiv.innerHTML += `X: ${item.x} , Y: ${item.y} <br>`;

    }

}
