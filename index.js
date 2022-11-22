// require 'inquirer'
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const utils = require("util");
const { isTypedArray } = require('util/types');
const render = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const dist = path.resolve(__dirname, "dist");
const dpath = path.join(dist,"team.html");
const writeFile = utils.promisify(fs.writeFile);
// Create an empty array list to store employee objects outside of array.

const teamMembers = []

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
                    // console.log(answers.type)
                                    
                
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
                           buildTeam()
                        } catch(err) {
                            // console.error(err)
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

                const manager = new Manager(answers.name, answers.number, answers.email, answers.id)
                teamMembers.push(manager)
                buildTeam();
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

                const engineer = new Engineer(answers.name, answers.GitHub, answers.email, answers.id)
                teamMembers.push(engineer)
                buildTeam();
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

                const intern = new Intern(answers.name, answers.school, answers.email, answers.id)
                teamMembers.push(intern)
                buildTeam();
            })
    }

    function buildTeam(){
        if (!fs.existsSync(dist)){
            fs.existsSync(dist)
        }fs.writeFileSync(dpath, render(teamMembers),'utf-8')
    }