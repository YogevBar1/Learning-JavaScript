"use strict";
// 4. Create a function called generateWorkingDayAfterDelayAsync that does not accept anything in the brackets and 
// returns a Promise. The function must wait a second and then select a day from the seven days of the week ("Sunday",
//  "Monday"... "Saturday"). If the guerilla is a working day ("Sunday" to "Thursday"), it must report the day with resolve 
//  as a success. If the guerilla is "Friday" or "Saturday", it must report with reject an error message that includes the 
//  name of the day that is not a working day drawn
// By pressing a button, the above function must be called, display the working day that was drawn or the failure message.

function test() {

    generateWorkingDayAfterDelayAsync().then(day => { alert(`The day ${day} is weekend!`) })
        .catch(err => alert(err));
}

function generateWorkingDayAfterDelayAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const randomNum = Math.floor(Math.random() * 7);
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                if (!isWeekend(days[randomNum]))
                    throw `The day ${days[randomNum]} is day work!`;
                resolve(days[randomNum]);
            }
            catch (err) {
                reject(err);
            }
        }, 1000)
    })
}

function isWeekend(day) {
    if (day === "Friday" || day === "Saturday")
        return true;

    return false;
}


