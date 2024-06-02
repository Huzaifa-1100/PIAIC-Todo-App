#! /usr/bin/env node

// Making Todo List App

// Break into following steps

// settingup environment
// Todos array
// function
// looping
// operations

// Import inquirer
import inquirer from "inquirer";
// Import chalk
import chalk from "chalk"
// making array
let todos: string[] = [];
// greetings
console.log(chalk.bgWhite.red("\n\tWELCOME TO TODO LIST APP"));

// Making function
async function todoApp(todos: string[]) {
  // making loop
  do {
    let userSelect = await inquirer.prompt({
      name: "select",
      type: "list",
      message: "Select one of the following options",
      choices: ["Add", "Update", "Delete", "View", "Exit"],
    });
    // Making operations
    if (userSelect.select === "Add") {
      let addTodo = await inquirer.prompt({
        name: "add",
        type: "input",
        message: "Please add items in todo",
      });
      todos.push(addTodo.add);
      console.log(chalk.bgYellow.black(`\n\t${todos}`));
    }
    if (userSelect.select === "Update") {
      let updateTodo = await inquirer.prompt([
        {
          name: "update",
          message: "Select item for update",
          type: "list",
          choices: todos.map((item) => item),
        },
        {
          name: "add",
          message: "Please add item in todo",
          type: "input",
        },
      ]);
      let newTodos = todos.filter((item) => item !== updateTodo.update);
      todos = [...newTodos, updateTodo.add];
      console.log(chalk.bgYellow.black(`\n\t${todos}`));
    }
    if (userSelect.select === "Delete") {
      let deleteTodo = await inquirer.prompt({
        name: "delete",
        type: "list",
        message: "Select item for delete",
        choices: todos.map((item) => item),
      });
      let newTodos = todos.filter((item) => item !== deleteTodo.delete);
      todos = [...newTodos];
      console.log(chalk.bgYellow.black(`\n\t${todos}`));
    }
    if (userSelect.select === "View") {
      console.log(chalk.bgYellow.black(`\n\t${todos}`));
    }
    if (userSelect.select === "Exit") {
      console.log(chalk.bgRed.white("\n\tThank You for choosing Todo App"));
      break;
    }
  } while (true);
}
// calling function
todoApp(todos);
