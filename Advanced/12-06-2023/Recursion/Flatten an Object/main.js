"use strict";

function displayFlattenObject() {
    const person = {
        firstName: "Bart",
        lastName: "Simpson",
        address: {
            city: "Tel Aviv",
            street: "Even Gevirol",
            houseNum: 12,
            postcode: 365897,
            geolocation: {
                latitude: 32.7,
                longitude: 34.5
            }
        },
        email: "bart@gmail.com",
        phone: {
            phoneNumber: "0524846588",
            type: "Mobile"
        }
    };

    printFlattenedObject(person);
}

function printFlattenedObject(obj) {
                                                            
    for (const prop in obj) {
        if (typeof obj[prop] !== "object") {
            document.write(`${prop} --> ${obj[prop]}<br>`);
        }
        else
            printFlattenedObject(obj[prop]);

    }

}