export interface ITaskItem {
  id: string;
  title: string;
  description?: string;
  isComplete: boolean;
}

export interface ITaskFormProps {
  taskList: ITaskItem[];
  newTaskTitle: string;
  newDescription: string;
  setNewTaskTitle(title: string): void;
  setNewTaskDescription(description: string): void;
  setTaskList(taskList: ITaskItem[]): void;
}

export interface ITaskItemProps {
  task: ITaskItem;
  handleDeleteTask(id: string): void;
  toggleTaskCompletion(id: string): void;
}

export interface ITaskListProps {
  taskList: ITaskItem[];
  handleDeleteTask(id: string): void;
  toggleTaskCompletion(id: string): void;
}
