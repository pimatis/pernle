import fs from "fs";
import path from "path";
import os from "os";

export const getTodoFilePath = () => {
  const todoDir = path.join(os.homedir(), ".todos");
  const todosFilePath = path.join(todoDir, "todos.json");

  if (!fs.existsSync(todoDir)) {
    fs.mkdirSync(todoDir);
  }

  if (!fs.existsSync(todosFilePath)) {
    fs.writeFileSync(todosFilePath, JSON.stringify([], null, 2));
  }

  return todosFilePath;
};

export const getTodos = () => {
  const todosFilePath = getTodoFilePath();
  const data = fs.readFileSync(todosFilePath, "utf8");
  return JSON.parse(data);
};

export const saveTodos = (todos: any[]) => {
  const todosFilePath = getTodoFilePath();
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

export const deleteDir = () => {
  const todoDir = path.join(os.homedir(), ".todos");
  const todosFilePath = path.join(todoDir, "todos.json");
  if (fs.existsSync(todosFilePath)) {
    fs.unlinkSync(todosFilePath);
  }

  if (fs.existsSync(todoDir)) {
    fs.rmdirSync(todoDir);
  }
};
