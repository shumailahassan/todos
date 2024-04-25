#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgGreen("\n \t Welcome to Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: chalk.magentaBright("Enter your New Task:"),
            type: "input"
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.bgYellow(`${addTask.task} Task added in Todo-List successfully`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            message: chalk.magentaBright("Do you want to add more task?"),
            type: "confirm",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todoList);
