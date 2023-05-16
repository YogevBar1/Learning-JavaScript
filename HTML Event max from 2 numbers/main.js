function maxFromTwoNum() {
    const num1 = + prompt("Insert first number");
    const num2 = + prompt("Insert second number");

    if (num1 > num2)
        alert(`Max = ${num1}`);

    else
        alert(`Max = ${num2}`);

}

function randomNumberToTit(limit){
    const num = Math.floor(Math.random()*limit);
    document.title = num;
}

function displayMessage(msg){
    alert(msg);
}