const Manager = require("../src/lib/Manager");

describe("Manager", () => {
  const mockName = "J Doe";
  const mockId = "88888888";
  const mockEmail = "email@email.com";
  const mockOfficeNumber = "8";

  const manager = new Manager(mockName, mockId, mockEmail, mockOfficeNumber);

  it("should be an instance of Manager", async () => {
    expect(manager).toBeInstanceOf(Manager);
  });

  it("should return the expected name", async () => {
    expect(manager.getName()).toEqual(mockName);
  });

  it("should return the expected id", async () => {
    expect(manager.getId()).toEqual(mockId);
  });

  it("should return the expected email", async () => {
    expect(manager.getEmail()).toEqual(mockEmail);
  });

  it("should return the expected office number", async () => {
    expect(manager.getOfficeNumber()).toEqual(mockOfficeNumber);
  });

  it("should return the role of Manager", async () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});
