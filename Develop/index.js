// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'project',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter your name!');
                    return false;
                  }
                }
              }
    ])}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
questions()
