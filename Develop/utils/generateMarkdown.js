// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const thisYear =new Date().getFullYear()
var lic = function(readmeData) {
  var lic = ''
  if(readmeData.License==='Apache License 2.0'){var lic ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/#)" }
  else if(readmeData.License==='GNU GPLv3'){ var lic="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/#)"}
  else if(readmeData.License==='MIT'){ var lic = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)"}
  else if(readmeData.License==='ISC'){ var lic = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://choosealicense.com/licenses/isc/C)"}
  else{ var lic = ''}
  return lic
}
 //}}
// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}<br>
   ${lic(readmeData)}
  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Description <a name="description"></a>
  ${readmeData.projectDescription}
  ## Installation <a name="installation"></a>
  ${readmeData.projectInstallation}
  ## Usage <a name="usage"></a>
  ${readmeData.projectUsage}
  ## Credits <a name="credits"></a>
  ${readmeData.projectInstallation}
  ## How to Contribute <a name="contribute"></a>
  ${readmeData.projectContribution}
  ## Tests <a name="tests"></a>
  ${readmeData.projectTest}
  ## Questions <a name="questions"></a>
  Created by ${readmeData.name}<br>
  Reach Me by Email: [${readmeData.email}](mailto:${readmeData.email})<br>
  Visit my Github: [${readmeData.github}](https://github.com/${readmeData.github})
  ## License <a name="license"></a>
  ${readmeData.License}
  ${lic(readmeData)}
  `;
}

module.exports = generateMarkdown;
//if(readmeData.License==='Apache License 2.0'){const licenseBadge = 'Copyright' + thisYear + readmeData.name}
//else if(readmeData.License==='GNU GPLv3'){ const licenseBadge = readmeData.title + 'Copyright (C)' + thisYear + readmeData.name}
//else if(readmeData.License==='MIT'){ const licenseBadge = 'Copyright (c)' + thisYear + readmeData.name}
//else if(readmeData.License==='ISC'){ const licenseBadge = 'Copyright (c)' + thisYear + readmeData.name}
//else{ const licenseBadge = 'No License'}