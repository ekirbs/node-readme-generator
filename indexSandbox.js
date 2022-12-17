const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
      // what do you want this file name to be?  Or just make it stock...
      // fs.writeFile first argument is how to write to
      // should all of these be 'else N/A, or just else GONE?
      {
        type: 'input',
        message: 'Enter your project title:',
        name: 'projectTitle',
        // validate: (value) => { if(value){return true} else {return 'You must enter a project title:'}}
      },
      {
        type: 'input',
        message: 'Write a short description of your project:',
        name: 'projectDescription',
        // function validation (value) {
        //   if (value) {
        //     return true;
        //   } else {
        //     return ("You must enter a project description");
        //   }
        // }
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
        name: 'projectUsage',
      },
      // Credits section.  input or N/A (or remove?)
      {
        type: 'checkbox',
        message: 'Choose what kind of license should your project have:',
        name: 'projectLicense',
        choices: [
          "Apache 2.0",
          "ISC",
          "MIT",
          "Mozilla PL 2.0",
          "GNU AGPLv3",
          "GNU GPLv3",
          "Unlicense",
          "N/A",
        ]
      },
      // following sections should be optional.  if nothing is entered and the person okays the prompt warning, the section is removed.
      {
        type: 'input',
        message: 'Provide contribution guidelines:',
        name: 'projectGuidelines',
      },
      {
        type: 'input',
        message: 'Provide test instructions:',
        name: 'testInstructions',
      },
      {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'userEmail',
      }
    ]

  // .then((response) => {
  //   console.log('response: ', response);
  //   return 
    // return response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!'
    //   )
  //   }
  // );

// TODO: Create a function to write README file
// function writeToFile (data) {
//   const markdown = generateMarkdown(data);
//   fs.writeFile('./utils/generateReadme.md', JSON.stringify(data, null, '\t'), err => {
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


// inquirer
// .prompt(questions)
// .then((answers) => {
//   // create template literal with answers
//   const html = generateHTML(answers);
//   fs.writeFile('index.html', html, (err) => {
//     // if (err) {console.error(err); }
//     // else {
//     //   console.log('html created');
//     // };

//     err ? console.log(err) : console.log('html created');
//   });

// })

// function writeHTML(filename, data) {
//   fs.writeFile(filename, data, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('created')
//   })
// }

// function init() {
//   inquirer.prompt(questions)
//   .then (data => {
//     console.table(data);
//     writeHTML('index.html', JSON.stringify(data))
//   })
// }

// (license !== 'N/A' && color !== 'N/A')