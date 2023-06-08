"use strict";

// Create a page that, when loaded, performs an AJAX browsing to the following address containing a list of users:
// https://jsonplaceholder.typicode.com/users
// and display the list of users in a table.
// For each user you must display:
// •	Name
// •	Username
// • Email
// • Telephone
// •	City
// •	Street
// •	Postal Code
// •	Company Name

// Each figure in a separate column.

(() => {
    const inputID = document.getElementById("id");
    
    const userButton = document.getElementById("getUsers");
    userButton.addEventListener("click", async () => {

        let userID = inputID.value;
        const user = await getJSON(`https://jsonplaceholder.typicode.com/users/${userID}`);
        console.log(user,userID)
        displayUser(user, userID);

    });

    async function getJSON(url) {
        //Get Json from REST API:
        //1. Get response back :
        const response = await fetch(url);
        //2. Extract data as a json 
        const data = await response.json();
        return data;
    }

    function displayUser(user, userID) {
        const userDetailes = document.getElementById("userContainer");
        const id =Number(userID);
        let html = "";
       
        html += `<br>Name:${user.name}<br>
                        Email: ${user.email}<br>
                        Phone: ${user.phone}<br>
                        City: ${user.address.city}<br>
                        Street: ${user.address.street}<br>
                        ZipCode: ${user.address.zipcode}<br>
                        Company Name: ${user.company.name} `;


        userDetailes.innerHTML = html;
    }


})();