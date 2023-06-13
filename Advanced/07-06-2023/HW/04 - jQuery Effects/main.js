
$(() => {

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