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
    return `
        <h1 class="team">${this.teamName}</h1>
        
        <main id="main">
            <h2 class="role-name">Manager</h2>
            <div class="role-container">
    
                <div class="role">
                    
                    <p class="name">${this.name}</p>
                    <p class="employee-id">Employee ID: ${this.id}</p>
                    <a class="email" href="mailto:${this.email}">
                        <i class="fa-solid fa-envelope" alt="eMail"></i> ${this.email}
                    </a>
                    <p class="location"><i class="fa-solid fa-building"></i> Office ${this.officeNumber}</p>
                </div> 
            </div>
        </div>`;
  }
}

module.exports = Manager;
