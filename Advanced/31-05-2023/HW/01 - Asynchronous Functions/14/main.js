"use strict";

// 14. At the click of a button, display the user's location (latitude and longitude) in the span.
// If the user's location cannot be displayed, display the error message.

function showLocation(){
    const span = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          span.innerHTML = `${latitude} , ${longitude}`;
        });
        
      } else {
        span.innerHTML ="Geolocation is not supported by this browser.";
      }
    }
 
