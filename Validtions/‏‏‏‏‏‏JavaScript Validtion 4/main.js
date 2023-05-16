// 6. Create a page containing a button and three text boxes for first name, last 
// name and email.
// By clicking the button, display the full name and email in the alert.
// If there is no information in any box - an appropriate error message should be displayed in the span next to the
//  box and the box should be colored pink.
// If any information is less than two characters - an appropriate error message
//  should be displayed in span next to the box and the box should be colored pink.
// If any information is more than 30 characters - an appropriate error message 
// should be displayed in span next to the box and the box should be colored pink.
// It should be noted that if there was a validation error but it was corrected by 
// the user - do not continue to present that there is an error.

function showDetails6() {
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    const lastNameTextBox = document.getElementById("lastName");
    const lastName = lastNameTextBox.value;
    const emailTextBox = document.getElementById("email");
    const email = emailTextBox.value;
    if (firstName === "") {
        const spanTextBoxFirstName = document.getElementById("spanFirstName");
        spanTextBoxFirstName.textContent = "Missing First Name!";
        firstNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();

    }

    else if (firstName.length < 2) {
        const spanTextBoxFirstName = document.getElementById("spanFirstName");
        spanTextBoxFirstName.textContent = "First Name too short!";
        firstNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }

    else if (firstName.length >= 30) {
        const spanTextBoxFirstName = document.getElementById("spanFirstName");
        spanTextBoxFirstName.textContent = "First Name too long!";
        firstNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }


    else {
        const spanTextBoxFirstName = document.getElementById("spanFirstName");
        spanTextBoxFirstName.textContent = "";
        firstNameTextBox.style.backgroundColor = "white";

    }
    if (lastName === "") {
        const spanTextBoxLastName = document.getElementById("spanLastName");
        spanTextBoxLastName.textContent = "Missing Last Name!";
        lastNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }



    else if (lastName.length < 2) {
        const spanTextBoxLastName = document.getElementById("spanLastName");
        spanTextBoxLastName.textContent = "Last Name too short!";
        lastNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }

    else if (lastName.length >= 30) {
        const spanTextBoxLastName = document.getElementById("spanLastName");
        spanTextBoxLastName.textContent = "Last Name too long!";
        lastNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }


    else {
        const spanTextBoxLastName = document.getElementById("spanLastName");
        spanTextBoxLastName.textContent = "";
        lastNameTextBox.style.backgroundColor = "white";
    }



    if (email === "") {
        const spanTextBoxEmail = document.getElementById("spanEmail");
        spanTextBoxEmail.textContent = "Missing Email!";
        emailTextBox.style.backgroundColor = "pink";

        event.preventDefault();
        
    }



  else if (email.length < 2) {
        const spanTextBoxEmail = document.getElementById("spanEmail");
        spanTextBoxEmail.textContent = "Email Name too short!";
        emailTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }

    else if (email.length >= 30) {
        const spanTextBoxEmail = document.getElementById("spanEmail");
        spanTextBoxEmail.textContent = "Email too long!";
        firstNameTextBox.style.backgroundColor = "pink";

        event.preventDefault();
    }

    else {
        const spanTextBoxEmail = document.getElementById("spanEmail");
        spanTextBoxEmail.textContent = "";
        emailTextBox.style.backgroundColor = "white";
    }



    if (email.length <=30 && email.length >=2 && firstName.length <=30 && firstName.length >=2 && lastName.length <=30 && lastName.length >=2 ) {
        alert(`Your full name: ${firstName} ${lastName}, Email: ${email}`);

    }
}