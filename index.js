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

    function addEmployee() {
    inquirer.prompt([
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
                ]).then ((answers)=>{
                    console.log(answers.type)
                
                
                    if(answers.type === "M") {
                        addManager();
                     }
                  else if(answers.type === "E") {
                        addEngineer();
                    }

                   else if(answers.type === "I") {
                        addIntern();
                    } else {
                        try {
                            writeFile("team.html", "Team Profile");
                            console.log("Employees Added!");
                        } catch(err) {
                            console.error(err)
                        }
                }
                })       
}
            

     function addManager() {
     inquirer.prompt([
                {
                    type: "input",
                    message: "What is the team manager's name?",
                    name: "name",
                }, 

                {
                    type: "input",
                    message: "What is the manager's room number?",
                    name: "number"
                },

                {
                    type: "input",
                    message: "What is the manager's email?",
                    name: "email"
                },

                {
                    type: "input",
                    message: "What is the manager's id?",
                    name: "id"
                }

            ])
            .then((answers) => {
                console.log(answers)
            })
    }


    function addEngineer() {
      inquirer.prompt([
                {
                    type: "input",
                    message: "What is the team engineer's name?",
                    name: "name",
                },

                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "GitHub"
                },

                {
                    type: "input",
                    message: "What is the engineer's email?",
                    name: "email"
                },

                {
                    type: "input",
                    message: "What is the engineer's id?",
                    name: "id"
                }
            ])
            .then((answers) => {
                console.log(answers)
            })
    }

    
    function addIntern() {
      inquirer.prompt([
                {
                    type: "input",
                    message: "What is the team intern's name?",
                    name: "name",
                },

                {
                    type: "input",
                    message: "What is the? name of the intern's school",
                    name: "school"
                },

                {
                    type: "input",
                    message: "What is the intern's email?",
                    name: "email"
                },

                {
                    type: "input",
                    message: "What is the intern's id?",
                    name: "id"
                }
            ])
            .then((answers) => {
                console.log(answers)
            })
    }











/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     function addEmployee() {
//         function addManager() {
//             managerName
//             managerRoomNumber
//             managerEmail
//             managerId

//             .then(answers => {
//                 const manager = new Manager(answers.managerName, answers.managerRoomNumber, answers.managerEmail, answers.managerId);
//                 teamMembers.push(manager);
//                 idArray.push(answers.managerId);

//                 createTeam();
//             });
//         }
//     }

//     function createTeam() {
//         inquirer.prompt([
//             "Which employee would you like to add next?",
//             choices: [
//                 "Engineer",
//                 "Intern",
//                 "No more employees to add!"
//             ]
//         ]).then(userChoice => {
//             switch (userChoice.memberChoice) {
//                 case "Engineer":
//                     addEngineer();
//                     break;
//                 case "Intern":
//                     addIntern();
//                     break;
//             }
//         });
//     }

//     function addEmployee()
//     function addEngineer() {
//         engineerName
//         engineerGitHub
//         engineerEmail
//         engineerId

//         .then(answers => {
//             const engineer = new engineer(answers.engineerName, answers.engineerGitHub, answers.engineerEmail, answers.engineerId);
//             teamMembers.push(engineer);
//             idArray.push(answers.engineerId);

//             createTeam();
//         });
//     }

//     function createTeam() {
//         inquirer.prompt([
//             "Which employee would you like to add next?"
//             choices: [
//                 "Manager",
//                 "Intern",
//                 "No more employees to add!"
//             ]
//         ]).then(userChoice => {
//             switch (userChoice.memberChoice) {
//                 case "Manager":
//                     addManager();
//                     break;
//                 case "Intern":
//                     addIntern();
//                     break;
//             }
//         });
//     }

//     function addEmployee()
//     function addIntern() {
//         internName
//         internGitHub
//         internEmail
//         internId

//         .then(answers => {
//             const intern = new intern(answers.internName, answers.internGitHub, answers.internEmail, answers.internId);
//             teamMembers.push(intern);
//             idArray.push(answers.internId);

//             createTeam();
//         });
//     }

//     function createTeam() {
//         inquirer.prompt([
//             "Which employee would you like to add next?",
//             choices: [
//                 "Manager",
//                 "Engineer",
//                 "No more employees to add!"
//             ]
//         ]).then(userChoice => {
//             switch (userChoice.memberChoice) {
//                 case "Manager":
//                     addManager();
//                     break;
//                 case "Engineer":
//                     addEngineer();
//                     break;
//             }
//         });
//     }
    
   

// // Gather Engineer data

//     //inquirer.prompt()

//     //THEN Build a Engineer object



// // Gather Intern data

//     //inquirer.prompt()

//     //THEN Build a Engineer object



// // Ask for which team member they want to add or are they done?

//         //inquirer.prompt()

//         // THEN decide which function to call (done, engineer, etc.)


    
// // Generate the HTML 



// // Write the html file



        