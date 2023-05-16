loadFromStorage();


// Add UI Data to the storage
function addToStorage() {
    //Take html elements:
    const xBox = document.getElementById("xBox");
    const yBox = document.getElementById("yBox");

    // Validate X
    if (xBox.value === "") {
        alert("Missing X!");
        xBox.focus();
        return;
    }

    // Validate Y

    if (yBox.value === "") {
        alert("Missing Y!");
        yBox.focus();
        return;
    }



    // Take values:
    const x = + xBox.value;
    const y = + yBox.value;





    // Create point
    const point = { x, y };


    let json = localStorage.getItem("points");

    const points = json ? JSON.parse(json) : [];

    //add new point to array:
    points.push(point);

    json = JSON.stringify(points);
    localStorage.setItem("points", json)


    //Display all points:
    loadFromStorage();

    //Clear boxes:

    xBox.value = "";
    yBox.value = "";
    xBox.focus();


}



function loadFromStorage() {
    //Take HTML Div Element 
    const pointsDiv = document.getElementById("pointsDiv");

    // Read points from storage
    const json = localStorage.getItem("points");
    const points = JSON.parse(json);

    // If no data - return
    if (!points) return;


    // Display data:
    pointsDiv.innerHTML = "";//clear Div

    for (const point of points) {
        pointsDiv.innerHTML += `X: ${point.x} , Y: ${point.y} <br>`;

    }

}

function clearStorage() {

}
