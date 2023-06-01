// work with ROY

function addDataToTable() {
    const valid = saveToLocalStorage();
    if (valid === false)
        return;
    loadDataFromStorage();
}

function loadDataFromStorage() {

    // finding the table container:
    const tableDiv = document.getElementById("tableContainer");

    // loading local storage
    const catsString = localStorage.getItem("cats");
    const cats = JSON.parse(catsString);

    if (cats === null)
        return;

    // writing a table in dynamic html

    let html = `
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Image</th>
            </tr>
        </thead>
    <tbody>
    `;

    for (const item of cats) {
        html += `
        <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td><img src=${item.url} alt="Invalid link"></img></td>
        </tr>`;
    }

    html += ` </tbody></table>`;

    tableDiv.innerHTML = html;

}

function saveToLocalStorage() {
    // finding the HTML

    const nameTextBox = document.getElementById("name");
    const ageTextBox = document.getElementById("age");
    const urlTextBox = document.getElementById("url");

    const name = nameTextBox.value;
    const age = + ageTextBox.value;
    const url = urlTextBox.value;

    const valid = validator(name, age, url);
    if (valid === false)
        return false;

    // creating an object from current data

    const cat = { name, age, url };

    // Finding current array if not open now

    let json = localStorage.getItem("cats");
    const catsArr = json ? JSON.parse(json) : [];

    //push the new object to the array
    catsArr.push(cat);

    // Stringify the new array to able save in local storage
    const catsArrString = JSON.stringify(catsArr);

    localStorage.setItem("cats", catsArrString);

    nameTextBox.value = "";
    ageTextBox.value = "";
    urlTextBox.value = "";

}

function validator(name, age, url) {

    const nameTextBox = document.getElementById("name");
    const ageTextBox = document.getElementById("age");
    const urlTextBox = document.getElementById("url");

    // Validtions:

    if (name.length <= 2 || name.length > 20) {
        alert("Please insert name with 2 to 20 chars");
        nameTextBox.focus();
        return false;
    }

    if (age <= 0 || age > 20) {
        alert("Please insert age between 0 to 20");
        ageTextBox.focus();
        return false;

    }

    if (url === "") {
        alert("Please insert value in URL");
        urlTextBox.focus();
        return false;

    }

}

