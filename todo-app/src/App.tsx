import './App.css';
import TodoForm from './TodoForm';
import {useState} from 'react';
import { ITodoItem } from './Interfaces';

function App() {
  const [newTitle, setNewTitle] = useState<string>('')
  const [newDescription, setNewDescription] = useState<string>('')
  const [deleteMode, setDeleteMode] = useState(false);
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (idToDelete: string): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != idToDelete;
      })
    );
  };


  return (
    <>
    <div className='hero-section'>
    <h1>Let's get it done!</h1>
    <TodoForm todos={todos} setTodos={setTodos} newTitle={newTitle} newDescription={newDescription} setNewTitle={setNewTitle} setNewDescription={setNewDescription}/>
    </div>
      <div className='todoList'>
      {todos.length === 0 && "No to do list items to display"}
      {todos.map((todo: ITodoItem, key: number) => {
        return (
          <ul  key={key} className='list'>
            <li className='todo-list-item'>
            <input type='checkbox' onClick={() => {toggleComplete(todo.id)}}/>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            {deleteMode ? (
        <>
          <p>really delete?</p>
          <button
            type="button"
            onClick={() => {
              setDeleteMode(false);
            }}
          >
            cancel
          </button>
          <button
            type="button"
            onClick={() => {
              deleteTodo(todo.id);
              setDeleteMode(false);
            }}
          >
            yes, delete
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            setDeleteMode(true);
          }}
        >
          delete
        </button>
      )}
            </li>
          </ul>
        )

      })}
      </div>
    </>
  );
}

export default App;
