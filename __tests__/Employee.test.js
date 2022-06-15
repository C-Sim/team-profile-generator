const Employee = require("../src/lib/Employee");

describe("Employee", () => {
  const mockName = "J Doe";
  const mockId = "88888888";
  const mockEmail = "email@email.com";

  const employee = new Employee(mockName, mockId, mockEmail);

  it("should be an instance of Employee", async () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  it("should return the expected name", async () => {
    expect(employee.getName()).toEqual(mockName);
  });

  it("should return the expected id", async () => {
    expect(employee.getId()).toEqual(mockId);
  });

  it("should return the expected email", async () => {
    expect(employee.getEmail()).toEqual(mockEmail);
  });

  it("should return the role of Employee", async () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
