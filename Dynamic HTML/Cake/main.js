// 1. Create a form that allows the user to receive ingredients for making a cake.
// The form must contain:
// A. Component text box - the required 
// component name.
// B. Number box for amount - the amount
//  required from it.
// Third. A button that adds the element to the
//  <ol> tag containing the information in the following format:
// 1. Ingredient: ___, Quantity: ___
// 2. Ingredient: ___, Quantity: ___
// 3. …
// Added validation so that each field is a 
// mandatory field and a positive amount must be entered.
// Add simple design with Bootstrap CSS.

function addToOL() {
    // Take HTML list element
    const cakeOL = document.getElementById("cakeOrderList");
    const ingredientTextBox = document.getElementById("ingredient");
    const amountTextBox = document.getElementById("amount");
    const ingredient = ingredientTextBox.value;
    const amount = amountTextBox.value;

    if(amount <=0 || isNaN(amount))
    {
        const errors = document.getElementById("errors");
        errors.innerHTML = "amount must be a positive number";
        return;
    }

    if(ingredient === "")
    {
        const errors = document.getElementById("errors");
        errors.innerHTML = "ingredient must contain a value";
        return;
    }


    let html = `<li class="list-group-item"> Ingredient: ${ingredient} , Amount: ${amount}</li>`;
    ingredientTextBox.value="";
    amountTextBox.value="";

    cakeOL.innerHTML += html;

}


