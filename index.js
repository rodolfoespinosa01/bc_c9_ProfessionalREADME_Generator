const inquirer = require('inquirer');
const utils = require('./assets/utils/generateMarkDown.js');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    // type: 'input',
    name: 'title',
    message: 'What would you like your Project Title to be?'
  },
  {
    name: 'description1',
    message: 'What was your motivation?'
  },
  {
    name: 'description2',
    message: 'Why did you build this project?'
  },
  {
    name: 'description3',
    message: 'What problem does it solve?'
  },
  {
    name: 'description4',
    message: 'What did you learn?'
  },
  {
    name: 'insallation',
    message: 'What would you like you like your Instructions to look say?'
  },
  {
    name: 'usage',
    message: 'What are the steps required to install your project?'
  },
  {
    name: 'license',
    message: 'What is the license information for your project?'
  },
  {
    name: 'badge',
    message: 'Please choose the license from the list provided?',
    type: 'list',
    choices: ['MIT', 'ISC', 'GNU']
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
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init () {
  inquirer.prompt(questions).then(utils.generateMarkDown);
}

// Function call to initialize app
init();

