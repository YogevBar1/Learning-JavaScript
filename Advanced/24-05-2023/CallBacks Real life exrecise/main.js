function displayUserLocation() {
    const position = navigator.geolocation.getCurrentPosition(position => console.log(position.coords.latitude, position.coords.longitude));
    // console.log(position.longitude, position.latitude);
}

function messageMe() {
    const message = prompt("Enter message");
    const seconds = + prompt("Enter number of seconds to display message");
    const ms = seconds * 1000;
    setTimeout(() => alert(message), ms);

}


function displayClock() {
    const divClock = document.getElementById("divClock");
    setInterval(()=>{
        const now = new Date();
        divClock.innerText = now.toLocaleTimeString();
    }, 1000);
}