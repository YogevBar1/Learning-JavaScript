const cars = [{
    manufacturer: "Lamborghini",
    model: "Diablo",
    color: "Yellow"
},
{
    manufacturer: "Ferrari",
    model: "Spider",
    color: "Red"
},
{
    manufacturer: "Porsche",
    model: "911",
    color: "Gray"
}
];

//convert array of objects into JSON string
const jsonString = JSON.stringify(cars);
console.log(cars);
console.log(jsonString);
document.write(cars);
document.write(jsonString);



document.write("<hr>");
//convert JSON string into javascript array (or object)
const dupCars = JSON.parse(jsonString); //pars- convert string to something else

for(const item of dupCars)
{
    document.write(`Manufacture: ${item.manufacturer} , Model: ${item.model} , Color: ${item.color}<br>`);
}