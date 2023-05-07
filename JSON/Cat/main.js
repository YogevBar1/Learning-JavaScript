//hw2
// Create one and only hard-coded cat object named myCat.
// The object must contain: name, age, color, whether sterilized (boolean)
// Convert the object to a JSON string.
// Display the string in the alert.
// Reverse the JSON string back into an object named yourCat.
// Display yourCat's details on the page in the following format:
// Name: ___
// Age: ___
// Color: ___
// Is Sterile: ___


myCat={
    Name: "Mitsi",
    Age: 4,
    Color: "Yellow",
    Sterilized: false,

};

const json = JSON.stringify(myCat);
alert(json);

const yourCat = JSON.parse(json);

for(const prop in yourCat)
    document.write(`${prop} : ${yourCat[prop]}<br>`);