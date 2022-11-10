// require 'inquirer'
const inquirer = require('inquirer');
const fs = require("fs");
const utils = require("util");

const writeFile = utils.promisify(fs.writeFile);
// Create an empty array list to store employee objects outside of array.

const arr = []



//6:16 Day 1
// Gather manager data 

    //inquirer.prompt()

   async function addEmployee() {
    try {
        const answers = await inquirer
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
                            {
                                name: "All Done Adding Employees!",
                                value:"D"
                            },
                        ]
                    }
                ])
                
                    if(answers.type === "Manager") {
                        addManager();
                    }

                    if(answers.type === "Engineer") {
                        addEngineer();
                    }

                    if(answers.type === "Intern") {
                        addIntern();
                    } else {
                        try {
                        // answers.type === "All Done Adding Employees!"
                            await writeFile("team.html", "Team Profile");
                            console.log("Employees Added!");
                        } catch(err) {
                            console.error(err)
                        }
                } 
            }catch(err) {
                console.log(err);
            }
        
}
            

    async function addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team manager's name?",
                    name: "Manager",
                }
            ]);
        
        addEmployee();
    }


    async function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team engineer's name?",
                    name: "Engineer",
                }
            ]);
        
        addEmployee();
    }

    
    async function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team intern's name?",
                    name: "Intern",
                }
            ]);
        
        addEmployee();
    }
   

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



        