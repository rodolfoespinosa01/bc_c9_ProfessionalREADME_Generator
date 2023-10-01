const fs = require('fs');

const tableOfContents = `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
`;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
 
  switch(license) {
    case 'MIT' :
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      case 'ISC':
        return 'https://img.shields.io/badge/License-ISC-blue.svg';
        case 'GNU' :
          return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  switch(licenseLink) {
    case 'MIT' :
      return 'https://opensource.org/licenses/MIT';
      case 'ISC':
        return 'https://opensource.org/licenses/ISC';
        case 'GNU' :
          return 'https://www.gnu.org/licenses/gpl-3.0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkDown(data) {
  const badge = renderLicenseBadge(data.badge);
  const md =
`
# ${data.title}![License: ${data.badge})](${badge})
    
## Description

> ### What was your motivation?
> ${data.description1}

> ### Why did you build this project?
> ${data.description2}

> ### What problem does it solve?
> ${data.description3}

> ### What did you learn?
> ${data.description4}
  
## Table of Contents

${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

![alt text](assets/images/screenshot.png)

## License
${data.license}

## Badges

![License: ${data.badge})](${badge})

## Contributing
${data.contributing}

## Tests
${data.tests}`;

  fs.writeFile('./README.md', md.trim(), (err) => {
    if (err) throw err;

    console.log('File created');
  });
};


module.exports = {
  generateMarkDown: generateMarkDown,
  renderLicenseBadge: renderLicenseBadge,
  renderLicenseLink: renderLicenseLink,
  renderLicenseSection: renderLicenseSection

}
