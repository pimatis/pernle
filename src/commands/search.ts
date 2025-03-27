import inquirer from "inquirer";
import chalk from "chalk";
import { getTodos } from "../store/db";

export const searchTodos = async () => {
  console.clear();

  const todos = getTodos();

  if (todos.length === 0) {
    console.log(chalk.yellow("No todos found."));
    return;
  }

  const { searchTerm } = await inquirer.prompt([
    {
      type: 'input',
      name: 'searchTerm',
      message: 'Enter search term:',
      validate: (input) => input.trim().length > 0 || 'Please enter a search term'
    }
  ]);

  const searchResults = todos.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (todo.description && todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (searchResults.length === 0) {
    console.log(chalk.yellow(`No todos found matching "${searchTerm}".`));
    return;
  }

  console.log(chalk.bold(`\nSearch Results for "${searchTerm}":`));
  console.log(chalk.gray("-------------------"));

  searchResults.forEach((todo: any, index: number) => {
    console.log(
      `${index + 1}. [${todo.completed ? chalk.green("X") : " "}] ${chalk.cyan(todo.title)} ${
        todo.description ? chalk.gray(`- ${todo.description}`) : ""
      }`
    );
  });

  console.log(chalk.gray("-------------------"));
  console.log(`Found: ${searchResults.length} todos\n`);
};
