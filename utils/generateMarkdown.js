// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  return "" 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "(https://opensource.org/licenses/MIT)"
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "The license used for this project: $[license}"
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.Description}
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
  # Usage
  In order to use this app, ${data.Usage}
  # License
  This project is licensed under the ${renderLicenseSection(data.License)} license.
  Here is the license link for ${data.license} ${renderLicenseLink(data.license)} 
  # Contributing
  ​Contributors: ${data.Contributing}
  # Tests
  The following is needed to run the test: ${data.Tests}
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}
`;
}

module.exports = generateMarkdown;
