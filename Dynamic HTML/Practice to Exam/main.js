// PRACTICE WITH ROY

function addDataToTable() {

    const validate = saveDataToLocalStorage();
    if (validate === false)
        return;

    loadFromStorage();
}

function saveDataToLocalStorage() {
    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");
    const emailTextBox = document.getElementById("email");
    const phoneTextBox = document.getElementById("phone");

    const firstName = firstNameTextBox.value;
    const lastName = lastNameTextBox.value;
    const email = emailTextBox.value;
    const phone = phoneTextBox.value;

    const valid = validator(firstName, lastName, email, phone);

    if (valid === false)
        return false;

    //creating an new Object from the values
    const user = { firstName, lastName, email, phone };

    // Finding the local storage data if  isn`t open a new:
    let json = localStorage.getItem("users");
    const users = json ? JSON.parse(json) : [];


    //adding the new object to the array
    users.push(user);

    // returning the array to string to be able to save the array in the local storage
    const usersString = JSON.stringify(users);

    localStorage.setItem("users", usersString);

    // Delete Fields:
    firstNameTextBox.value = "";
    lastNameTextBox.value = "";
    emailTextBox.value = "";
    phoneTextBox.value = "";

}


function validator(firstName, lastName, email, phone) {

    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");
    const emailTextBox = document.getElementById("email");
    const phoneTextBox = document.getElementById("phone");

    if (firstName.length < 1) {
        alert("Please insert first name with at least 2 chars");
        firstNameTextBox.focus();
        return false;
    }
    if (lastName === "") {
        alert("Please insert last name");
        lastNameTextBox.focus();
        return false;
    }

    if (phone.length !== 10 || phone[0] !== '0' || phone[1] !== '5') {
        alert("Please insert a valid phone number with 10 digits that start with 05");
        phoneTextBox.focus();
        return false;
    }

    // Email Validation
    if (email.indexOf("@") === -1) {
        alert("Please insert Email with @");
        emailTextBox.focus();
        return false;
    }
    else if (email.indexOf("@") === 0 || email.lastIndexOf("@") === email.length - 1) {
        alert("Please insert Email with @ that not in the end or the start");
        emailTextBox.focus();
        return false;
    }
    else if (email.indexOf(".") - email.indexOf("@") < 3) {
        alert("There should be at least two characters between '@' and '.'.");
        emailTextBox.focus();
        return false;
    }
    else if (email.indexOf(".") === -1) {
        alert("Please insert Email with .");
        emailTextBox.focus();
        return false;

    }

    else if (email.indexOf(".") < email.indexOf("@")) {
        alert("The . must be after the @");
        emailTextBox.focus();
        return false;

    }

    else if (email.lastIndexOf(".") === email.length - 1) {
        alert("The . must not be in the last char");
        emailTextBox.focus();
        return false;
    }

    else if (email.length - email.lastIndexOf(".") <= 2) {
        alert("There should be at least two characters after '.'");
        emailTextBox.focus();
        return false;
    }


    // if all the validtions OK:
    return true;
}

function loadFromStorage() {
    const tableDiv = document.getElementById("tableDivContainer");

    // load from local storage

    const usersString = localStorage.getItem("users");
    const users = JSON.parse(usersString);

    // If the users empty, exit from the function:
    if (users === null)
        return;

    // dynamic HTML:


    let html =
        `<table class="table table-hover">
    <thead>
    <tr>
    <th>First Name:</th>
    <th>Last Name:</th>
    <th>Phone number:</th>
    <th>Email:</th>
    </tr>
    </thead>
    <tbody>
    `;

    for (const item of users) {
        html +=
            `<tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        
        </tr>`;
    }

    html += '</tbody></table>';
    tableDiv.innerHTML = html;

}