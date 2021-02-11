/*
      README GENERATOR
      CONNOR WALDEN 2021
*/

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    name: 'title',
    type: 'text',
    message: 'What would you like the title to be? :'
  },
  {
    name: 'description',
    type: 'text',
    message: 'What would you like the description to be? :'
  },
  {
    name: 'installation',
    type: 'text',
    message: 'How will this be installed? :'
  },
  {
    name: 'usage',
    type: 'text',
    message: 'How will this be used? :'
  },
  {
    name: 'license',
    type: 'list',
    choices: ['MIT', 'Apache 2.0', 'BSD', 'GNU GPLv3'],
    message: 'What license will this use? :'
  },
  {
    name: 'contribution',
    type: 'text',
    message: 'How will others contribute? :'
  },
  {
    name: 'tests',
    type: 'text',
    message: 'Tests? :'
  },
  {
    name: 'githubusername',
    type: 'text',
    message: 'What is your github username? :'
  },
  {
    name: 'email',
    type: 'text',
    message: 'What is your email? :'
  }
])
.then((res) => {
  let badge;

  switch(res.license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GNU GPLv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
  }

  fs.writeFile('README - NEW.md', 
`
${badge}

## Title
${res.title}

## Description
${res.description}

## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${res.installation}

## Usage
${res.usage}

## License
${res.license}

## Contributing
${res.contribution}

## Tests
${res.tests}

## Questions
If you have any questions, please forward them to ${res.githubusername} at ${res.email}
`
  , () => {
    console.log('Created readme file!');
  });
});