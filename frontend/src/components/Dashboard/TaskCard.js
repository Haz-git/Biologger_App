import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/userTaskLog/userTaskLogActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

//Icons:
import { FaCheckCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUndo } from 'react-icons/fa';

const MainTaskCardContainer = styled(Card)`
    display: grid;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
    grid-template-columns: 85% 15%;

`

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    margin-left: 10px;
    &:focus {
        outline: none;
    }
`
const RenderContainer = styled(Card.Body)`
    display: flex;
    padding: 5px 5px;
    justify-content: space-between;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`
const RenderButtonContainer = styled.div`
    display: flex;
`

//Render:

const TaskCard = ({ item, deleteTask }) => {

    const [ status, setStatus ] = useState('incomplete');

    const handleComplete = () => {
        setStatus('complete');
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
                    <RenderButtonContainer>
                        <StyledButton onClick={handleDelete}>
                            <FaTrashAlt />
                        </StyledButton>
                        <StyledButton onClick={handleRefresh}>
                            <FaUndo />
                        </StyledButton>
                    </RenderButtonContainer>
                </>
            )
        }
    }

    const renderColor = () => {
        if (status === 'incomplete') {
            return '#943943';
        } else if (status === 'complete') {
            return 'seagreen';
        }
    }

    return (
        <>
            <MainTaskCardContainer>
                <RenderContainer style={{ backgroundColor: `${renderColor()}`}}>
                    {item}
                </RenderContainer>
                {renderButton()}
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