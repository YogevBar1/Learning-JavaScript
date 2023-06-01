loadFromStorage();

function addCat() {
    const nameTextBox = document.getElementById("name");
    const ageTextBox = document.getElementById("age");
    const urlTextBox = document.getElementById("url");

    const name = nameTextBox.value;
    const age =+ ageTextBox.value;
    const url = urlTextBox.value;

    if (name.length < 2 || name.length > 20) {
        alert("Error! the cat name must contain 2 till 20 chars");
        nameTextBox.focus();
        return;
    }

    if (isNaN(age) ||  age < 0 || age > 20 ) {
        alert("Error! age must be number between 0 to 20");
        ageTextBox.focus();
        return;
    }

    if (url === "") {
        alert("Error! The URL must contain a value");
        urlTextBox.focus();
        return;
    }

    const catInfo = { name, age, url };

    let json = localStorage.getItem("cats");
    const cats = json ? JSON.parse(json) : [];

    cats.push(catInfo);

    json = JSON.stringify(cats);
    localStorage.setItem("cats", json)

    nameTextBox.value = "";
    ageTextBox.value = "";
    urlTextBox.value = "";


    loadFromStorage();
}

function loadFromStorage() {

    const catsTable = document.getElementById("catsTable");

    let json = localStorage.getItem("cats");
    const cats =JSON.parse(json);


    //if no data, exit from the function
    if (!cats)
        return;

    let html =
        `<table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Image</th>
    </thead>
    <tbody>
    
    `;

    for(const cat of cats){

        html += `<tr>
        <td>${cat.name}</td>
        <td>${cat.age}</td>
        <td><img src="${cat.url}" alt="Invalid link"></td>
        </tr>`;
    }

    catsTable.innerHTML = html;
}