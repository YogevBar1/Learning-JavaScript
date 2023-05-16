loadFromStorage();


// Add UI Data to the storage
function addToStorage() {
    //Take html elements:
    const xBox = document.getElementById("xBox");
    const yBox = document.getElementById("yBox");
    const zBox = document.getElementById("zBox");

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

      // Validate z

      if (zBox.value === "") {
        alert("Missing z!");
        zBox.focus();
        return;
    }




    // Take values:
    const x = + xBox.value;
    const y = + yBox.value;
    const z = + zBox.value;





    // Create point
    const point = { x, y , z};


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
    zBox.value = "";
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


    let html=
    `<table>
        <thead>
            <tr>
                <th>Point X</th>
                <th>Point Y</th>
                <th>Point Z</th>
            </tr>
        </thead>
    <tbody>
    `;

   

    for (const item of points) {
        html += `<tr>
                    <td> ${item.x}</td>
                    <td> ${item.y}</td> 
                    <td> ${item.z}</td> 
                </tr>`;

    }
    html+=` </tbody></table>`;

    pointsDiv.innerHTML = html;





}

function clearStorage() {

}
