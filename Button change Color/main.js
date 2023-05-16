

function paintMeYellow(buttonObject) {
    //Access to the DOM Object describing the button

    buttonObject.style.backgroundColor = "Yellow";
}

function paintMeBlue(buttonObject) {
    //Access to the DOM Object describing the button

    buttonObject.style.backgroundColor = "Blue";
}

function randomNum() {
    const num = Math.floor((Math.random() * 100));
    alert(num);
}

function showSum() {
    const textBox1 = document.getElementById("num1");
    const textBox2 = document.getElementById("num2");
    const num1 = parseInt(textBox1.value);
    const num2 = parseInt(textBox2.value);
    if (isNaN(num1) || isNaN(num2))
        alert("Error! you must insert number");
    else {
       
        alert(`Sum  = ${num1 + num2}`);
    }

   
}


function displayRandomNumber(){
    const mainDiv = document.getElementById("mainDiv");
    const num = Math.floor(Math.random() * 100);
    mainDiv.innerText = num;
}