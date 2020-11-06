import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../../redux/userTaskLog/userTaskLogActions';

const MDTodo = ({ addNewTask }) => {

    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addNewTask(task);
        console.log(task + 'Has been submitted');
        setTask('');
    }

    const handleChange = e => {
        e.preventDefault();
        console.log(e.target.value);
        setTask(e.target.value);
    }

    return (
        <>
            <h2>Task Log</h2>
            <div>
                <div>
                    Tasks should be here.
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={handleChange}
                            type='text' 
                            placeholder='Add New Task'
                            value={task}
                            autoComplete='off'
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
//Passing in null for time being:

export default connect(null, { addNewTask })(MDTodo);