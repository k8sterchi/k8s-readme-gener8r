// Import necessary modules, separating content genration logic into separate modules to increase modulariety of code...
const inquirer = require("inquirer"); // handles the collection of user input
const fs = require('fs'); // built-in node.js module, handles writing the gernerated README content to a file
const generateMarkdown = require('./generateMarkdown'); // handles how the content is formatted

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project:',
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Enter the contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter the test instructions for your project:',
      },
      {
        type: 'list', 
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU GPLv3',
            // Add more license options if time allows... 
        ],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},
  ];

 // Use Inquirer to prompt the user for input
inquirer.prompt(questions).then((answers) => {
    // Now you have the user's answers, and you can proceed to generate the README content
    const readmeContent = generateMarkdown(answers); // Generate the README content
    writeToFile('README.md', readmeContent); // Write content to README.md
    console.log('README.md successfully generated!');
});


// Function to write README file
function writeToFile(fileName, data) {
    // Implement logic to write data to the specified file using the fs module
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

// Commented out the function below because it repeats the user prompts in the command line.
// function init() {
//   // Use Inquirer to prompt the user for input
//   inquirer.prompt(questions).then((answers) => {
//       // Now you have the user's answers, and you can proceed to generate the README content
//       const readmeContent = generateMarkdown(answers); // Generate the README content
//       writeToFile('README.md', readmeContent); // Write content to README.md
//       console.log('README.md successfully generated!');
//   });
// }

// // Function call to initialize app
// init();
