/** @format */

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Please provide a description of your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "What are the installation instructions?",
	},
	{
		type: "input",
		name: "usage",
		message: "How do you use this application?",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license for your project:",
		choices: ["MIT License", "GNU GPLv3", "Apache License"],
	},
	{
		type: "input",
		name: "contributing",
		message:
			"Please provide guidelines on how to contribute to this project:",
	},
	{
		type: "input",
		name: "tests",
		message: "Provide any tests that can be run on this application:",
	},
	{
		type: "input",
		name: "githubUsername",
		message: "Enter your GitHub username:",
	},

	{
		type: "input",
		name: "email",
		message:
			"Enter an email address where users can reach out with additional questions:",
	},
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(path.join(__dirname, fileName), data, err => {
		if (err) throw err;

		console.log("README.md successfully created!");
	});
}

// function to initialize program
function init() {
	inquirer
		.prompt(questions)
		.then(answers => {
			const markdownContent = generateMarkdown(answers);
			writeToFile("README.md", markdownContent);
		})
		.catch(error => console.error("Error creating README:", error));
}

// Function call to initialize program
init();
