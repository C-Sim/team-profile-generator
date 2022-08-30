const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ gitHub, ...rest }) {
    super(rest);

    this.gitHub = gitHub;
    this.role = "Engineer";
  }

  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return this.role;
  }

  createEngineer() {
    return `<div class="role">
      <p class="name">${this.getName()}</p>
      <p class="employee-id">Employee ID: ${this.getId()}</p>
      <a class="email" href="mailto:${this.getEmail()}">
        <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.getEmail()}
      </a>
      <p><a class="github" href="https://github.com/${this.getGitHub()}" target="_blank"
      ><i class="fa-brands fa-github" alt="GitHub"></i> GitHub
      </a></p>
    </div>`;
  }
}

module.exports = Engineer;
