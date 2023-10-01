const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkDown(data) {
  const md =
`
# ${data.title}
    
## Description
${data.description}
  
## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}`;

  fs.writeFile('./README.md', md.trim(), (err) => {
    if (err) throw err;

    console.log('File created');
  });
};

module.exports = generateMarkDown;
