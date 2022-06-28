const chalk = require("chalk");

const managerQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
    default: "The Team",
  },
  {
    name: "name",
    type: "input",
    message: "What is your name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
    validate: (officeNumber) => {
      if (officeNumber.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter your office number"));
        return false;
      }
    },
  },
];

const confirmNextStep = {
  name: "nextStep",
  type: "list",
  message: "Would you like to add a team member?",
  choices: [
    {
      name: "Yes, an engineer",
      value: "engineer",
      short: "eng",
    },
    {
      name: "Yes, an intern",
      value: "intern",
      short: "int",
    },
    {
      name: "No, my team is complete",
    },
  ],
};

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the engineer's name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is the engineer's employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter an employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "gitHub",
    type: "input",
    message: "What is the engineer's GitHub username?",
    validate: (gitHub) => {
      if (gitHub.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a GitHub username"));
        return false;
      }
    },
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
    validate: (name) => {
      if (name.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a name"));
        return false;
      }
    },
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID number?",
    validate: (id) => {
      if (id.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter an employee ID"));
        return false;
      }
    },
  },
  {
    name: "email",
    type: "input",
    message: "What is the intern's email address?",
    validate: (email) => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      if (valid) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a valid email address"));
        return false;
      }
    },
  },
  {
    name: "school",
    type: "input",
    message: "What school does the intern attend?",
    validate: (school) => {
      if (school.length > 0) {
        return true;
      } else {
        console.log(chalk.bgRed("Please enter a school"));
        return false;
      }
    },
  },
];

module.exports = {
  managerQuestions,
  confirmNextStep,
  engineerQuestions,
  internQuestions,
};
