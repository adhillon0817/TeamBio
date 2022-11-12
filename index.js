// require 'inquirer'
const inquirer = require('inquirer');
const fs = require("fs");
const utils = require("util");
const { isTypedArray } = require('util/types');

const writeFile = utils.promisify(fs.writeFile);
// Create an empty array list to store employee objects outside of array.

const arr = []

addEmployee();

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
        await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team manager's name?",
                    name: "Manager",
                }, 

                {
                    type: "input",
                    message: "What is the manager's room number?",
                    name: "Manager"
                },

                {
                    type: "input",
                    message: "What is the manager's email?",
                    name: "Manager"
                },

                {
                    type: "input",
                    message: "What is the manager's id?",
                    name: "Manager"
                }

            ]);
        
        addEmployee();
    }


    async function addEngineer() {
       await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team engineer's name?",
                    name: "Engineer",
                },

                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "Engineer"
                },

                {
                    type: "input",
                    message: "What is the engineer's email?",
                    name: "Engineer"
                },

                {
                    type: "input",
                    message: "What is the engineer's id?",
                    name: "Engineer"
                }
            ]);
        
        addEmployee();
    }

    
    async function addIntern() {
        await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the team intern's name?",
                    name: "Intern",
                },

                {
                    type: "input",
                    message: "What is the? name of the intern's school",
                    name: "Intern"
                },

                {
                    type: "input",
                    message: "What is the intern's email?",
                    name: "Intern"
                },

                {
                    type: "input",
                    message: "What is the intern's id?",
                    name: "Intern"
                }
            ]);
        addEmployee();
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function addEmployee() {
        function createManager() {
            managerName
            managerRoomNumber
            managerEmail
            managerId

            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerRoomNumber, answers.managerEmail, answers.managerId);
                teamMembers.push(manager);
                idArray.push(answers.managerId);

                createTeam();
            });
        }
    }

    
    .then(answers => {
                const intern = new Intern(answers.internName, answer.internSchool, answer.internEmail, answer.internId);
                teamMembers.push(intern);
                isTypedArray.push(answers.internId) ;
            
            })

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



        