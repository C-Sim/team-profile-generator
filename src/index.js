const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");
const path = require("path");
const open = require("open");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  managerQuestions,
  confirmNextStep,
  engineerQuestions,
  internQuestions,
} = require("./questions");
const { generateHTML } = require("./generate");

const init = async () => {
  let inProgress = true;

  const engineerInfo = [];
  const internInfo = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(managerAnswers);

  while (inProgress) {
    const { nextStep } = await inquirer.prompt(confirmNextStep);

    if (nextStep === "engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      const engineer = new Engineer(engineerAnswers);

      engineerInfo.push(engineer);
    } else if (nextStep === "intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(internAnswers);

      internInfo.push(intern);
    } else {
      inProgress = false;
    }
  }

  const html = generateHTML(manager, engineerInfo, internInfo);

  const filepath = path.join(__dirname, "../dist", "index.html");

  fs.writeFileSync(filepath, html);

  console.log(
    figlet.textSync("Profile generated!", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 64,
      whitespaceBreak: true,
    })
  );

  const root = path.dirname(require.main.filename);

  const absolutePath = path.join(root, "../dist/index.html");

  open(`file://${absolutePath}`, { app: "chrome" });
};

init();
