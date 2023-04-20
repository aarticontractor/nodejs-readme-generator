// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([ 
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHub username',
    },
    {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is your Projects name?',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'Please write a short description of your project:',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What kind of liscence should your project have? (Use arrow keys)',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'Title',
    },
])

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
