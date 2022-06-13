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

  const managerInfo = [];
  const engineerInfo = [];
  const internInfo = [];
  //   const employees = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    // managerAnswers
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber,
    managerAnswers.teamName
  );

  managerInfo.push(manager);
  //   employees.push(manager);

  console.log(manager);

  while (inProgress) {
    const nextStep = await inquirer.prompt(confirmNextStep);

    const confirm = nextStep;

    if (confirm.nextStep === "Yes, an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      const engineer = new Engineer(
        // engineerAnswers
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.gitHub
      );

      engineerInfo.push(engineer);
      //   employees.push(engineer);
    } else if (confirm.nextStep === "Yes, an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(
        // internAnswers
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );

      internInfo.push(intern);
      //   employees.push(intern);
    } else if (confirm.nextStep === "No, my team is complete") {
      inProgress = false;
    }

    console.log(managerInfo, engineerInfo, internInfo);
  }

  const html = generateHTML(managerInfo, engineerInfo, internInfo);

  const filepath = path.join(__dirname, "../dist", `index.html`);

  fs.writeFileSync(filepath, html);

  open(`http://localhost:port/${filepath}`, { app: "chrome" });

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
