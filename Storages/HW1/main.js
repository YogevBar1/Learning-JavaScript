// 1. Create a page that contains a save button, a load button 
// and four text boxes to receive city, street, house number and zip code.
// By clicking Save, save the address to localStorage as
//  one and only address object (converted to JSON) containing 
//  four properties: city, street, house number and zip code.
// By clicking the Load button, load the JSON back into an address 
// object and display the values ​​back - each value in its own box.
// Check whether this information is also saved when you return to 
// the site (after the browser has already been closed).

// 2. Add validation to the previous exercise so that if there is no value in the box - an appropriate error 
// message should be displayed and the box should be colored red.

function saveToLocalStorage() {
    const cityTextBox = document.getElementById("city");
    const streetTextBox = document.getElementById("street");
    const houseNumberTextBox = document.getElementById("houseNumber");
    const postalCodeTextBox = document.getElementById("postalCode");

    const city = cityTextBox.value;
    const street = streetTextBox.value;
    const houseNumber = houseNumberTextBox.value;
    const postalCode = postalCodeTextBox.value;

    const errors = document.getElementById("errors");
    if (city === "") {

        errors.innerHTML = "Missing city";
        cityTextBox.style.backgroundColor = "red";
        cityTextBox.focus();
        return;
    }
    else
        cityTextBox.style.backgroundColor = "white";


    if (street === "") {

        errors.innerHTML = "Missing street";
        streetTextBox.style.backgroundColor = "red";
        streetTextBox.focus();

        return;
    }
    else
        streetTextBox.style.backgroundColor = "white";


    if (houseNumber === "") {

        errors.innerHTML = "Missing House Number";
        houseNumberTextBox.style.backgroundColor = "red";
        houseNumberTextBox.focus();

        return;
    }
    else
        houseNumberTextBox.style.backgroundColor = "white";

    if (postalCode === "") {

        errors.innerHTML = "Missing Postal Code";
        postalCodeTextBox.style.backgroundColor = "red";
        postalCodeTextBox.focus();
        return;
    }

    else
        postalCodeTextBox.style.backgroundColor = "white";



    const address = { city, street, houseNumber, postalCode };
    const jsonString = JSON.stringify(address);
    localStorage.setItem("address", jsonString);
}

function loadFromStorage() {
    const jsonString = localStorage.getItem("address");

    const address = JSON.parse(jsonString);

    const cityTextBox = document.getElementById("city");
    const streetTextBox = document.getElementById("street");
    const houseNumberTextBox = document.getElementById("houseNumber");
    const postalCodeTextBox = document.getElementById("postalCode");
    cityTextBox.value = address.city;
    streetTextBox.value = address.street;
    houseNumberTextBox.value = address.houseNumber;
    postalCodeTextBox.value = address.postalCode;
}

