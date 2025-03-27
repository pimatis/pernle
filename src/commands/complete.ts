import inquirer from "inquirer";
import chalk from "chalk";
import { saveTodos, getTodos } from "../store/db";

export const completeTodo = async () => {
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
      message: 'Select a todo to mark as completed:',
      choices
    }
  ]);

  const updatedTodos = todos.map((todo: any) => {
    if (todo.id === selectedId) {
      return { ...todo, completed: true };
    }
    return todo;
  });

  saveTodos(updatedTodos);
  console.log(chalk.green("Todo marked as completed successfully!"));
};

export const completeAllTodos = () => {
  console.clear();

  const todos = getTodos();

  if (todos.length === 0) {
    console.log(chalk.red("No todos found."));
    return;
  }

  const updatedTodos = todos.map((todo: any) => {
    return { ...todo, completed: true };
  });

  saveTodos(updatedTodos);
  console.log(chalk.green("All todos marked as completed successfully!"));
};
