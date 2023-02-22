// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "Title",
        message: "What is the title of your project"
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a detailed description of your project"
    },
    {
        type: "input",
        name: "Table of contents (Optional)",
        message: "Provide a table of contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project? Provide a step-by-step description."
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators, if any, with links to their GitHub profiles"
    },
    {
        type: "input",
        name: "License",
        message: "Provide a a list of licenses used"
    },
    {
        type: "input",
        name: "Contributions",
        message: "Provide guidelines for how other developers can contribute"
    },
    {
        type: "input",
        name: "Tests",
        message: "Write tests for the application"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        console.log(fileName)
        console.log(data)
        if (error) {
            return console.log(error)
        } else {
            console.log("success");
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
