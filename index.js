const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
      // what do you want this file name to be?  Or just make it stock...
      // should all of these be 'else N/A, or just else GONE?
      {
        type: 'input',
        message: 'Enter your project title:',
        name: 'projectTitle'
        // validate: (value) => { if(value){return true} else {return 'You must enter a project title:'}}
      },
      {
        type: 'input',
        message: 'Write a short description of your project:',
        name: 'projectDescription'
      },
      {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'projectInstallation'
      },
      {
        type: 'input',
        message: 'Provide usage instructions:',
        name: 'projectUsage'
      },
      {
        type: 'input',
        message: 'List your collaborators',
        name: 'projectCredits'
      },
      {
        type: 'list',
        message: 'Choose what kind of license should your project have:',
        name: 'projectLicense',
        choices: [
          "Apache_2.0",
          "ISC",
          "MIT",
          "MPL_2.0",
          "AGPL_v3",
          "GPLv3",
          "Unlicense",
          "N/A"
        ]
      },
      // following sections should be optional.  if nothing is entered and the person okays the prompt warning, the section is removed.
      {
        type: 'input',
        message: 'List the features of your project:',
        name: 'projectFeatures'
      },
      {
        type: 'input',
        message: 'Provide contribution guidelines:',
        name: 'projectGuidelines'
      },
      {
        type: 'input',
        message: 'Provide test instructions:',
        name: 'testInstructions'
      },
      {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'userGithub'
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'userEmail'
      }
    ]

function init() {
  inquirer.prompt(questions)
  .then (data => {
    console.table(data);
    const readme = generateMarkdown(data);
    fs.writeFile('./output/README.md', readme, (err) => {
      err ? console.error(err) : console.log('readme created.')
    })
  })
}

init();