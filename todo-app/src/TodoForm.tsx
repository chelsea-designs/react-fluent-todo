import React from 'react';

function TodoForm() {
  return (
    <form className='create-todo-form'>
      <label htmlFor='todo'>Task Name</label>
      <input type='text' id='todo'></input>
      <label htmlFor='description'>Task Description</label>
      <input type='text' id='description'></input>
      <label htmlFor='deadline'>Deadline</label>
      <input type='datetime-local' id='deadline'></input>
      <button className='btn'>Add Item</button>
    </form>
  );
}

export default TodoForm;
