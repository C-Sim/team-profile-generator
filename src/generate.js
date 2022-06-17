const generateEngineers = (engineerInfo) => {
  if (engineerInfo.length > 0) {
    return engineerInfo.map((engineer) => engineer.createEngineer()).join("");
  } else {
    return `<p class="vacancy"> There are currently no Engineers in the team.</br></br>Contact the Manager via the email address above to apply for a role.</p>`;
  }
};

const generateInterns = (internInfo) => {
  if (internInfo.length > 0) {
    return internInfo.map((intern) => intern.createIntern()).join("");
  } else {
    return `<p class="vacancy"> There are currently no Interns in the team.</br></br>Contact the Manager via the email address above to apply for a role.</p>`;
  }
};

const generateHTML = (manager, engineerInfo, internInfo) => {
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
        ${manager.createTeamName()}
        <main id="main">
          <section>
            <h2 class="role-name">Manager</h2>
            <div class="role-container">
            ${manager.createManager()}
            </div>
          </section>
          <section>
            <h2 class="role-name">Engineers</h2>
            <div class="role-container">
            ${generateEngineers(engineerInfo)}
            </div>
          </section>
          <section>
            <h2 class="role-name">Interns</h2>
            <div class="role-container">
            ${generateInterns(internInfo)}
            </div>
          </section>
        </main>
        <footer class="footer">
            <i class="fa-solid fa-crown"></i> Created by C-Sim &copy 2022
        </footer>
      </body>
    </html>`;
};

module.exports = { generateHTML };
