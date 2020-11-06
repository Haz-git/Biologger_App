import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewTask, getTasks } from '../../redux/userTaskLog/userTaskLogActions';
import TaskCard from './TaskCard';

const MDTodo = ({ addNewTask, getTasks, taskList }) => {
/*
    Todo: 
    We just need cards to render out the tasks now...We've implemented it so that getTasks() that will occur on component mount will return all of the stored tasks, and that addingANewTask will change the state of the list, effectively re-rendering the cards that will react to the state.

    UseMapStateToProps here to import the state and render out a list of cards. Make a new card component as well...

*/

    const [task, setTask] = useState('');

    useEffect(() => {
        getTasks();
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

    const renderTasks = () => {
        //Make render task card similar to render chat card
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

const mapStateToProps = state => {
    return {
        taskList: state.task.Tasks,
    }
}

export default connect(mapStateToProps, { addNewTask, getTasks })(MDTodo);