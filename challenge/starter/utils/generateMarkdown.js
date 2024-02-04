// Function to generate markdown content for README based on user's responses.
function generateMarkdown(data) {

  let badgeLicense;
  switch (data.license) {    
  case ('MIT License'):
  badgeLicense='![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  break;
  case ('GNU GPLv3'):
  badgeLicense='![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  break;
  case ('Apache License'):
  badgeLicense='![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  break;
  default:
  badgeLicense='';
  }
  
  return `
  # ${data.title} ${badgeLicense}
  
  ## Description 
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  
  ${data.usage}
  
  ## Contributing 
  
  ${data.contributing}
  
  
  ## Tests 
  
  \`\`\`
  ${data.tests}
  \`\`\`
  
  
  ---
  
  For any inquiries or issues, please contact through following channels:
  
  GitHub Profile Link - [@${data.githubUsername}](https://github.com/${data.githubUsername})
  
  Email Address - ${data.email}
  `;
  };
  
  module.exports = generateMarkdown;
  
  