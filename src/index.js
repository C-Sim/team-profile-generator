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
const Employee = require("./lib/Employee");

// const main = document.getElementById("main");

const generateHTML = (manager) => {
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
        <h1 class="team">${manager.teamName}</h1>
        
        <main id="main">
            <h2 class="role-name">Manager</h2>
            <div class="role-container">
    
                <div class="role">
                    
                    <p class="name">${manager.name}</p>
                    <p class="employee-id">Employee ID: ${manager.id}</p>
                    <a class="email" href="mailto:${manager.email}">
                        <i class="fa-solid fa-envelope" alt="eMail"></i> ${
                          manager.email
                        }
                    </a>
                    <p class="location"><i class="fa-solid fa-building"></i> Office ${
                      manager.officeNumber
                    }</p>
                </div> 
            </div>
            // ${renderEngineers()}
            // ${renderInterns()}
        </div>
        <footer class="footer">
            <i class="fa-solid fa-crown"></i> Created by Cherelle Simpson &copy 2022
        </footer>
      </body>
    </html>`;
};

// const createEngineers = (engineerInfo) => {
//   const renderEngineers = (each) => {
//     `<h2 class="role-name">Engineers</h2>
//         <div class="role-container">
//             <div class="role">
//                 <p class="name">${engineerInfo.name}</p>
//                 <p class="employee-id">Employee ID: ${engineerInfo.id}</p>
//                 <a class="email" href="mailto:${engineerInfo.email}">
//                     <i class="fa-solid fa-envelope" alt="eMail"></i> ${engineerInfo.email}
//                 </a>
//                 <p><a class="github" href="https://github.com/${engineerInfo.gitHub}" target="_blank"
//                 ><i class="fa-brands fa-github" alt="GitHub"></i> GitHub
//                 </a></p>
//             </div>
//         </div>`;
//   };

//   return renderEngineers;

//   //   main.append(renderEngineers);
// };

// const createInterns = (internInfo) => {
//   const renderInterns = (each) => {
//     ` <h2 class="role-name">Interns</h2>
//       <div class="role-container">
//           <div class="role">
//               <p class="name">${internInfo.name}</p>
//               <p class="employee-id">Employee ID: ${internInfo.id}</p>
//               <a class="email" href="mailto:${internInfo.email}">
//                   <i class="fa-solid fa-envelope" alt="eMail"></i> ${internInfo.email}
//               </a>
//               <p class="location"><i class="fa-solid fa-graduation-cap"></i> ${internInfo.school}</p>
//           </div>
//       </div>`;
//   };

//   return renderInterns;

//   //   main.append(renderInterns);
// };

const init = async () => {
  let inProgress = true;

  const managerInfo = [];
  const engineerInfo = [];
  const internInfo = [];
  const allEmployees = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber,
    managerAnswers.teamName
  );

  managerInfo.push(manager);

  console.log(managerInfo);
  console.log(manager);

  while (inProgress) {
    const nextStep = await inquirer.prompt(confirmNextStep);

    const confirm = nextStep;

    if (confirm.nextStep === "Yes, an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);

      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.gitHub
      );

      engineerInfo.push(engineer);
    } else if (confirm.nextStep === "Yes, an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );

      internInfo.push(intern);
    } else if (confirm.nextStep === "No, my team is complete") {
      inProgress = false;
    }

    console.log(
      managerInfo,
      manager,
      engineerInfo,
      //   engineer,
      internInfo
      //   intern
    );
  }

  //   allEmployees.push(manager, engineer, intern)

  generateHTML(managerInfo);
  //   createEngineers(engineerInfo);
  //   createInterns(internInfo);

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
