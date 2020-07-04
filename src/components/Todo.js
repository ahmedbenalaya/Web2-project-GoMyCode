import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li className='todo'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  ><b>{text}</b>
    
  </li>
);

export default Todo;