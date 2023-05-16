function paintMe(buttonObject){
    //Access to the DOM Object describing the button

    buttonObject.style.backgroundColor ="Green";
}


function paintButton(){
    const buttonObject = document.getElementById("myButton");
    buttonObject.style.backgroundColor ="Green";

}

function showText(){
    const textBox = document.getElementById("textBox");
    const text = textBox.value;
    alert(text);
}