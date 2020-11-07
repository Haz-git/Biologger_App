import React, { useState } from 'react';
import styled from 'styled-components';

//Icons:
import { FaCheckCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

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
`

const TaskCard = ({ item }) => {

    const [ status, setStatus ] = useState('incomplete');

    const handleComplete = () => {
        setStatus('complete');
        console.log('This task has been completed');
    }

    const handleDelete = () => {
        console.log('Task should have action creator to be deleted now...');
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
                <StyledButton onClick={handleDelete}>
                    <FaTrashAlt />
                </StyledButton>
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

export default TaskCard;