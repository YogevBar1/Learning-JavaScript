"use strict";

function displayUserLocation(){
  getUserLocation((location)=>console.log(location));
}



function getUserLocation(callback){
    navigator.geolocation.getCurrentPosition(position=>{
        const location =`${position.coords.latitude},${position.coords.longitude}`;
        callback(location);
    });
       
}