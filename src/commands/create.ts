import { v4 as uuidv4 } from "uuid";
import { saveTodos, getTodos } from "../store/db";

export const createTodo = (title: string, description?: string) => {
  console.clear();

  const todo = {
    id: uuidv4(),
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };

  let todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
};
