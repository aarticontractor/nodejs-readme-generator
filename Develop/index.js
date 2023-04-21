// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");

// TODO: Created an array of questions for user input

let questions = [ 
    {
    type: 'input',
    message: 'What is your GitHub profile link:',
    name: 'profile',
    },
    {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is your Project title?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Please write a short description of your project:',
    name: 'description',
    },
    {
    type: 'list',
    message: 'What kind of license should your project have? (Use arrow keys)',
    name: 'license',
    choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Provide instructions and examples for usage:',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Explain the necessary steps to run the tests for your project:',
    name: 'tests',
    },
    {
    type: 'input',
    message: 'Explain the guidelines for contributing to this project:',
    name: 'contributions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, the (Generated)README.md file has been successfully created!");
    });
}

// TODO: Create a function to initialize app
// Using an async function allows the program to wait for asynchronous operations to complete before continuing 
// to execute the rest of the code.
async function init() {
    console.log("Starting the (Generated)README.md generator...");

    // Prompt the user for answers. 
    // By using await before inquirer.prompt, the program waits for the user to finish answering the prompts before continuing to the next line of code. 
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    // Generate the README content.
    let readmeContent = generatorMarkdown(answers);
    console.log("READ ME CONTENT IS" +readmeContent);
        // Write the README file.
        writeToFile("Generated-README.md", readmeContent);

}

// Function call to initialize app
init();
