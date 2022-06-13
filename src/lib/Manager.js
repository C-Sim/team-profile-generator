const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, teamName) {
    super(name, id, email);

    this.teamName = teamName;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getTeamName() {
    return this.teamName;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }

  createManager() {
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
        <h1 class="team">${this.teamName}</h1>
        
        <main id="main">
            <h2 class="role-name">Manager</h2>
            <div class="role-container">
    
                <div class="role">
                    
                    <p class="name">${this.name}</p>
                    <p class="employee-id">Employee ID: ${this.id}</p>
                    <a class="email" href="mailto:${this.email}">
                        <i class="fa-solid fa-envelope" alt="eMail"></i> ${
                          this.email
                        }
                    </a>
                    <p class="location"><i class="fa-solid fa-building"></i> Office ${
                      this.officeNumber
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
  }
}

module.exports = Manager;
