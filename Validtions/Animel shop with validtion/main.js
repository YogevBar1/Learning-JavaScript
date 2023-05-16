function validtion(){
    const firstNameTextBox = document.getElementById("firstName");
    firstName = firstNameTextBox.value;
    const lastNameTextBox = document.getElementById("lastName");
    lastName = lastNameTextBox.value;
    const msgTextBox = document.getElementById("msg");
    msg = msgTextBox.value;

    if(firstName ==="")
    {
        firstNameTextBox.style.backgroundColor ="pink";

        setTimeout(function() {
            alert("Missing first Name!");
        }, 0);
        
        
        event.preventDefault();

    }

   
    

    if(firstName !="" && lastName ==="")
    {
        firstNameTextBox.style.backgroundColor ="yellow";
        lastNameTextBox.style.backgroundColor ="pink";

        setTimeout(function() {
            alert("Missing last Name!");
        }, 0);
        
        
        event.preventDefault();

    }

    if(firstName !="" && lastName !="" && msg==="")
    {
        lastNameTextBox.style.backgroundColor ="yellow";

        msgTextBox.style.backgroundColor ="pink";

        setTimeout(function() {
            alert("Missing Massage!");
        }, 0);
        
        
        event.preventDefault();

    }



    
    

}