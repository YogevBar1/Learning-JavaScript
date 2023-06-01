function displayPI() {

    try {
        const digits = +prompt("Enter PI number of decimal digits(1 to 100): ");
        const pi = Math.PI.toFixed(digits);
        alert(pi);
        alert("done - end of try");
    }
    catch (err) { // Only on exception we will get into this block
        // alert(`Im im the catch block. \nerror name: ${err.name} \nerror message : ${err.message}`);
        alert("Error. please enter a legal number between 1 and 100.");

    }
    finally{
        alert("I`m in block finally");
    }

    alert("done - end of function");
}