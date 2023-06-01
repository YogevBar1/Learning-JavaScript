"use strict";

function test() {

    downloadSomething(
        value => console.log("Success: " + value),
        err=> console.log("Error: " + err.message)
        );


}

function downloadSomething(successCallback, errorCallback) {
    setTimeout(() => {    //Demo for downloading something

        try {
            const value = "Cool Value Downloaded...";

            if (Math.random() < 0.5) Math.random().toFixed(-5);//demo for some crash
            successCallback(value);
        }
        catch (err) {
            errorCallback(err);
        }
    }, 3000);

}