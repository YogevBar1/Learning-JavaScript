loadFromStorage();


function saveToStorage(){
    const firstNameTextBox = document.getElementById("firstName");
    const firstName = firstNameTextBox.value;
    
    const lastNameTextBox = document.getElementById("lastName");
    const lastName = lastNameTextBox.value;


    localStorage.setItem("firstName" , firstName);
    localStorage.setItem("lastName" , lastName);
    

}

function loadFromStorage(){
   


    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    firstNameTextBox.value = firstName;
    lastNameTextBox.value = lastName;

}

function clearStorage(){

    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");
    firstNameTextBox.value="";
    lastNameTextBox.value="";

    localStorage.clear();
}
