// 1. Create a form that allows you to receive details about animals 
// from the user.
// The form must contain:
// A. Text box for the type of animal (cat/dog...)
// B. Text box for the animal's name (Mizzi/Mookie...)
// third. Number box for the age of the animal
// d. Text box for a link to a picture of the animal
// That is, an online link to an image file, for example to the following image
//  file:
// https://cdn.vox-cdn.com/thumbor/X-xVN1krqbh9Co35_AXiZRHRAUk=/0x26:640x453/1200x800/filters:focal(0x26:640x453)/cdn.vox-cdn.com/assets/1275052/kitten_field_jump.jpeg
// God. A button that adds the animal to the table. The table must contain 4 
// columns: type, name, age and the image itself in size 100x100.
// Added validation so that every field is a mandatory field and it is mandatory
//  to enter only a positive age.
// Save all the information to Storage with each click and load back from Storage
//  to the table when the page loads.
// Make a simple design of the page with Bootstrap CSS.






loadFromStorage();

function addToTable() {



    const kindTextBox = document.getElementById("kind");
    const nameTextBox = document.getElementById("name");
    const ageTextBox = document.getElementById("age");
    const urlTextBox = document.getElementById("url");

    const kind = kindTextBox.value;
    const name = nameTextBox.value;
    const age = ageTextBox.value;
    const url = urlTextBox.value;

    let errors = document.getElementById("errors"); // errors

    if (kind === "") {



        errors.innerHTML = "kind must contain value";

        kindTextBox.focus();
        return;


    }

    if (name === "") {



        errors.innerHTML = "name must contain value";

        nameTextBox.focus();
        return;


    }

    if (age<=0 || isNaN(age))  {
        errors.innerHTML = "age must be a positive number";

        ageTextBox.focus();
        return;

    }

    if (url === "") {
        errors.innerHTML = "url must contain value";
        urlTextBox.focus();
        return;

    }

    //Delete the history of the errors
    errors.innerHTML = "";


    let html = `
    
    <tr>
    <td>${kind}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td ><img src="${url}" alt="invalid link"></td>
    </tr>`;

    const animalsTable = document.getElementById("animalsTable");

    animalsTable.innerHTML += html;
    animalsTable.innerHTML += `</tbody></table>`;


    

    //delete the history of the labels:
    kindTextBox.value = "";
    nameTextBox.value = "";
    ageTextBox.value = "";
    urlTextBox.value = "";

    
    localStorage.setItem("table", animalsTable.innerHTML);


}

function loadFromStorage(){
    const animalsTable = document.getElementById("animalsTable");
    const storageTable = localStorage.getItem("table");

    if(storageTable){
        animalsTable.innerHTML =storageTable; 
    }

}








