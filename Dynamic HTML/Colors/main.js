// 3. Create a form that allows you
//  to receive a list of colors from the user.
// The form must contain:
// A. Text box for the color name.
// B. A button that adds the color to the table.
// The table must contain two columns. First column - the name of the color as entered by the user in the box, second column - the color itself (an empty cell with a background color corresponding to the color the user entered. You can set a padding value for this cell with CSS so you can see its background color.).
// Added validation so that the color box is a
//  mandatory field between 3 and 20 characters.
// Add a paragraph below the form showing at any
//  moment the number of colors present in the table.
// Add a simple design with Bootstrap CSS.




function addToTable() {

    // count the num of colors:
    count = 0;
    
    const colorTextBox = document.getElementById("color");

    const color = colorTextBox.value;

    if (color.length <= 2 || color.length >= 21) {
        const errors = document.getElementById("errors");
        errors.innerHTML = "Color name must contain between 3 to 20 chars";

        colorTextBox.focus();
        return;


    }




    //Delete the history of the errors
    const errors = document.getElementById("errors");
    errors.innerHTML = "";






    let html = `
    
    <tr>
    <td>${color}</td>
    <td style="background-color: ${color};"></td>


    </tr>`;

    const ColorsTable = document.getElementById("ColorsTable");

    ColorsTable.innerHTML += html;
    ColorsTable.innerHTML += `</tbody></table>`;

    count++;

    const countParagraph = document.getElementById("count");

    countParagraph.innerHTML = `The num of colors is ${count}`;



    //delete the history of the labels:
    colorTextBox.value = "";


}







