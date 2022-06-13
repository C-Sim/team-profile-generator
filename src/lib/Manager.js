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
}

module.exports = Manager;
