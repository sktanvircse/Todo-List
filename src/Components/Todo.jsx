import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
     
    
    return (
          
        <div className='Todo'>
            
            <div className='Todotask'>
            <input type="checkbox"  onClick={()=>toggleComplete(task.id)} />
            <p className={`${task.completed?'completed':""}`}>{task.task}</p>
            </div>
                
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)} />
                <FontAwesomeIcon onClick={()=>deleteTodo(task.id)} icon={faTrash} />
            </div>
        </div>
        
    );
};

export default Todo;