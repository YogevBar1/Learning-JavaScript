function saveNonPersistentCookies(){
   document.cookie = "color = red";

}

function readAllCookies(){
    alert(document.cookie);
}

function savePersistentCookies(){

    // create expire date:
    const expireDate = new Date(); // create an object containing current date and time
    const nextYear = expireDate.getFullYear() +1;//Get current year.
    expireDate.setFullYear(nextYear); // point this date exactly on one year from now
    const expiresValue = expireDate.toUTCString(); // Get the expire date as a string
    

    //Save persistent cookie:
    document.cookie = `font=david;expires=${expiresValue}`;


 }

 function saveSessionStorage(){
    sessionStorage.setItem("background" , "green");
 }

 function readSessionStorage(){
    alert(sessionStorage.getItem("background"));
 }

 function saveLocalStorage(){
    localStorage.setItem("size" , "18px");
 }

 function readLocalStorage(){
    alert(localStorage.getItem("size"));
 }