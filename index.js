const inquirer = require('inquirer');
const utils = require('./utils/generateMarkDown.js');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    // type: 'input',
    name: 'title',
    message: 'What would you like your Project Title to be?'
  },
  {
    name: 'description',
    message: 'What would you like your description to say in the README.md file?'
  },
  {
    name: 'tableOfContents',
    message: 'What would you like you Table of Contents to look say??'
  },
  {
    name: 'insallation',
    message: 'What would you like you like your Instructions to look say??'
  },
  {
    name: 'usage',
    message: 'What would you like to include in your usage section?'
  },
  {
    name: 'license',
    message: 'What is the license information for your project?'
  },
  {
    name: 'contributing',
    message: 'Who do you want to include in the contributing section?'
  },
  {
    name: 'tests',
    message: 'What do you want to include in your Tests section?'
  },
  {
    type: 'confirm',
    name: 'darkMode',
    message: 'Would you like dark mode??'
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init () {
  promptUser();
}

// Function call to initialize app
init();

function promptUser() {
  inquirer.prompt(questions).then(utils.generateMarkDown);
};