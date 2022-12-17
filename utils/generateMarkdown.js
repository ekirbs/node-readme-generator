// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
  if (projectLicense !== 'N/A') {
    return `![License: ${projectLicense}](https://img.shields.io/badge/License-${projectLicense}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
  if (projectLicense !== 'N/A') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (projectLicense === 'ISC') {
    return `(https://opensource.org/licenses/ISC)`;
  } else if (projectLicense === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (projectLicense === 'MPL_2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (projectLicense === 'AGPL_v3') {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (projectLicense === 'GPLv3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (projectLicense === 'Unlicense') {
    return `(http://unlicense.org/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
  if (projectLicense !== 'N/A') {
    return `
  ## License

  This application is covered by the ${projectLicense} license.
  `
  } else {
    return ``
  }
}

// let licenseBadge = renderLicenseBadge();
// let licenseLink = renderLicenseLink();
// let licenseSection = renderLicenseSection();

function generateMarkdown(data) {
  return`# ${data.projectTitle}
  
  ![License: ${data.projectLicense}](https://img.shields.io/badge/License-${data.projectLicense}-blue.svg)
  ${renderLicenseBadge()}${renderLicenseLink()}

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
  
  
  ## Credits
  
  ${data.projectCredits}
  ${renderLicenseSection()}
  ## Features
  
  ${data.projectFeatures}
  
  ## How to Contribute
  
  ${data.projectGuidelines}
  
  ## Tests
  
  ${data.testInstructions}
  
  ## Questions
  
  Github: [${data.userGithub}](https://github.com/${data.userGithub})
  Email: [${data.userEmail}](mailto:user@example.com)`

}

module.exports = generateMarkdown;
