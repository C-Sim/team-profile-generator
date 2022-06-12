const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");

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
  },
  {
    name: "school",
    type: "input",
    message: "What school does the intern attend?",
  },
];

// make util function and export
const generateHTML = (managerAnswers) => {
  // return `...`
};

const init = async () => {
  let inProgress = true;

  const allAnswers = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  allAnswers.push(managerAnswers);

  console.log(allAnswers);

  while (inProgress) {
    const nextStep = await inquirer.prompt(confirmNextStep);

    const confirm = nextStep;

    if (confirm.nextStep === "Yes, an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      allAnswers.push(engineerAnswers);
    } else if (confirm.nextStep === "Yes, an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      allAnswers.push(internAnswers);
    } else if (confirm.nextStep === "No, my team is complete") {
      inProgress = false;
    }
  }

  //   const html = generateHTML(allAnswers);

  //   fs.writeFileSync(".dist/team-profile.html", html);

  console.log(
    figlet.textSync("Profile generated!", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 64,
      whitespaceBreak: true,
    })
  );
};

init();
