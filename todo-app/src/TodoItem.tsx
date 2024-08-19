import React from 'react';

function TodoItem() {
  return (
    <ul className='list'>
    <li>
      <label>
        <input type='checkbox'/>Item 1
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
  </ul>
  );
}

export default TodoItem;
