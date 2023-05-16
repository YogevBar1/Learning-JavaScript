// 4. Create a page containing a button and two text boxes to receive a first and last name.
// By clicking the button, display the full name captured in the alert.
// If there is no information in any box - an error message should be displayed by span 
// which is next to the box and the box should be colored pink.
// It should be noted that if there was a validation error but it was
//  corrected by the user - do not continue to present that there is an error.


function showDetails4(){
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    const lastNameTextBox = document.getElementById("lastName");
    const lastName = lastNameTextBox.value;
    if(firstName === "" ){
        const spanTextBox = document.getElementById("spanFirstName");
        spanTextBox.textContent="Missing First Name!"
        firstNameTextBox.style.backgroundColor ="pink";
        firstNameTextBox.focus();
        event.preventDefault();

        
        
    }
        
    else {
        const spanTextBoxFirstName = document.getElementById("spanFirstName");
        spanTextBoxFirstName.textContent = "";
        firstNameTextBox.style.backgroundColor = "white";

    }

    if(lastName ===""){
        const spanTextBox = document.getElementById("spanLastName");
        spanTextBox.textContent="Missing Last Name!"
        lastNameTextBox.style.backgroundColor ="pink";
        lastNameTextBox.focus();
        event.preventDefault();

      
    }
    else {
        const spanTextBoxLastName = document.getElementById("spanLastName");
        spanTextBoxLastName.textContent = "";
        lastNameTextBox.style.backgroundColor = "white";
    }

    if(firstName !== "" && lastName!== "") {
        alert(`Your name: ${firstName} ${lastName}`);
        
    }
}