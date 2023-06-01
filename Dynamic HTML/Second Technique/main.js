function createList(){
    const fruits = ["Apple" , "Banana", "Peach" , "Watermelon" , "Grapes"];
    const ul = document.createElement("ul");

    for(const item of fruits ){
        const li = document.createElement("li");
        li.innerHTML=item;
        ul.appendChild(li);
    }

    const containerDiv = document.getElementById("containerDiv");
    containerDiv.innerHTML = "";
    containerDiv.appendChild(ul);
}