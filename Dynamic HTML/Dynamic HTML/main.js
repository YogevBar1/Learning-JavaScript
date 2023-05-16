function createUL() {
    // Take HTML list element
    const fruitsUL = document.getElementById("fruitsUL");

    //   Create array

    const fruits = ["Apple", "Banana", "Peach", "WaterMelon", "Grapes"];



    // fruitsUL.innerHTML ="";
    // // Run on array - create HTML item from each value(bad practice):
    // for(const item of fruits){
    //     fruitsUL.innerHTML += `<li>${item}</li>`
    // }

    //Run on array - create single string from each value(good practice):

    let html = "";

    for (const item of fruits) {
        html += `<li>${item}</li>`;

    }

    // Add that string to the DOM once:

    fruitsUL.innerHTML = html;



}



function createTable() {

    // Take html table body element:
    const fruitsTableBody = document.getElementById("fruitsTableBody");


    //create array:
    const fruits = ["Apple", "Banana", "Peach", "WaterMelon", "Grapes"];


    // Create dynamic HTML
    let html = "";


    for (let i = 0; i < fruits.length; i++) {

        html += `
        <tr>
        <td>${i + 1}</td>
        <td>${fruits[i]}</td>
        </tr>
        `;
    }

    // Add html to Dom
    fruitsTableBody.innerHTML = html;



}

function createObjectsUl() {



    // Take HTML list element
    const fruitsUL = document.getElementById("fruitsUL");

    //   Create array

    const fruits = [
        { name: "Apple", price: 3.52 },
        { name: "Banana", price: 3.32 },
        { name: "Peach", price: 13.52 },
        { name: "Watermelon", price: 7.52 }

    ];




    //Run on array - create single string from each value(good practice):

    let html = "";

    for (const item of fruits) {
        html += `<li>Name: ${item.name} = , Price:${item.price} ILS</li>`;

    }

    // Add that string to the DOM once:

    fruitsUL.innerHTML = html;

}

function createObjectsTable() {


    // Take html table body element:
    const fruitsTableBody = document.getElementById("fruitsTableBody");

    const fruits = [
        { id: 100, name: "Apple", price: 3.52 },
        { id: 200, name: "Banana", price: 3.32 },
        { id: 300, name: "Peach", price: 13.52 },
        { id: 400, name: "Watermelon", price: 7.52 }

    ];


    //Run on array - create single string from each value(good practice):

    let html = "";

    for (const item of fruits) {
        html += 
        `
        <tr>

        <td>${item.id}</td>
        <td>${item.name}</td>
        </tr>
        
        
        `;
 
    }


    fruitsTableBody.innerHTML = html;

}