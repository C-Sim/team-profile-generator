const { managerInfo, engineerInfo, internInfo } = require("../index");

const generate = () => {
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
      <h1 class="team">${managerInfo.teamName}</h1>
      
      <main class="main">
          <h2 class="role-name">Manager</h2>
          <div class="role-container">
  
              <div class="role">
                  
                  <p class="name">${managerInfo.name}</p>
                  <p class="employee-id">Employee ID: ${managerInfo.id}</p>
                  <a class="email" href="mailto:${managerInfo.email}">
                      <i class="fa-solid fa-envelope" alt="eMail"></i> ${managerInfo.email}
                  </a>
                  <p class="location"><i class="fa-solid fa-building"></i> Office ${managerInfo.officeNumber}</p>
              </div> 
          </div>
  
          <h2 class="role-name">Engineers</h2>
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
          </div>
  
          <h2 class="role-name">Interns</h2>
          <div class="role-container">              
              <div class="role">
                  <p class="name">${internInfo.name}</p>
                  <p class="employee-id">Employee ID: ${internInfo.id}</p>
                  <a class="email" href="mailto:${internInfo.email}">
                      <i class="fa-solid fa-envelope" alt="eMail"></i> ${internInfo.email}
                  </a>
                  <p class="location"><i class="fa-solid fa-graduation-cap"></i> ${internInfo.school}</p>
              </div>
          </div>
      </div>
      <footer class="footer">
          <i class="fa-solid fa-crown"></i> Created by Cherelle Simpson &copy 2022
      </footer>
    </body>
  </html>`;
};

module.exports = generateHTML;
