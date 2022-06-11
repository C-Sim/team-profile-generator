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
    name: "managerName",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "managerID",
    type: "input",
    message: "What is your employee ID number?",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "managerOfficeNumber",
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
    name: "engineerName",
    type: "input",
    message: "What is the engineer's name?",
  },
  {
    name: "engineerID",
    type: "input",
    message: "What is the engineer's employee ID number?",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "What is the engineer's email address?",
  },
  {
    name: "engineerGitHub",
    type: "input",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    name: "internName",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "internID",
    type: "input",
    message: "What is the intern's employee ID number?",
  },
  {
    name: "internEmail",
    type: "input",
    message: "What is the intern's email address?",
  },
  {
    name: "internSchool",
    type: "input",
    message: "What is the intern's school?",
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

  while (inProgress) {
    const nextStep = await inquirer.prompt(confirmNextStep);

    if (nextStep.includes("engineer")) {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      allAnswers.push(engineerAnswers);
    } else if (nextStep.includes("intern")) {
      const internAnswers = await inquirer.prompt(internQuestions);

      allAnswers.push(internAnswers);
    } else if (nextStep.includes("No")) {
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
