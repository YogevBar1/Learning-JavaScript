"use strict";

// Homework – Displaying images returned in AJAX from a remote server

// On clicking a button, perform an AJAX navigation to the following address, which returns an array of images:
// https://jsonplaceholder.typicode.com/photos
// Display in the table only the first 100 image objects that are returned.
// For each image you must display:
// • albumId
// • id
// • title
// • thumbnailUrl when this value contains an online address for the image to be displayed.
// For example, if the information found in this property is "https://via.placeholder.com/150/92c952" then this 
// information should not be displayed as a string, but an image (img tag) must be displayed that shows the image 
// present in this link (ie the src property of The 
// image contains this string), and that's how you see the image itself in the table.

(()=>{
    const photosButton = document.getElementById("getPhotos");
    photosButton.addEventListener("click",async()=>{
        const photos = await getJSON ("https://jsonplaceholder.typicode.com/photos") ;
        displayPhotos(photos);

    });


    async function getJSON(url){
         //Get Json from REST API:
        //1. Get response back :
        const response = await fetch(url);
         //2. Extract data as a json 
         const data = await response.json();
         return data;
    }



    function displayPhotos(photos){
        const tableBody = document.getElementById("tableBody");
        let html="" ;
        const maxPhotos=Math.min(100, photos.length )
        for(let i=0;i < maxPhotos;i++){
            const photo = photos[i];

            html+=`<tr>
            <td>${photo.albumId}</td>
            <td>${photo.id}</td>
            <td>${photo.title}</td>
            <td><img src="${photo.thumbnailUrl}"></td>
            </tr>
            ` ;
        }
        tableBody.innerHTML = html;

    }

    
})();