// 5. Create a page containing a button and three text boxes for first name, last name and email.
// By clicking the button, display the full name and email in the alert.
// If there is no information in the box - an error message must be displayed by Span 
// next to the box and the box must be colored pink.
// It should be noted that if there was a validation error but it 
// was corrected by a user - it is not possible to display that there is an error.

function showDetails5() {
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
    else {
        const spanTextBoxEmail = document.getElementById("spanEmail");
        spanTextBoxEmail.textContent = "";
        emailTextBox.style.backgroundColor = "white";
    }



    if (email !== "" && lastName != "" && firstName != "") {
        alert(`Your full name: ${firstName} ${lastName}, Email: ${email}`);

    }
}