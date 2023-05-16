// 4. Create a form that allows the user to receive a 
// description of an image and a link to the image.
// The form must contain:
// A. Text box for the image description.
// B. url box for an online link to the image.
// The table must contain two columns. First column 
// - the description of the image as entered by the 
// user in the box, second column - the image itself 
// in size 100 x 100 (the size must of course be defined in CSS).
// Added validation so that every field is a mandatory field.
// Add a paragraph below the form that shows at any moment
//  the number of images in the table.
// Add a simple design with Bootstrap CSS.

// count the num of images:
count = 0;


function addToTable() {

    
    
    const descriptionTextBox = document.getElementById("description");
    const urlTextBox = document.getElementById("url");

    const description = descriptionTextBox.value;
    const url = urlTextBox.value;

    if (description === "" ) {

        const errors = document.getElementById("errors");

        errors.innerHTML = "description must contain value";

        descriptionTextBox.focus();
        return;


    }

    if (url === "" ) {

        const errors = document.getElementById("errors");

        errors.innerHTML = "url must contain value";

        urlTextBox.focus();
        return;

    }

    //Delete the history of the errors
    const errors = document.getElementById("errors");
    errors.innerHTML = "";


    let html = `
    
    <tr>
    <td>${description}</td>
    <td ><img src="${url}" alt="invalid link"></td>
    </tr>`;

    const imagesTable = document.getElementById("imagesTable");

    imagesTable.innerHTML += html;
    imagesTable.innerHTML += `</tbody></table>`;

    count++;

    const countParagraph = document.getElementById("count");

    countParagraph.innerHTML = `The num of images is ${count}`;


    //delete the history of the labels:
    descriptionTextBox.value = "";
    urlTextBox.value = "";


}







