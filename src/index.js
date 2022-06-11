const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

const managerQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
  },
  {
    name: "managerName",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "managerID",
    type: "input",
    message: "What is your employee ID number?",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "managerOfficeNumber",
    type: "input",
    message: "What is your office number?",
  },
  {
    name: "nextStep",
    type: "list",
    message: "Would you like to add a team member?",
    choices: ["Yes, an Engineer", "Yes, an Intern", "No, my team is complete"],
  },
];

const engineerQuestions = [
  {
    name: "engineerName",
    type: "input",
    message: "What is the engineer's name?",
  },
  {
    name: "engineerID",
    type: "input",
    message: "What is the engineer's employee ID number?",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "What is the engineer's email address?",
  },
  {
    name: "engineerGitHub",
    type: "input",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    name: "internName",
    type: "input",
    message: "What is the intern's name?",
  },
  {
    name: "internID",
    type: "input",
    message: "What is the intern's employee ID number?",
  },
  {
    name: "internEmail",
    type: "input",
    message: "What is the intern's email address?",
  },
  {
    name: "internSchool",
    type: "input",
    message: "What is the intern's school?",
  },
];
