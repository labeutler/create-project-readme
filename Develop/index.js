// TODO: Include packages needed for this application
// packages listed for project to collect data
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// Array of questions prompted to answer in command line to create readme
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the Project?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Is there a table of contents?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
    },
    {
        type: 'input',
        name: 'acceptance',
        message: 'What is the acceptance criteria for the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation, if any?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Were there any contributing members or sources used?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Were there any testing protocols run?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'user',
        message: 'Please enter your GitHub user name.',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Please enter the URL for GitHub.',
    },
    {
        type: 'input',
        name: 'clone',
        message: 'Please enter the URL for your GitHub repository to clone project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter GitHub email:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache', 'Mozilla', 'None'],
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            let markdown = generateMarkdown(answers)
            fs.writeFile('./output/README.md', markdown, error => { console.log("readme created") })
            return answers
        })
}

writeToFile()

// Create a function to initialize app
function init() { }

// Function call to initialize app
init();
