#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number - done 
// 2) user input a guessing number -done
// 3) campare user input with computer and generated number and show result


const randonNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([

{
     name: "userGuessedNumber",
     type: "number",
     message: "please guess a number: ",
}
])
if (answer.userGuessedNumber === randonNumber){
    console.log("congragulatios! you guessed right number")
} 
else {
    console.log("you guessed wrong number");
}

