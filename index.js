const fs = require('fs');
const inquirer = require('inquirer');

const managerPrompt = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this time?',
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID.",
    },
    {
      type: 'input', 
      name: 'email',
      message: "Please enter the manager's email.",
    },
    {
      type: 'input', 
      name: 'officeNumber',
      message: "Please enter the manager's office number.",
    }
  ])
}

managerPrompt();