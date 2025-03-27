import { program } from "commander";
import { createTodo } from "./src/commands/create";
import { listTodos } from "./src/commands/list";
import { completeTodo } from "./src/commands/complete";
import { completeAllTodos } from "./src/commands/complete";
import { deleteTodo } from "./src/commands/delete";
import { deleteAllTodos } from "./src/commands/delete";
import { searchTodos } from "./src/commands/search";
import { resetDb } from "./src/commands/reset";

program
  .command("create <title> [description]")
  .description("Create a new todo")
  .aliases(["new"])
  .action(createTodo);

program
  .command("list")
  .description("List all todos")
  .action(listTodos);

program
  .command("complete")
  .description("Complete a todo")
  .action(completeTodo);

program
  .command("complete-all")
  .description("Complete all todos")
  .action(completeAllTodos);

program
  .command("delete")
  .description("Delete a todo")
  .action(deleteTodo);

program
  .command("delete-all")
  .description("Delete all todos")
  .action(deleteAllTodos);

program
  .command("search")
  .description("Search all todos")
  .action(searchTodos)

program
  .command("reset")
  .description("Reset todo database")
  .action(resetDb)

program.parse();
