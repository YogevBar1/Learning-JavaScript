"use strict";
// There is a concept called master-details.
// This master is a list of items in which for each item a small part of
//  the information that exists for it is displayed.
// Details is all the information of that item selected in the master list.
// For example, you can display a list of products, selecting a product
//  name displays all its information.
// The next exercise there is master-details:
// Create a page that, when loaded, performs an AJAX browsing to the 
// following address containing the list of users:
// https://jsonplaceholder.typicode.com/users
// and display the returned user names (name value of all users) in the 
// select box where the value of each item in the box should be the id value of all users.
// That is, the select box shows the names of the users but the value holds their id.
// For example, after browsing and filling in the select text, it will be as follows:


// <select>
//         <option value="1">Leanne Graham</option>
//         <option value="2">Ervin Howell</option>
//         <option value="3">Clementine Bauch</option>
//         ...
//     </select>

// After that, whenever a user is selected from the box - perform an AJAX browsing to the following address:
// https://jsonplaceholder.typicode.com/users/<the-id>
// Where <the-id> is the user code selected in the box (the value value), and present its additional 
// characteristics on the page in an aesthetic way:
// •	Name
// •	Username
// • Email
// • Telephone
// •	City
// •	Street
// •	Postal Code
// •	Company Name

// That is, the client who browses to your page sees in the initial browsing the list of users in the select box. 
// If he selects a user from the box, he immediately sees the rest of his details on the page in an aesthetic way. 
// There is no additional button here on the page. Selecting a user from the select box performs an AJAX surf to the server, 
// receives the information about this user and displays it on the page.


(async () => {


    const selectElement = document.getElementById("selectUser");
    const users = await getJSON("https://jsonplaceholder.typicode.com/users");

    for (const user of users) {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        selectElement.appendChild(option);
    }

    selectElement.addEventListener("change", async () => {
        const selectedID = selectElement.value;



        displayUser(users, selectedID - 1);
    });





    async function getJSON(url) {
        //Get Json from REST API:
        //1. Get response back :
        const response = await fetch(url);
        //2. Extract data as a json 
        const data = await response.json();
        return data;
    }

    function displayUser(users, userID) {

        let html = "";

        const numberOfID = Number(userID);
        const userDetailes = document.getElementById("userContainer");

        // Check if the user ID is within the valid range
        if (!users[numberOfID]) {
            // Handle the case when an invalid user is selected
            // You can clear the details or display a message
            userDetailes.innerHTML = html;

            return;
        }

        console.log(numberOfID);





        html += `Name:${users[numberOfID].name}<br>
                        User Name:${users[numberOfID].username}<br>
                        Email: ${users[numberOfID].email}<br>
                        Phone: ${users[numberOfID].phone}<br>
                        City: ${users[numberOfID].address.city}<br>
                        Street: ${users[numberOfID].address.street}<br>
                        ZipCode: ${users[numberOfID].address.zipcode}<br>
                        Name: ${users[numberOfID].company.name} `;


        userDetailes.innerHTML = html;

    }


})();