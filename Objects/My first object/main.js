
//Literal object

const myCustomer = {
    firstName: "Bart",  //property
    lastName: "Simpson",
    address: "Springfield",
    email: "bart@gmail.com",
    phone: "0523698541"
};

document.write(myCustomer); // [Object Object]

console.log(myCustomer);

document.write("<br>");
document.write(`First name: ${myCustomer.firstName}<br>`);
document.write(`Last name: ${myCustomer.lastName}<br>`);
document.write(`Address name: ${myCustomer.address}<br>`);
document.write(`Email name: ${myCustomer.email}<br>`);
document.write(`phone: ${myCustomer.phone}<br>`);

document.write("<hr>");

document.write("<br>");
document.write(`First name: ${myCustomer["firstName"]}<br>`);
document.write(`Last name: ${myCustomer["lastName"]}<br>`);
document.write(`Address name: ${myCustomer["address"]}<br>`);
document.write(`Email name: ${myCustomer["email"]}<br>`);
document.write(`phone: ${myCustomer["phone"]}<br>`);
document.write("<hr>");

document.write(`Zip Code: ${myCustomer.zipCode}<br>`); //undefined
document.write(`Zip Code: ${myCustomer["zipCode"]}<br>`); //undefined

myCustomer.phone = "03-59856443";
document.write(`phone: ${myCustomer["phone"]}<br>`);

myCustomer.zipCode = "1234567"; //will create it!
document.write(`Zip Code: ${myCustomer.zipCode}<br>`);

console.log(myCustomer);


delete myCustomer.address;
document.write(`Address name: ${myCustomer.address}<br>`);
console.log(myCustomer);

document.write("<br>");

document.write("<hr>");

//display all properties 
for (const prop in myCustomer) {    //prop is a variable containing the name of the property not his value
    document.write(prop + "<br>");
}


document.write("<hr>");


document.write("<br>");
//display all properties values:
for (const prop in myCustomer) {
    document.write(`${myCustomer[prop]}<br>`);
}

document.write("<br>");
//display all properties + values:
for (const prop in myCustomer) {
    document.write(`${prop} ➡️ ${myCustomer[prop]}<br>`);
}


