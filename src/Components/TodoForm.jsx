import React,{useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");
    
     const handleForm = (e)=>{
         e.preventDefault();
         addTodo(value)
         setValue("")
     }

     
     
     
    return (
        <form className='TodoForm' onSubmit={handleForm}>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder="What's the plan for tasks today?" />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};

export default TodoForm;