// 2. Create a form that makes it possible 
// to receive the grades of a class of students
//  from the user.
// The form must contain:
// A. A text box for a student's first name.
// B. A text box for a student's last name.
// third. A number box for the student's grade.
// d. A button that adds the above details to the table.
// Added validation so that every field is a mandatory field and it is mandatory to enter a valid score (0 to 100).
// Add a paragraph below the form that shows the grade point average of the entire class at any moment.
// Add a simple design with Bootstrap CSS.

let count = 0;//variable for calculate avg
let sum = 0;

function addToTable() {
   

    const firstNameTextBox = document.getElementById("firstName");
    const lastNameTextBox = document.getElementById("lastName");
    const gradeTextBox = document.getElementById("grade");

    const firstName = firstNameTextBox.value;
    const lastName = lastNameTextBox.value;
    const grade = gradeTextBox.value;
    let isError = 0;

    //Delete the history of the erorrs
    const errors = document.getElementById("errors");
    errors.innerHTML = "";

    if (firstName === "") {
        const errors = document.getElementById("errors");
        errors.innerHTML = "You must enter first name<br>";
        isError++;
        firstNameTextBox.focus();


    }

    if (lastName === "") {
        const errors = document.getElementById("errors");
        errors.innerHTML += "You must enter last name<br>";
        isError++;

    }

    if (grade < 0 || grade > 100 || isNaN(grade)) {
        const errors = document.getElementById("errors");
        errors.innerHTML += "Grade must be a number from 0 to 100";
        isError++;

    }

    if (isError > 0)
        return;     //If we had a error in the input, not insert it to the table

    let html = `
    
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${grade}</td>


    </tr>`;

    const gradesTable = document.getElementById("gradesTable");

    gradesTable.innerHTML += html;
    gradesTable.innerHTML += `</tbody></table>`;

    //calculate avg:
    sum += parseInt(grade);
    count++;

    const avg = document.getElementById("avg");
    let avgCalculate = sum / count;
    avg.innerHTML = `The avg is ${avgCalculate}`;



    //delete the history of the labels:
    firstNameTextBox.value ="";
    lastNameTextBox.value ="";
    gradeTextBox.value ="";




}







