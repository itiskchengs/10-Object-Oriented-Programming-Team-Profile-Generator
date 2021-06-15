//Add the npm dependencies needed and the required files
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const {generateFull} = require('./dist/html-template');

//Create empty arrays to store the objects that the requires answers give back
//team members array
const teamMembers = [];
//team members ID
const teamMembersId = [];

//Starts the runApp function
const runApp = function () {
    //Manager function 
    const manager = function () {
        inquirer.prompt([
            {
                name: 'managerName',
                type: 'input',
                message: 'What is the team managers name?',
            },
            {
                name: 'managerId',
                type: 'input',
                message: 'What is the team managers id?',
            },
            {
                name: 'managerEmail',
                type: 'input',
                message: 'What is the team managers email?',
            },
            {
                name: 'managerOfficeNumber',
                type: 'input',
                message: 'What is the team managers office number?'
            },
        ])
            .then(({managerName, managerId, managerEmail, managerOfficeNumber}) => {
                const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
                teamMembers.push(manager);
                teamMembersId.push(managerId);
                addMember();
            })
    }
    //Engineer function
    const engineer = function () {
        inquirer.prompt([
            {
                name: 'engineerName',
                type: 'input',
                message: 'What is the engineers name?'
            },
            {
                name: 'engineerId',
                type: 'input',
                message: 'What is the engineers ID?',
                validate: checkId,
            },
            {
                name: 'engineerEmail',
                type: 'input',
                message: 'What is the engineers email?'
            },
            {
                name: 'engineerGithub',
                type: 'input',
                message: 'What is the GitHub username?'
            },
        ])
            .then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
                const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                teamMembers.push(engineer);
                teamMembersId.push(engineerId);
                addMember();
            })
    }
    //Intern function
    const intern = function () {
        inquirer.prompt([
            {
                name: 'internName',
                type: 'input',
                message: 'What is the interns name?'
            },
            {
                name: 'internId',
                type: 'input',
                message: 'What is the interns Id?',
                validate: checkId,
            },
            {
                name: 'internEmail',
                type: 'input',
                message: 'What is the interns email?'
            },
            {
                name: 'internSchool',
                type: 'input',
                message: 'What is the interns school?'
            },
        ])
            .then(({internName, internId, internEmail, internSchool}) => {
                const intern = new Intern(internName, internId, internEmail, internSchool);
                teamMembers.push(intern);
                teamMembersId.push(internId);
                addMember();
            })
    }
    //Add member function
    const addMember = function () {
        inquirer.prompt([
            {
                name: 'anotherEmployee',
                type: 'list',
                choices: ['engineer', 'intern', 'no more new members'],
                message: 'What is your anotherEmployee',
            },
        ])
            .then((data) => {
                if (data.anotherEmployee === 'engineer') {
                    engineer();
                } else if (data.anotherEmployee === 'intern') {
                    intern();
                } else {
                    writeHtml();
                }
            })
    }
    const writeHtml = function(){
        fs.writeFile('src/output.html', generateFull(teamMembers), (err) => {
            if(err) throw err;
            console.log('Success');
        });
    }
    const checkId = function(input) {
        const checkingId = teamMembersId.find(id => id === input)
        if(checkingId){
            return 'This id has already been taken. Try another.';
        }else{
            return true;
        }
    }
    //Runs the manager function
    manager();
}
//Runs the app when you run node.
runApp();
