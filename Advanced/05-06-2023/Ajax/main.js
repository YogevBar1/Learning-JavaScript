"use strict";

(() => {
    const usersButton = document.getElementById("usersButton");
    usersButton.addEventListener("click", async () => {
        // API url:
        const users = await getJSON("https://jsonplaceholder.typicode.com/users");
        displayUsers(users);


    });
    function displayUsers(users) {
        // Display:
        const usersUl = document.getElementById("usersUl");
        let html = "";
        for (const user of users) {
            html += `<li>${user.name} from ${user.address.city}</li>`;
        }
        usersUl.innerHTML = html;
    }

    const todosButton = document.getElementById("todoButton");
    todosButton.addEventListener("click", async () => {
        // API url:

        const todoList = await getJSON("https://jsonplaceholder.typicode.com/todos");
        showTodoList(todoList);
    });

    function showTodoList(todoList) {


        // Display:
        const tableBody = document.getElementById("tableBody");
        let html = "";
        for (const todo of todoList) {
            html += `<tr><td>${todo.title}</td>`;
            html += `<td>${todo.completed ? "Completed" : "Incomplete"}</td></tr>`;
        }
        tableBody.innerHTML = html;
    }


    // Get Json from REST API:
    async function getJSON(url) {

        //Get Json from REST API:
        //1. Get response back :
        const response = await fetch(url);
        //2. Extract data as a json 
        const data = await response.json();

        //return
        return data;
    }
})();

