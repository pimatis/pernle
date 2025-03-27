import chalk from "chalk";
import { getTodos } from "../store/db";

export const listTodos = () => {
  console.clear();

  const todos = getTodos();

  if (todos.length === 0) {
    console.log(chalk.yellow("No todos found."));
    return;
  }

  console.log(chalk.bold("\nYour Todos:"));
  console.log(chalk.gray("-------------------"));

  todos.forEach((todo: any, index: number) => {
    console.log(
      `${index + 1}. [${todo.completed ? chalk.green("X") : " "}] ${chalk.cyan(todo.title)} ${
        todo.description ? chalk.gray(`- ${todo.description}`) : ""
      }`
    );
  });

  console.log(chalk.gray("-------------------"));
  console.log(`Total: ${todos.length} todos, ${todos.filter((t: any) => t.completed).length} completed\n`);
};
