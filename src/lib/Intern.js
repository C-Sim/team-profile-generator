const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }

  createIntern() {
    return `<div class="role">
      <p class="name">${this.getName()}</p>
      <p class="employee-id">Employee ID: ${this.getId()}</p>
      <a class="email" href="mailto:${this.getEmail()}">
        <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.getEmail()}
      </a>
      <p class="location"><i class="fa-solid fa-graduation-cap"></i> ${this.getSchool()}</p>
    </div>`;
  }
}

module.exports = Intern;
