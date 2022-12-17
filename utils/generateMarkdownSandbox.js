// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  if (license !== 'N/A') {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`

     // if (projectLicense === 'Apache_2.0') {
  //   licenseName = 'Apache-2.0';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  // } else if (projectLicense === 'ISC') {
  //   licenseName = 'ISC';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-blue.svg)](https://opensource.org/licenses/ISC)`
  // } else if (projectLicense === 'MIT') {
  //   licenseName = 'MIT';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-yellow.svg)](https://opensource.org/licenses/MIT)`
  // } else if (projectLicense === 'MPL_2.0') {
  //   licenseName = 'MPL-2.0';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  // } else if (projectLicense === 'AGPL_v3') {
  //   licenseName = 'agpl-3.0';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  // } else if (projectLicense === 'GPLv3') {
  //   licenseName = 'agpl-3.0';
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  // } else if (projectLicense === 'Unlicense') {
  //   return `[![License: ${projectLicense}](https://img.shields.io/badge/license-${projectLicense}-blue.svg)](http://unlicense.org/)`
  // } else {
  //   return `N/A`
  // }
  // if (projectLicense !== 'N/A') {
  //   const apache = 'Apache-2.0';
  //   return `(https://img.shields.io/badge/License-${projectLicense}-blue.svg)`;
  // } else {
  //   return ``;
  // }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
  if (license !== 'N/A') {

  return `\n - [License](${license}) \n`
  } else {
    return ''
  }
  // if (license !== 'N/A') {

  // return `\n - (https://opensource.org/licenses/${apache}) \n`
  // } else {
  //   return ''
  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `
    This project is license under ${license}`
  } else {
    return `${license}`
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(projectTitle, projectDescription, projectInstallation, projectUsage, projectLicense, projectGuidelines, testInstructions, userName, userEmail)
function generateMarkdown(data) {
  return`# ${data.projectTitle}

  ## Description
  
  ${data.projectDescription}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.projectInstallation}
  
  ## Usage
  
  ${data.projectUsage}
  
  ![alt text](assets/images/screenshot.png)
    
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${data.projectLicense}

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

}

module.exports = generateMarkdown;
