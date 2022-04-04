// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title} 
  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description <a name="description"></a>
  ${readmeData.projectDescription}
  ## Installation <a name="installation"></a>
  ${readmeData.projectInstallation}
  ## Usage <a name="usage"></a>
  ${readmeData.projectUsage}
  ## Credits <a name="credits"></a>
  ${readmeData.projectInstallation}
  ## License <a name="license"></a>
  ${readmeData.License}
  ## How to Contribute <a name="contribute"></a>
  ${readmeData.projectContribution}
  ## Tests <a name="tests"></a>
  ${readmeData.projectTest}
  ## Questions <a name="questions"></a>
  Created by ${readmeData.name}<br>
  Reach Me by Email: [${readmeData.email}](mailto:${readmeData.email})<br>
  Visit my Github: [${readmeData.github}](https://github.com/${readmeData.github})
  `;
}

module.exports = generateMarkdown;
