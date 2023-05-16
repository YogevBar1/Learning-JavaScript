// 1. Create a page containing a button and a text box to receive a first name.
// By clicking on the button, display the out of the box in the alert.
// If there is no information - an error message must be displayed via an alert.


function showDetails(){
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    if(firstName === "")
        alert("Please insert a name");
    else alert(`Your name: ${firstName}`);
}

// 2. Create a page containing a button and a text box to receive a first name.
// By clicking the button, display the information from the box in the alert.
// If there is no information - an error message should be displayed by alert and
//  the box should be colored pink.
// It should be noted that if there was a validation error but it was corrected by
//  the user - do not continue to present that there is an error

function showDetails2(){
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    if(firstName === ""){
        alert("Please insert a name");
        firstNameTextBox.style.backgroundColor ="pink";
        firstNameTextBox.focus();
        event.preventDefault();
        return;
    }
    else {
        alert(`Your name: ${firstName}`);
        
    }
}


// 3. Create a page containing a button and a text box to receive a first name.
// By clicking the button, display the information from the box in the alert.
// If there is no information - an error message should be displayed by span which
//  is next to the box and the box should be colored pink.
// It should be noted that if there was a validation error but it
//  was corrected by the user - do not continue to present that there is an error.

function showDetails3(){
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    if(firstName === ""){
        const spanTextBox = document.getElementById("span");
        spanTextBox.textContent="Missing Name!"
        firstNameTextBox.style.backgroundColor ="pink";
        firstNameTextBox.focus();
        event.preventDefault();
        return;
    }
    else {
        alert(`Your name: ${firstName}`);
        
    }
}