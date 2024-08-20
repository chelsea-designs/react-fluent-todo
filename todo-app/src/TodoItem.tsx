import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  Checkbox,
  Subtitle1,
  Body1,
} from "@fluentui/react-components";
import { DeleteFilled } from "@fluentui/react-icons";
import { ITodoItemProps } from "./Interfaces";

const TodoItem = ({ todo, deleteTodo, toggleComplete }: ITodoItemProps) => {
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : "incompleted"}`}>
        <div className="todo-text">
          <Subtitle1 block align="center">
            {todo.title}
          </Subtitle1>
          <Body1 block align="center">
            {todo.description}
          </Body1>
        </div>
        <div>
        <Button appearance='primary'
          onClick={() => {
            toggleComplete(todo.id);
          }}
        >{`${todo.completed ? "Mark Incomplete" : "Mark Complete"}`} </Button>
                <Dialog modalType="alert" open={deleteMode}>
          <DialogTrigger disableButtonEnhancement>
            <Button
              icon={<DeleteFilled />}
              iconPosition="before"
              onClick={() => {
                setDeleteMode(true);
              }}
            >
              {" "}
              Delete
            </Button>
          </DialogTrigger>
          <DialogSurface>
            <DialogBody>
              <DialogTitle>Delete Item</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this item?
              </DialogContent>
              <DialogActions>
                <DialogTrigger disableButtonEnhancement>
                  <Button
                    appearance="primary"
                    onClick={() => {
                      setDeleteMode(false);
                    }}
                  >
                    Cancel
                  </Button>
                </DialogTrigger>
                <Button
                  appearance="secondary"
                  onClick={() => {
                    setDeleteMode(false);
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
