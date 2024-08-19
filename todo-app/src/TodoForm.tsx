import { randomUUID, UUID } from 'crypto';
import React, { ChangeEvent } from 'react';
import { ITodoItem, Props } from './Interfaces';
 
const TodoForm = ({ todos, setTodos, newTitle, setNewTitle, newDescription, setNewDescription }: Props) => {

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()

        const newTodoItem : ITodoItem = {id: crypto.randomUUID(), title: newTitle, description: newDescription, completed: false};
        setTodos([...todos, newTodoItem]);
        setNewTitle('');
        setNewDescription('');
        console.log(todos)

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name==='title') {setNewTitle(e.target.value)}
        else {setNewDescription(e.target.value)}
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='create-todo-form'>
        <label htmlFor='title'>Task Name</label>
        <input value={newTitle} name='title' onChange={handleChange} type='text' id='title'></input>
        <label htmlFor='description'>Task Description</label>
        <input value={newDescription} onChange={handleChange} type='text' id='description'></input>
        <button className='btn'>Add Item</button>
    </form>
    </>
  );
}

export default TodoForm;
