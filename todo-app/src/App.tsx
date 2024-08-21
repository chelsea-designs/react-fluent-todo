import TodoForm from "./TodoForm";
import { useState } from "react";
import { ITodoItem } from "./Interfaces";
import {
  FluentProvider,
  webLightTheme,
  LargeTitle,
  Button,
} from "@fluentui/react-components";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  function deleteTodo(id: string) {
    const currentTodos = todos.filter((todo) => todo.id !== id);

    return setTodos(currentTodos);
  }

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container">
        <div className="hero-section">
          <LargeTitle>Todo List</LargeTitle>
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            newTitle={newTitle}
            newDescription={newDescription}
            setNewTitle={setNewTitle}
            setNewDescription={setNewDescription}
          />
        </div>
        <div className="todo-list">
          <TodoList todos={todos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}></TodoList>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
