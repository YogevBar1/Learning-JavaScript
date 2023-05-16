//HW1
//Create three objects depicting cars.
// Each car has a model, year of manufacture and color.
// Put the three objects into one array.
// Run over the array in a loop and display all the objects,
//  where each object must be displayed by a separate display of
//   each characteristic.
// Run over the entire array again and display each object with 
// a for-in loop, that's why there is a nested loop here.



car1 = {
    model: "Rano",
    year: 2012,
    color: "Blue"
}

car2 = {
    model: "Pago",
    year: 2017,
    color: "Yellow"
}

car3 = {
    model: "Kia",
    year: 2019,
    color: "White"
}

const cars = [car1, car2, car3];

for (let i = 0; i < cars.length; i++) {
    
 
        document.write(`Model: ${cars[i].model}, Year: ${cars[i].year} , Color: ${cars[i].color}`);
    document.write("<br>");

}

document.write("<hr><br>");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    for (const prop in car)
        document.write(` ${prop} : ${car[prop]}<br>`);
    document.write("<hr>");
}