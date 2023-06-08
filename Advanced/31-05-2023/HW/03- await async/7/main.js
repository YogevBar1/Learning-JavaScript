"use strict";

// 7. Challenge: Create a function called generateStrongPasswordAsync that does not accept anything in parentheses and returns a Promise. The function has to wait a second and enter a random password of 6 characters made up of lowercase letters, uppercase letters and. If the password contains both lowercase and uppercase letters, it must be reported as a success by deciding.
// By pressing a button, the above operation must be called, the password it drew or the failure note must be displayed.

async function test() {

    try{
    const result = await generateStrongPasswordAsync();
    alert( "Your valid password: " + result);
    }
    catch(err){
        alert(err);
    }

    

}

function generateStrongPasswordAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

                let password = '';
                for (let i = 0; i < 6; i++) {
                    const randomIndex = Math.floor(Math.random() * charset.length);
                    password += charset[randomIndex];
                }

                if (!hasUppercaseLetter(password) || !hasLowercaseLetter(password) || !hasDigit(password))
                    throw new Error(` Invalid password format!`);
                resolve(password);
            }
            catch (err) {
                reject(err);
            }

        }, 1000);
    })
}


function hasUppercaseLetter(str) {
    const regex = /[A-Z]/;
    return regex.test(str);
}

function hasLowercaseLetter(str) {
    const regex = /[a-z]/;
    return regex.test(str);
}

function hasDigit(str) {
    const regex = /\d/;
    return regex.test(str);
}

