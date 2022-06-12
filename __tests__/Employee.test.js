const inquirer = require("inquirer");
const { Employee } = require("../src/lib/Employee");

describe("Employee", () => {
  //   it("should be an instance of Employee", async () => {
  //     const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
  //       instance: "Employee",
  //     });

  //     const expected = spy;
  //     const actual = await Employee();

  //     expect(actual).toEqual(expected);
  //   });

  it("should return the expected name", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      name: "T Testino",
    });

    const expected = "T Testino";
    const actual = await Employee.getName();

    expect(actual).toEqual(expected);
  });

  it("should return the expected id", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      id: "12345678",
    });

    const expected = "12345678";
    const actual = await Employee.getId();

    expect(actual).toEqual(expected);
  });

  it("should return the expected email", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      email: "email@email.com",
    });

    const expected = "email@email.com";
    const actual = await Employee.getEmail();

    expect(actual).toEqual(expected);
  });

  // it("should return the expected office number", async () => {
  //     const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
  //         officeNumber: "8",
  //     });

  //     const expected = "8";
  //     const actual = await Employee.getOfficeNumber();

  //     expect(actual).toEqual(expected);
  // });

  it("should return the role of Employee", async () => {
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      role: "Employee",
    });

    const expected = "Employee";
    const actual = await Employee.getRole();

    expect(actual).toEqual(expected);
  });
});
