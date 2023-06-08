// "use strict";

// (() => {

//     const button = document.getElementById("test");
//     button.addEventListener("click",async()=>
//     {
//         const access_key = "acf93885a8f245635e231e8fea0dc43f";
//         let city = "New York";


//         const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`;


//         const weather = await getJSON(url);
//         console.log(weather);

//     })

//     async function getJSON(url){
//         //Get Json from REST API:
//        //1. Get response back :
//        const response = await fetch(url);
//         //2. Extract data as a json 
//         const data = await response.json();
//         return data;
//    }

// })

"use strict";

(() => {
    const selectionButton = document.getElementById("selectCity");
    selectionButton.addEventListener("change", async () => {
        const access_key = "5293d75335dc7e682873ab412bf10f2e"; // Replace with your actual access key
        let city = selectionButton.value;
    
        const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`;

        const weather = await getJSON(url);
        console.log(weather);
        const weatherContainer = document.getElementById("weatherContainer");
        const text = `The weather in ${city} is ${weather.current.temperature} C`;

        
        const icon = document.getElementById("icon");

        icon.src = weather.current.weather_icons[0];
        icon.alt = "Weather Icon";
        

        weatherContainer.innerHTML = text;

    });

    async function getJSON(url) {
        // Get JSON from REST API
        // 1. Get response back
        const response = await fetch(url);
        // 2. Extract data as JSON
        const data = await response.json();
        
        return data;
    }
})();
