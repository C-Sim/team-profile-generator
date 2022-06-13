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
                  <p class="name">${this.name}</p>
                  <p class="employee-id">Employee ID: ${this.id}</p>
                  <a class="email" href="mailto:${this.email}">
                      <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.email}
                  </a>
                  <p class="location"><i class="fa-solid fa-graduation-cap"></i> ${this.school}</p>
            </div>`;
  }
}

module.exports = Intern;
