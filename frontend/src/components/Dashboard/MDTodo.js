import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewTask, getTasks } from '../../redux/userTaskLog/userTaskLogActions';
import TaskCard from './TaskCard';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

//Styles:

const MainTodoContainer = styled.div`
    background-color: lightyellow;
    border: 1px solid black;
    height: 300px;
    width: 100%;
    overflow-y: scroll;
`

const MDTodo = ({ addNewTask, getTasks, taskList }) => {

    const [task, setTask] = useState('');

    useEffect(() => {
        getTasks();
    },[])

    const handleSubmit = e => {
        e.preventDefault();

        if(task.trim() === '') {
            alert('Please enter a value');
        } else {
            addNewTask(task);
            setTask('');
        }
    }

    const handleChange = e => {
        e.preventDefault();
        setTask(e.target.value);
    }

    const renderTasks = () => (
        taskList.map(task => (
            <TaskCard key={uuid()} item={task} />
        ))
    )

    return (
        <>
            <h2>Daily Task Log</h2>
            <MainTodoContainer>
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
            </MainTodoContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        taskList: state.task.Tasks,
    }
}

export default connect(mapStateToProps, { addNewTask, getTasks })(MDTodo);