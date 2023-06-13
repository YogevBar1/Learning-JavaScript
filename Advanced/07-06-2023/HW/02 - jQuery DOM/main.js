"use strict";


$(() => {

    $("#fillList").click(() => {
        const firstNumberTextBox = document.getElementById("firstNumber");
        const firstNumber = + firstNumberTextBox.value;
        const secondNumberTextBox = document.getElementById("secondNumber");
        const secondNumber = + secondNumberTextBox.value;

        const mySelect = document.getElementById("mySelect");

        // Clear previous options
        mySelect.innerHTML = '';
        for (let i = firstNumber; i <= secondNumber; i++) {
            const option = document.createElement(`option`);
            option.value = i;
            option.text = i;
            mySelect.appendChild(option);
        }

    });
});