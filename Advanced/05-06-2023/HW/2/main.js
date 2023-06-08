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

(()=>{
    const userButton = document.getElementById("getUsers");
    userButton.addEventListener("click",async()=>{
        const users = await getJSON ("https://jsonplaceholder.typicode.com/users") ;
        displayUsers(users);

    });

    async function getJSON(url){
         //Get Json from REST API:
        //1. Get response back :
        const response = await fetch(url);
         //2. Extract data as a json 
         const data = await response.json();
         return data;
    }

    function displayUsers(users){

        const tableBody = document.getElementById("tableBody");
        let html="";
        for(const user of users){
            html+=`<tr>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.address.city}</td>
                        <td>${user.address.street}</td>
                        <td>${user.address.zipcode}</td>
                        <td>${user.company.name}</td>
                        </tr>
                        `

        }
        tableBody.innerHTML = html;
    }    
    
})();