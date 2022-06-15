const Engineer = require("../src/lib/Engineer");

describe("Engineer", () => {
  const mockName = "J Doe";
  const mockId = "88888888";
  const mockEmail = "email@email.com";
  const mockGitHub = "GitUser";

  const engineer = new Engineer(mockName, mockId, mockEmail, mockGitHub);

  it("should be an instance of Engineer", () => {
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it("should return the expected name", () => {
    expect(engineer.getName()).toEqual(mockName);
  });

  it("should return the expected id", () => {
    expect(engineer.getId()).toEqual(mockId);
  });

  it("should return the expected email", () => {
    expect(engineer.getEmail()).toEqual(mockEmail);
  });

  it("should return the expected GitHub username", () => {
    expect(engineer.getGitHub()).toEqual(mockGitHub);
  });

  it("should return the role of Engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
