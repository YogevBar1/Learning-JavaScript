
function displayHappySmiley() {
    document.write("😊");
}

function displaySadSmiley() {
    document.write("☹️");
}

function displayRandomSmiley() {
    if (Math.random() < 0.5) 
    displayHappySmiley();

    else    
        displaySadSmiley();
    
}

function showMyFirstName(){
    document.write("Yogev");
}

function showMyLastName(){
    document.write("Bar");
}

function showMyFullName(){
    showMyFirstName();
    showMyLastName();
}

function print100RandomNums(){
    for(let i =1; i<= 100; i++)
    {
        const num = Math.floor(Math.random() * 100) +1;
        document.write(num + " ");
    }

}

displayHappySmiley();
displayHappySmiley();
displayHappySmiley();
document.write("<hr>");
displaySadSmiley();
displaySadSmiley();
displaySadSmiley();
document.write("<hr>");
displayRandomSmiley();
document.write("<hr>");
showMyFullName();
document.write("<hr>");
print100RandomNums();
document.write("<hr>");
print100RandomNums();
document.write("<hr>");
print100RandomNums();




