import React from "react";
import AddTodo from "./components/AddTodo";
import RemoveTodo from "./components/RemoveTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <RemoveTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
