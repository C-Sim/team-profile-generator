const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

    this.gitHub = gitHub;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return this.role;
  }

  createEngineers() {
    //   const renderEngineers = (each) => {
    return `<h2 class="role-name">Engineers</h2>
            <div class="role-container">
                <div class="role">
                    <p class="name">${this.name}</p>
                    <p class="employee-id">Employee ID: ${this.id}</p>
                    <a class="email" href="mailto:${this.email}">
                        <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.email}
                    </a>
                    <p><a class="github" href="https://github.com/${this.gitHub}" target="_blank"
                    ><i class="fa-brands fa-github" alt="GitHub"></i> GitHub
                    </a></p>
                </div>
            </div>`;
  }

  //   return renderEngineers;

  //   //   main.append(renderEngineers);
}

module.exports = Engineer;
