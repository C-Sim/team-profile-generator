# team-profile-generator ![badge](https://img.shields.io/badge/MIT-license-green)

[Demo](https://drive.google.com/file/d/1y5Z_9yz278-IN78ka1i0RD4YklBlRgDE/view?usp=sharing)

## Contents

- [Description](#description)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

A Node.js command-line application that takes in information about employees on an engineering team, then generates an HTML webpage that displays a profile for each team member.

## Usage

```
npm start
```

## Tests

```
npm test
```

## License

MIT

## Questions

Please contact me via email at Cherelle.S@hotmail.com or via my GitHub repo at https://github.com/C-Sim

## Technologies

- Inquirer
- Node
- Jest
- Nodemon
- Path
- Open
- fs
- Figlet
- Chalk
- HTML
- CSS

## Screenshots

<details>
<summary>Terminal User Journey</summary>

![terminal](dist/assets/screenshots/terminal-ux.png)

</details>

<details>
<summary>Generated HTML sample - desktop</summary>

![generated-html-dt](dist/assets/screenshots/sample-desktop.png)

</details>

<details>
<summary>Generated HTML sample - mobile</summary>

![generated-html-mob](dist/assets/screenshots/sample-mobile.png)

</details>
<br>

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
