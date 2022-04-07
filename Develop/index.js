// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

      const promptProject = readmeData => {      
        // If there's no 'projects' array property, create one
        return inquirer
          .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter your name!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: githubInput => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                  }
                }
              },
              {
                type: 'input',
                name: 'email',
                message: 'Enter your email address(Required)',
                validate: emailInput => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                  }
                }
              },
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter your project name!');
                    return false;
                  }
                }
            },
                {
                type: 'input',
                name: 'projectDescription',
                message: 'Please enter a project description? (Required)',
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Please enter a project desription!');
                    return false;
                  }
              }
            },
            {
            type: 'input',
            name: 'projectInstallation',
            message: 'Please enter installation instructions',
          },
          {
            type: 'input',
            name: 'projectUsage',
            message: 'Please enter usage information',
          },
          {
            type: 'input',
            name: 'projectContribution',
            message: 'Please enter contribution guidelines',
          },
          {
            type: 'input',
            name: 'projectTest',
            message: 'Please enter test intructions of the project',
          }, 
          {
            type: 'rawlist',
            name: 'License',
            message: 'Please choose a license',
            choices: ['Apache License 2.0', 'GNU GPLv3','MIT','ISC','No License'],
          },
          ])};
const generatePage = require('./utils/generateMarkdown')
promptProject()
        .then(readmeData => {
          const pageREADME = generatePage(readmeData);
          fs.writeFile('./README.md', pageREADME, err => {
          if (err) throw new Error(err);
          console.log('README Created. Please see the README.md Page in your develop folder');
         });
        });
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

