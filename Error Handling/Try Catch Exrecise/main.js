function runUserCode(){
    const codeTextBox = document.getElementById("codeBox");

    const code = codeTextBox.value;
    try{
    eval(code);
    }
    catch(err){
        alert("Error!")
    }
}

