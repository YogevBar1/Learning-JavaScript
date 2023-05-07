//HW3
// Create an object that describes an item of clothing. Contains the characteristics:
//  manufacturer, size, color, price. Insert hard-coded values ​​into it, display the details
//   without a for-in loop, display again with a for-in loop. Insert values
//  ​​from the user into it. Display again without a for-in loop, display again with a for-in loop.



garment = {
    manufacturer: "Fox",
    size: "xxl",
    color: "Yellow",
    price: "55"
}

document.write(`Manufacturer: ${garment.manufacturer} , Size: ${garment.size}, Color : ${garment.color} , Price : ${garment.price}`);
document.write("<br><hr>");

for (const prop in garment)
    document.write(`${prop} ➡️ ${garment[prop]}<br>`);

document.write("<br><hr>");

for (const prop in garment)
    garment[prop] = prompt(`Insert ${prop} `);

document.write(`Manufacturer: ${garment.manufacturer} , Size: ${garment.size}, Color : ${garment.color} , Price : ${garment.price}`);
document.write("<br><hr>");

for(const prop in garment)
    document.write(`${prop} ➡️ ${garment[prop]}<br>`);