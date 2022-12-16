// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt(
  [

    // what do you want this file name to be?  Or just make it stock...
    // fs.writeFile first argument is how to write to
    {
      type: 'input',
      message: 'Enter your project title:',
      name: 'projectTitle',
      validate: (value) => { if(value){return true} else {return 'You must enter a project title:'}}
    },
    {
      type: 'input',
      message: 'Write a short description of your project:',
      name: 'projectDescription',
      
    },
    //  Do you want a table of contents?
    {
      type: 'input',
      message: 'Provide installation instructions:',
      name: 'projectInstallation',
    },
    {
      type: 'input',
      message: 'Provide usage instructions:',
      name: 'usage',
    },
    {
      type: 'checkbox',
      message: 'Choose what kind of license should your project have:',
      name: 'license',
      choices: [
        'Apache',
        "ISC",
        "MIT",
        "N/A",
      ]
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines:',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'Provide test instructions:',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter your Github username:',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter your email address:',
      name: 'email',
    }
  ]
)
  .then((response) => {
    console.log('response: ', response);
    // return response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!'
    //   )
    }
  );

// TODO: Create a function to write README file
// function writeToFile (fileName, data) {
//   fs.writeFile('./generateReadme.md', JSON.stringify(data, null, '\t'), err => {
//     if (err) {
//       return console.log(err);
//     }
    
//     console.log ('Success!  Youre README file has been generated.')
//   });
// }

// function writeToFile(fileName, data) {
//   fs.writefile('./generateReadme.md', JSON.stringify(data, null, '\t'), err) => {
//   // generateMarkdown(data), (err, success) => (stuff))
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
