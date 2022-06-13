const managerQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
  },
  {
    name: "name",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is your employee ID number?",
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
        console.log("Please enter a valid email address");
        return false;
      }
    },
  },
  {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
  },
];

const confirmNextStep = {
  name: "nextStep",
  type: "list",
  message: "Would you like to add a team member?",
  choices: ["Yes, an engineer", "Yes, an intern", "No, my team is complete"],
};

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the engineer's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the engineer's employee ID number?",
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
        console.log("Please enter a valid email address");
        return false;
      }
    },
  },
  {
    name: "gitHub",
    type: "input",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee ID number?",
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
        console.log("Please enter a valid email address");
        return false;
      }
    },
  },
  {
    name: "school",
    type: "input",
    message: "What school does the intern attend?",
  },
];

module.exports = {
  managerQuestions,
  confirmNextStep,
  engineerQuestions,
  internQuestions,
};
