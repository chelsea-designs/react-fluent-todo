import { randomUUID } from "crypto";
import React, { ChangeEvent } from "react";
import { ITodoItem, ITodoFormProps } from "./Interfaces";
import { AddFilled } from "@fluentui/react-icons";
import { Button, Field, Input } from "@fluentui/react-components";

const TodoForm = ({
  todos,
  setTodos,
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
}: ITodoFormProps) => {
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const newTodoItem: ITodoItem = {
      id: crypto.randomUUID(),
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTitle("");
    setNewDescription("");
    console.log(todos);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "title") {
      setNewTitle(e.target.value);
    } else {
      setNewDescription(e.target.value);
    }
  };

  const isTitleEmpty = (newTitle: string) => {
    if (newTitle !== "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <form className="create-todo-form">
        <Field label="Task Name" required>
          <Input
            value={newTitle}
            name="title"
            onChange={handleChange}
            type="text"
            id="title"
          />
        </Field>
        <Field label="Task Description">
          <Input
            value={newDescription}
            onChange={handleChange}
            type="text"
            id="description"
          />
        </Field>
        <Button
          className="btn-submit"
          icon={<AddFilled />}
          iconPosition="before"
          appearance="primary"
          onClick={handleSubmit}
          disabled={isTitleEmpty(newTitle)}
        >
          Add Todo
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
