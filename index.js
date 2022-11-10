// require 'inquirer'
const inquirer = require('inquirer');


// Create an empty array list to store employee objects outside of array.

const arr = []



//6:16 Day 1
// Gather manager data 

    //inquirer.prompt()

    inquirer
        .prompt([
            {
            type: "list", 
            message: "Which type of team member would you like to add?",
            name: "type",
            choices: [
                {
                    name: "Manager",
                    value: "M"
                }, 
                {
                    name: "Engineer",
                    value:"E"
                },
                {
                    name: "Intern",
                    value:"I"
                },
            ]
            }
        ])
        .then((answers) => {
            console.log(answers);
        });
        



// Gather Engineer data

    //inquirer.prompt()

    //THEN Build a Engineer object



// Gather Intern data

    //inquirer.prompt()

    //THEN Build a Engineer object



// Ask for which team member they want to add or are they done?

        //inquirer.prompt()

        // THEN decide which function to call (done, engineer, etc.)


    
// Generate the HTML 



// Write the html file



        