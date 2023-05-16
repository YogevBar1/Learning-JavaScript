// HW2
// Create an array that contains five objects that describe
//  clothes (hard-coded). The objects must be inserted directly into
//   the array and not build a separate object and then append it to the
//    array. That is to say: [ ... {...}, {...}, {...}]
// Each garment has a type, size, price and color.
// By a nested loop display all the properties of all the objects in the array.

const clothes = [
    {
        kind: "Shirt",
        size: "Large",
        price: 80,
        color: "Black"
    },
    {
        kind: "Hat",
        size: "Extra Large",
        price: 30,
        color: "Yellow"
    },
    {
        kind: "Pants",
        size: "Small",
        price: 40,
        color: "Black"
    },
    {
        kind: "Shirt",
        size: "Medium",
        price: 50,
        color: "White"
    },
    {
        kind: "Shirt",
        size: "Extra small",
        price: 20,
        color: "Black"
    }
];

for(let i = 0; i <clothes.length;i++)
    {
        for(const prop in clothes[i])
            document.write(`${prop}: ${clothes[i][prop]} , `);
        document.write("<br>");
    }