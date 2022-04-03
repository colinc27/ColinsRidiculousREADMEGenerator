// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}
  ## Table of contents
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Tests](#Tests)
  ## Description
  ${readmeData.projectDescription}
  ## Installation
  ${readmeData.projectInstallation}
  ## Usage
  ${readmeData.projectUsage}
  ## Credits
  ${readmeData.projectInstallation}
  ## License
  ${readmeData.License}
  ## How to Contribute
  ${readmeData.projectContribution}
  ## Tests
  ${readmeData.projectTest}
  `;
}

module.exports = generateMarkdown;
