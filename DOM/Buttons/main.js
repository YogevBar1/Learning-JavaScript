// 6. Create an HTML page containing four buttons.
//  Define with a CSS file that all buttons have a 
//  green background color and a white font color. Every
//   time a mouse enters a button - color its background 
//   color red and its font color blue (that is, only the 
//     button entered). Every time the mouse exits a button 
//     - return the background color his to green and his font
//      color to white
//  (ie from the button they exited from).

function changeColorIn(button) {

    button.style.backgroundColor = "red";
    button.style.color = "blue";

}

function changeColorOut(button) {

    button.style.backgroundColor = "green";
    button.style.color = "white";

}

// 7. Create a text box. Each time a key is typed in the box,
//  its current color was changed to a random background color from 
// among the following colors: red, green, blue, yellow, white, purple.

function randomColorWhenInsertChar(input) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    const color = "";

    switch (randomNum) {
        case 1:
            input.style.backgroundColor = "red";
            break;

        case 2:
            input.style.backgroundColor = "green";
            break;

        case 3:
            input.style.backgroundColor = "blue";
             break;

        case 4:
            input.style.backgroundColor = "yellow";
            break;

        case 5:
            input.style.backgroundColor = "white";
            break;

        case 6:
            input.style.backgroundColor = "purple";
            break;
    }

}