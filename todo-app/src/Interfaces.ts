export interface ITodoItem {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
}

export interface ITodoFormProps {
  todos: ITodoItem[];
  newTitle: string;
  newDescription: string;
  setNewTitle(title: string): void;
  setNewDescription(description: string): void;
  setTodos(todos: ITodoItem[]): void;
}

export interface ITodoItemProps {
  todo: ITodoItem;
  deleteTodo(id: string): void;
  toggleComplete(id: string): void;
}

export interface ITodoListProps {
  todos: ITodoItem[];
  deleteTodo(id: string): void;
  toggleComplete(id: string): void;
}
