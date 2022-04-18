///add bolier point code use read line 
//response should come back as an array

// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// reader.question("Welcome to the password validator tool. What password would you like to validate?" , function(input) 
    
// New code Line

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// set up for console interface //
reader.question("Welcome to password validator tool. What password would you live to validate?", function(input){ //showing what question console will display//

    console.log(input[0]);

    for (let i = 0; i <input.length; i ++) { //a for loop having it read the response length//
        break;
    }
    
    if (input.length >= 10) {     //setting requirement for password being equal or greater than 10//
    console.log('password meets requirement')  
}   else {                                      //easy way to console log for just one other outcome for password being less than 10//
    console.log('password not long enough :(') 
}

reader.close(); 
}) 