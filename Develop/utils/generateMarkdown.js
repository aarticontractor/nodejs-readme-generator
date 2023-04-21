// TODO: Create a function that returns a license badge based on which license is passed
// If there is no license, return an empty string
// Here I have used the switch case statement in the renderLicenseBadge function to render the license badge
function renderLicenseBadge(license) {
  switch (license) {
      case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Puplic License v3.0":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "None":
          return "";
      default:
          return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, it will return an empty string
// Here I have used the switch case statement in the renderLicenseLink function to render the license link.
function renderLicenseLink(license) {
  switch (license) {
      case "MIT License":
          return "(https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
          return "(https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Puplic License v3.0":
          return "(https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "(https://opensource.org/licenses/MPL-2.0)";
      case "None":
          return "";
      default:
          return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Create empty variable to store data from user input
  if (!license) {
      return "";
  }

  let licenseSection = `## License:

This project is licensed under the ${license} license.

${renderLicenseBadge(license)}
${renderLicenseLink(license)}`;

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// Here we have used template literals to create the markdown in the generated Readme.
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents

- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
To install necessary dependencies for this project, consider the following:
\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Tests

${data.tests}

## Contributing

${data.contributions}

## License

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please reach out to me at ${data.email}. You can also check out my [GitHub profile](${data.profile}).

`;
}

module.exports = generateMarkdown;
