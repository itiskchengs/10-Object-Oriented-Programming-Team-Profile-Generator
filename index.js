//Add the npm dependencies needed
//Inquirer 
const inquirer = require('inquirer');
//File systems
const fs = require('fs');
const internal = require('stream');

//Create empty arrays to store the objects that the requires give back
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
            .then((mangerData) => {
                //Run a constructor function once built out
                teamMembers.push(mangerData);
                teamMembersId.push(mangerData.managerId);
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
            .then((engineerData) => {
                //Run a constructor function once built out
                teamMembers.push(engineerData);
                teamMembersId.push(engineerData.engineerId);
                addMember();
            })
    }
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
                message: 'What is the interns Id?'
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
            .then((internData) => {
                //Run a constructor function once built out
                teamMembers.push(internData);
                teamMembersId.push(internData.internId);
                addMember();
            })
    }
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
                    //This will where if you dont want to add anymore members then you run this function which will write the html file
                    writeHtml('output.html',teamMembers);
                }
            })
    }
    const writeHtml = function(fileName, data){
        fs.writeFile(fileName, generateMarkdown(data), (err) => {
            if(err) throw err;
            console.log('Success');
        });
    }
    //Runs the manager function
    manager();
}
//Runs the app when you run node.
runApp();


/*

const hello = function(data ,nextQuestion){
    inquirer.prompt([
        {
            name: `githubUsername`,
            type: 'input',
            message: `What is your ${nextQuestion}`,
        },
    ])
.then(({managerName}) => {
    console.log(data);
})
}
*/

//Create empty arrays for team member and for team id - DONE
//Create the runapp function that will have all the other functions insde of it. - DONE
//Create the manage function that will inquirer questions that will get the manager data. The .then function runs and take the .then below. like the create constructor, add to team member array, add to team member id and then run the create team function again
//Create team function that will have the inquirer question thatt will have a list to ask you if you want to create enginner, intern or no more. and then the conditional logic for each.
//Create engineer function that will have the inquirer questions that will get the engineer data. The .then function runs and take the .then below. like the create constructor, add to team member array, add to team member id and then run the create team function again
//Create intern function that wil have the inquirer questions that will get the intern data. The .then function   function runs and take the .then below. like the create constructor, add to team member array, add to team member id and then run the create team function again
//Create the end function that when the create team list when you say no more addtional members then the function wil have the write file that will build out the html file.
//Creat testing to test each constructor to check if the id, name and email is coming through.
/*
    .then((data){
        const new member = constructor function //This is where you need to requre the pages that have the constructor functions that are built out.
        teamMember(member);
        teamID(teammemberID)
        //Create team function
    })

*/