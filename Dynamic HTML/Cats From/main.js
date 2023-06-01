loadFromStorage();

function addToTable() {


    const nameTextBox = document.getElementById("name");
    const ageTextBox = document.getElementById("age");
    const urlTextBox = document.getElementById("url");

    const name = nameTextBox.value;
    const age = + ageTextBox.value;
    const url = urlTextBox.value;

    if (name.length < 3) {
        alert("Cat name must contain at least 3 chars");
        nameTextBox.focus();
        return;
    }

    if (name.length > 20) {
        alert("Cat name must contain maximum 20 chars");
        nameTextBox.focus();
        return;
    }


    if (age <= 0 || isNaN(age) || age > 20) {
        alert("Age must be a positive number and smaller than 20!");
        ageTextBox.focus();
        return;
    }

    if (url === "") {
        alert("The URL must contain a value!");
        urlTextBox.focus();
        return;
    }

    const catInfo = { name, age, url };


    let json = localStorage.getItem("pets");
    const pets = json ? JSON.parse(json) : [];


    pets.push(catInfo);


    json = JSON.stringify(pets);
    localStorage.setItem("pets", json);


    nameTextBox.value = "";
    ageTextBox.value = "";
    urlTextBox.value = "";

    loadFromStorage();

}


function loadFromStorage() {

    const catsTable = document.getElementById("catsTable");


    const json = localStorage.getItem("pets");
    const pets = JSON.parse(json);



    // IF no data - return:
    if (!pets) return;

    let html =
        `
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


    for (const item of pets) {
        html += `
        <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td><img src=${item.url} alt="Invalid Link"></td>
        </tr>`
    }

    catsTable.innerHTML = html;
}


