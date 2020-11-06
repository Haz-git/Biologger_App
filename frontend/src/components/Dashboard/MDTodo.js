import React, { useState, useEffect } from 'react';

const MDTodo = () => {

    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(task + 'Has been submitted');
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
                        <input onChange={handleChange}type='text' placeholder='Add New Task'></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MDTodo;