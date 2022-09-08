const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr = [];

const managerPrompt = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this team?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!")
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID.",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Please enter a valid number!")
          return false;
        } else if (!idInput) {
          console.log("Please enter the manager's ID!")
          return false;
        } else {
          return true
        };
    }
  },
    {
      type: 'input', 
      name: 'email',
      message: "Please enter the manager's email.",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!")
          return false
        }
      }
    },
    {
      type: 'input', 
      name: 'officeNumber',
      message: "Please enter the manager's office number.",
      validate: officeNumberInput => {
        if (isNaN(officeNumberInput)) {
          console.log("Please enter a valid office number!")
          return false;
        } else if (!officeNumberInput) {
          console.log("Please enter the manager's office number!")
          return false;
        } else {
          return true
        };
    }
    }
  ])
  .then(mangerInput => {
    const { name, id, email, officeNumber } = mangerInput
    const manager = new Manager (name, id, email, officeNumber);

    employeeArr.push(manager);
    console.log(manager);
  })
}

const employeePrompt = () => {
  console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
      {
        type: 'list',
        name: 'role',
        message: "Please choose your employees role.",
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the employee?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter an employee's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
        validate: idInput => {
          if (isNaN(idInput)) {
            console.log("Please enter a valid number!")
            return false;
          } else if (!idInput) {
            console.log("Please enter the employee's ID!")
            return false;
          } else {
            return true
          };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ('Please enter an email!')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Please enter the employee's github username!")
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's school!")
            }
        }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }
    ])
    .then(employeeInput => {
      let {name, id, email, role, github, school, confirmAddEmployee } = employeeInput;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
      }

      employeeArr.push(employee);

      if (confirmAddEmployee) {
        return employeePrompt(employeeArr);
      } else {
        return employeeArr;
      }
    })
};

managerPrompt()
  .then(employeePrompt);