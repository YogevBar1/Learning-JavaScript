// 3. Challenge Exercise: Create a matrix named stock. The matrix must contain 
// names of products (strings) from the inventory of a clothing store.
// There are 4 categories of clothes in the store: shirts, pants, shoes, coats.
// Three items of clothing from each category must be taken from the user and 
// entered into the matrix.
// That is, after the reception, the matrix will contain 4 rows with each row 
// having 3 strings. Each row is a category of clothing in the store with three
//  items - each item in its own compartment.
// Display the entire matrix.
// Show the shortest item (in terms of characters). If there are several such items
//  - present the first one.
// Display the longest item (in terms of characters). If there are several such items
//  - present them all.

const shirts = [];
for (let i = 0; i <= 2; i++)
    shirts[i] = prompt("Insert shirt");

const pants = [];
for (let i = 0; i <= 2; i++)
    pants[i] = prompt("Insert pants");


const shoes = [];
for (let i = 0; i <= 2; i++)
    shoes[i] = prompt("Insert shoe");


const coats = [];
for (let i = 0; i <= 2; i++)
    coats[i] = prompt("Insert coat");

const inventory = [shirts, pants, shoes, coats];

for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++)
        document.write(`${inventory[i][j]} `);
    document.write("<br>");

}

document.write("<br>");
let short = inventory[0][0];
for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++)
        if (inventory[i][j].length < short.length)
            short = inventory[i][j];

}
document.write(`Short product: ${short}<br>`);

let longLength = 0;
for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++)
        if (inventory[i][j].length > longLength)
        longLength= inventory[i][j].length;

}

document.write(`Longest products: `);
for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++)
            if(inventory[i][j].length === longLength)
                document.write(`${inventory[i][j]}  `);

}




