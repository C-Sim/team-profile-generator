const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");
const path = require("path");
const open = require("open");

// const main = document.getElementById("main");

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

const generateHTML = (managerInfo) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="./assets/css/styles.css" />
        <title>Team Profile</title>
      </head>
      <body>
        <h1 class="team">${manager.getTeamName()}</h1>
        
        <main id="main">
            <h2 class="role-name">Manager</h2>
            <div class="role-container">
    
                <div class="role">
                    
                    <p class="name">${managerInfo.name}</p>
                    <p class="employee-id">Employee ID: ${managerInfo.id}</p>
                    <a class="email" href="mailto:${managerInfo.email}">
                        <i class="fa-solid fa-envelope" alt="eMail"></i> ${
                          managerInfo.email
                        }
                    </a>
                    <p class="location"><i class="fa-solid fa-building"></i> Office ${
                      managerInfo.officeNumber
                    }</p>
                </div> 
            </div>
            ${renderEngineers()}
            ${renderInterns()}
        </div>
        <footer class="footer">
            <i class="fa-solid fa-crown"></i> Created by Cherelle Simpson &copy 2022
        </footer>
      </body>
    </html>`;
};

const createEngineers = (engineerInfo) => {
  const renderEngineers = (each) => {
    `<h2 class="role-name">Engineers</h2>
        <div class="role-container">  
            <div class="role">
                <p class="name">${engineerInfo.name}</p>
                <p class="employee-id">Employee ID: ${engineerInfo.id}</p>
                <a class="email" href="mailto:${engineerInfo.email}">
                    <i class="fa-solid fa-envelope" alt="eMail"></i> ${engineerInfo.email}
                </a>
                <p><a class="github" href="https://github.com/${engineerInfo.gitHub}" target="_blank"
                ><i class="fa-brands fa-github" alt="GitHub"></i> GitHub
                </a></p>
            </div>              
        </div>`;
  };

  return renderEngineers;

  //   main.append(renderEngineers);
};

const createInterns = (internInfo) => {
  const renderInterns = (each) => {
    ` <h2 class="role-name">Interns</h2>
      <div class="role-container">              
          <div class="role">
              <p class="name">${internInfo.name}</p>
              <p class="employee-id">Employee ID: ${internInfo.id}</p>
              <a class="email" href="mailto:${internInfo.email}">
                  <i class="fa-solid fa-envelope" alt="eMail"></i> ${internInfo.email}
              </a>
              <p class="location"><i class="fa-solid fa-graduation-cap"></i> ${internInfo.school}</p>
          </div>
      </div>`;
  };

  return renderInterns;

  //   main.append(renderInterns);
};

const init = async () => {
  let inProgress = true;

  const managerInfo = [];
  const engineerInfo = [];
  const internInfo = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  managerAnswers.role = "Manager";

  managerInfo.push(managerAnswers);

  while (inProgress) {
    const nextStep = await inquirer.prompt(confirmNextStep);

    const confirm = nextStep;

    if (confirm.nextStep === "Yes, an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      engineerAnswers.role = "Engineer";

      engineerInfo.push(engineerAnswers);
    } else if (confirm.nextStep === "Yes, an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      internAnswers.role = "Intern";

      internInfo.push(internAnswers);
    } else if (confirm.nextStep === "No, my team is complete") {
      inProgress = false;
    }

    console.log(managerInfo, engineerInfo, internInfo);
  }

  generateHTML(managerInfo);
  createEngineers(engineerInfo);
  createInterns(internInfo);

  const html = generateHTML(managerInfo, engineerInfo, internInfo);

  const filepath = path.join(
    __dirname,
    "../dist",
    `${managerInfo.teamName}-profile.html`
  );

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
