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
    name: "Table of contents",
    message: "Provide a table of contents"
},
{
    type: "input",
    name:
    message:
},
{
    type: "input",
    name:
    message:
},
{
    type: "input",
    name:
    message:
}];

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
