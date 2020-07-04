import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className='todoList'>
      <form 
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <h1>Todo List</h1>
        <input type="text" ref={el => (input = el)} />
      
        <button className='but' type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);