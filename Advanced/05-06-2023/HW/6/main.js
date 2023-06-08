"use strict";

(()=>{
    const userButton = document.getElementById("getUsers");
    userButton.addEventListener("click",async()=>{
        const users = await getJSON ("https://reqres.in/api/users") ;
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
        for(const user of users.data){
            html+=`<tr>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" alt="error"</td>
                        </tr>
                        `

        }
        tableBody.innerHTML = html;
    }    
    
})();