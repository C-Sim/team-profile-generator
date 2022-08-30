const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ officeNumber, teamName, ...rest }) {
    super(rest);

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

  createTeamName() {
    return `<header><h1 class="team">${this.getTeamName()}</h1></header>`;
  }

  createManager() {
    return `<div class="role">
      <p class="name">${this.getName()}</p>
      <p class="employee-id">Employee ID: ${this.getId()}</p>
      <a class="email" href="mailto:${this.getEmail()}">
        <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.getEmail()}
      </a>
      <p class="location"><i class="fa-solid fa-building"></i> Office ${this.getOfficeNumber()}</p>
    </div>`;
  }
}

module.exports = Manager;
