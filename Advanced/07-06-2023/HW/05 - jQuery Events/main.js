"use strict"

// Repeat the previous exercise (jQuery Effects) from the beginning, but this time the body of the HTML must contain only the two buttons and one div that is a container for all the above divs:
// <body>
//     <button id="blueButton">Fade Out Blue Squares</button>
//     <button id="redButton">Fade Out Red Squares</button>
//     <div id="container"></div>
// </body>

// That is, when uploading the page, the aforementioned 15 divs must be created, including the insertion of the numbers 1 to 15 and including the definition of blue and red colors in a random manner.
// The click event of the buttons must be dynamically registered.
// When the page loads, 15 divs containing the numbers 1 to 15 will appear, but the colors blue and red are set randomly:

// By clicking on the blue button, the blue divs disappeared with a fade-out effect of
//  2 seconds and changed the inscription of the blue button: 

// With another click on the blue button, display the blue divs with a fade-in effect of 
// 2 seconds and return the inscription of the blue button accordingly: 

// By clicking on the red button, the red divs disappeared with a fade-out effect of 2
//  seconds and changed the inscription of the red button:
 
// By clicking again on the red button, display the red divs with a fade-in effect of 
// 2 seconds and return the inscription of the red button accordingly:

// Add a dynamic click event to each div so that when a div is clicked an alert is
//  displayed showing the number written inside the div that was clicked.

$(() => {
    $(document).ready(function(){
        for(let i =1; i<=15; i++){
            let random = Math.random();
            let div;
            random < 0.5 ? div= $('<div></div>').addClass('squareRed').text(i):
            div = $('<div></div>').addClass('squareBlue').text(i);
            $('.container').append(div);
        }

        $('.container').on('click' , 'div',function(){
            const number = $(this).text();
            alert('Clicked div number: ' + number)
        })

    })

    let blueClick = 1;
    let redClick = 1;
    $("#fadeBlue").click(() => {
        if (blueClick % 2 === 1) {
            const blueDivs = $(".squareBlue");
            blueDivs.each((index, element) => {
                $(element).fadeOut(2000);

            })
            const blueButton = $("#fadeBlue");
            blueButton.text("Fade In Blue Squares");
        }
        else {
            const blueDivs = $(".squareBlue");
            blueDivs.each((index, element) => {
                $(element).fadeIn(2000);
            })
            const blueButton = $("#fadeBlue");
            blueButton.text("Fade Out Blue Squares");
        }
        blueClick++;
        
    });


    $("#fadeRed").click(() => {
        if (redClick % 2 === 1) {
            const redDivs = $(".squareRed");
            redDivs.each((index, element) => {
                $(element).fadeOut(2000);

            })
            const redButton = $("#fadeRed");
            redButton.text("Fade In Red Squares");
        }
        else {
            const redDivs = $(".squareRed");
            redDivs.each((index, element) => {
                $(element).fadeIn(2000);
            })
            const redButton = $("#fadeRed");
            redButton.text("Fade Out Red Squares");
        }
        redClick++;

    });


    
});