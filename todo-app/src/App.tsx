import TaskForm from "./Components/TaskForm";
import { useState } from "react";
import { ITaskItem } from "./Interfaces";
import {
  FluentProvider,
  webLightTheme,
  LargeTitle,
  Button,
} from "@fluentui/react-components";
import TaskItem from "./Components/TaskItem";
import "./App.css";
import TaskList from "./Components/TaskList";

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newDescription, setNewTaskDescription] = useState<string>("");
  const [taskList, setTaskList] = useState<ITaskItem[]>([]);

  function handleDeleteTask(id: string) {
    const currentTaskList = taskList.filter((task) => task.id !== id);

    return setTaskList(currentTaskList);
  }

  const toggleTaskCompletion = (id: string) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container">
        <div className="hero-section">
          <LargeTitle>Todo List</LargeTitle>
          <TaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            newTaskTitle={newTaskTitle}
            newDescription={newDescription}
            setNewTaskTitle={setNewTaskTitle}
            setNewTaskDescription={setNewTaskDescription}
          />
        </div>
        <div className="task-list">
          <TaskList
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          ></TaskList>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
