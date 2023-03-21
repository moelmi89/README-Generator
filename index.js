// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Provide a description of your project"
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use"
},
{
    type: "input",
    name: "credits",
    message: "List your collaborators"
},
{
    type: "input",
    name: "questions",
    message: "Provide your Github username, email addresss and a link to your Github profile"
},
{
    type: "input",
    name: "license",
    message: "Provide a a list of licenses used"
},
{
    type: "input",
    name: "contributions",
    message: "Provide guidelines for how other developers can contribute"
},
{
    type: "input",
    name: "tests",
    message: "Write tests for the application"
},
];

// A function to write README file
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

// A function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("ReadMe.md", generateMarkdown(data));
            console.log(data)
        })
}

// A Function call to initialize app
init();
