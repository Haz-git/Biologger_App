import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/userTaskLog/userTaskLogActions';

//Icons:
import { FaCheckCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';

const MainTaskCardContainer = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 5px;
    border: 1px solid black;
`

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    margin-left: 10px;
    &:focus {
        outline: none;
    }
`

const TaskCard = ({ item, deleteTask }) => {

    const [ status, setStatus ] = useState('incomplete');

    const handleComplete = () => {
        setStatus('complete');
        console.log('This task has been completed');
    }

    const handleDelete = () => {
        //item refers to own item
        deleteTask(item);
    }

    const handleRefresh = () => {
        setStatus('incomplete');
    }

    const renderButton = () => {
        if (status === 'incomplete') {
            return (
                <StyledButton onClick={handleComplete}>
                    <FaCheckCircle />
                </StyledButton>
            )
        } else if (status === 'complete') {
            return (
                <>
                    <StyledButton onClick={handleDelete}>
                        <FaTrashAlt />
                    </StyledButton>
                    <StyledButton onClick={handleRefresh}>
                        <FaUndo />
                    </StyledButton>
                </>
            )
        }
    }

    const renderColor = () => {
        if (status === 'incomplete') {
            return '#73232C';
        } else if (status === 'complete') {
            return 'seagreen';
        }
    }

    return (
        <>
            <MainTaskCardContainer style={{ backgroundColor: `${renderColor()}`}}>
                <div>
                    {item}
                    {renderButton()}
                </div>
            </MainTaskCardContainer>
        </>
    )
}

export default connect(null, { deleteTask })(TaskCard);

/* log:11/7 

So now you have a responsive (and quite shitty) button. However, the style can always be improved after. What you need to do now is to:
1. create a deleteTask action creator that will send a POST request with your user ID to mongo
2. Create a deleteTask route in mongo, find the USER document, and delete the task with the same name, and save it. Response should be the updated taskList with the task deleted.
3. Dispatch the updated TaskList with response deleted. Create a case in the reducer and (remember, another action TYPE) to save and change the state.

*/