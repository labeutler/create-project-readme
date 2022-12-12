const fs = require('fs');
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/license-MIT-yellow)";
  } else if (license === "Apache") {
    return "![License](https://img.shields.io/badge/license-Apache-yellow)";
  } else if (license === "Mozilla") {
    return "![License](https://img.shields.io/badge/license-Mozilla-yellow)";
  } else {
    return ""
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[License: MIT](https://choosealicense.com/licenses/mit/)";
  } else if (license === "Apache") {
    return "[License](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "Mozilla") {
    return "[License](https://choosealicense.com/licenses/mpl-2.0/)";
  } else {
    return ""
  }
}

// Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  # ${answers.title}
  ${renderLicenseBadge(answers.license)}
    
  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Description
  * ${answers.description}
  * ${answers.acceptance}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  * Name: ${answers.name}
  * GitHub User Name: ${answers.user}
  * GitHub Link: ${answers.githubLink}
  * GitHub Repository Link: ${answers.clone}
  * Github Email Address: ${answers.email}
  
  ## License
  ${renderLicenseLink(answers.license)}
  `
}

module.exports = generateMarkdown;
