import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewTask, getTasks } from '../../redux/userTaskLog/userTaskLogActions';
import TaskCard from './TaskCard';
import { v4 as uuid } from 'uuid'

const MDTodo = ({ addNewTask, getTasks, taskList }) => {

    const [task, setTask] = useState('');

    useEffect(() => {
        getTasks();
        console.log(taskList);
    },[])

    const handleSubmit = e => {
        e.preventDefault();

        if(task.trim() === '') {
            console.log(task.trim());
            alert('Please enter a value');
        } else {
            addNewTask(task);
            console.log(task + 'Has been submitted');
            setTask('');
        }
    }

    const handleChange = e => {
        e.preventDefault();
        console.log(e.target.value);
        setTask(e.target.value);
    }

    const renderTasks = () => (
        taskList.map(task => (
            <TaskCard key={uuid()} item={task} />
        ))
    )

    return (
        <>
            <h2>Task Log</h2>
            <div>
                <div>
                    {renderTasks()}
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

const mapStateToProps = state => {
    return {
        taskList: state.task.Tasks,
    }
}

export default connect(mapStateToProps, { addNewTask, getTasks })(MDTodo);