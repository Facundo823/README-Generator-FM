// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateREADME from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage info:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contributions for your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Produce test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT','GPL','Apache','none'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'give your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email:',
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.error("Error", err);
        }else {
            console.log("README.md successful");
        }
    }
);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeContent = generateREADME(data);
        writeToFile('README.md',readmeContent);
    })
.catch((error) => {
    console.error("Error", error);
});
}
// Function call to initialize app
init();
