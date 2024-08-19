export interface ITodoItem {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  }

  export interface Props {
    todos: ITodoItem[]
    newTitle: string,
    newDescription: string,
    setNewTitle(title: string): void,
    setNewDescription(description: string): void,
    setTodos(todos: ITodoItem[]): void,
  }