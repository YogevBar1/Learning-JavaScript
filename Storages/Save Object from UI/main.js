
function saveToStorage(){
const xBox =document.getElementById("xBox");
const yBox =document.getElementById("yBox");

const x =+ xBox.value;
const y =+ yBox.value;

const point = {x, y}; //Same as: {x:x , y;y}
const json =JSON.stringify(point);
localStorage.setItem("point" , json);    

}

function loadFromStorage(){
    const pointDiv = document.getElementById("pointDiv");
    const json = localStorage.getItem("point");
    const point = JSON.parse(json);

    pointDiv.innerHTML = `X: ${point.x} , Y: ${point.y}`;

}
