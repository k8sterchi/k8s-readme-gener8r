// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
  }
  return '';
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      return `[License](./LICENSE)`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `This application is covered under the [${license}](./LICENSE) license.`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}  
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})  
Email: ${data.email}
Feel free to reach out to me at ${data.email} with any additional questions.
`;
}

module.exports = generateMarkdown;
