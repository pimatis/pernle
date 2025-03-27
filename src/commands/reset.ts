import chalk from "chalk";
import inquirer from "inquirer";
import { deleteDir } from "../store/db";

export const resetDb = async () => {
  console.clear();

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to delete the todo database directory? This cannot be undone.',
      default: false
    }
  ]);

  if (confirm) {
    try {
      deleteDir();
      console.log(chalk.green("Todo database directory deleted successfully!"));
    } catch (error) {
      console.log(chalk.red("Error deleting todo database directory:"), error);
    }
  } else {
    console.log(chalk.yellow("Operation cancelled."));
  }
};
