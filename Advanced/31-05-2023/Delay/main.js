"use strict";

async function display(){
    const contentDiv = document.getElementById("contentDiv");

    const text =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia laudantium accusamus totam id veritatis. Natus ab commodi, eius sint iure dicta minus quasi libero laborum accusamus ipsum temporibus voluptates sunt numquam necessitatibus dolorum inventore totam, magni, sequi eos veritatis!";
    for(const char of text){
        contentDiv.innerHTML += char;
        await delay(30);
    }
}

function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },ms);
    });
}