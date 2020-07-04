import React, { Fragment } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import { useHistory } from 'react-router-dom'


 const List=()=> {
    let history = useHistory();

    return (
        <div className='todoList'>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
            <br></br><br></br><br></br>
            <button className='button1' onClick={()=>history.push('/')}>Go to Racine</button>

        </div>
    )
}

export default List
