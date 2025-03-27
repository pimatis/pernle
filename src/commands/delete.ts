import inquirer from "inquirer";
import chalk from "chalk";
import { saveTodos, getTodos } from "../store/db";

export const deleteTodo = async () => {
  console.clear();

  const todos = getTodos();

  if (todos.length === 0) {
    console.log(chalk.red("No todos found."));
    return;
  }

  const choices = todos.map((todo: any) => ({
    name: `[${chalk.bold(todo.completed ? 'X' : ' ')}] ${chalk.cyan(todo.title)} ${todo.description ? chalk.gray(`- ${todo.description}`) : ''}`,
    value: todo.id
  }));

  const { selectedId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedId',
      message: 'Select a todo to delete:',
      choices
    }
  ]);

  const updatedTodos = todos.filter((todo: any) => todo.id !== selectedId);

  saveTodos(updatedTodos);
  console.log(chalk.green("Todo deleted successfully!"));
};

export const deleteAllTodos = async () => {
  console.clear();

  const todos = getTodos();

  if (todos.length === 0) {
    console.log(chalk.red("No todos found."));
    return;
  }

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to delete all todos?',
      default: false
    }
  ]);

  if (confirm) {
    saveTodos([]);
    console.log(chalk.green("All todos deleted successfully!"));
  } else {
    console.log(chalk.yellow("Operation cancelled."));
  }
};
