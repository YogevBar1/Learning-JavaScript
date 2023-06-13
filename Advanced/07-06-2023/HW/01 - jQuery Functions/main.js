"use strict";

// jQuery functions
// Design the following page:
 

// By pressing the copy button, copy the text box to the left of it to the cell you named and disappear the text box to the left of it. For example, if the user fills in the following information:
 

// Then click the first button, the page will look like this:
 

// After clicking the second button as well, the page will look like this:
 

$(()=>{

    $("#buttonFirstName").click(()=>{
        const firstNameTextBox = document.getElementById("firstNameInput");
        const firstName = firstNameTextBox.value;
        const firstNameOutput = document.getElementById("firstNameOutput");
        firstNameOutput.innerText = firstName;
        firstNameTextBox.style.display = "none";
    });

    
    $("#buttonLastName").click(()=>{
        const lastNameTextBox = document.getElementById("lastNameInput");
        const lastName = lastNameTextBox.value;
        const lastNameOutput = document.getElementById("lastNameOutput");
        lastNameOutput.innerText = lastName;
        lastNameTextBox.style.display = "none";

    });
});