import React from 'react';
import styled from 'styled-components';

//Styles:
const MainCardContainer = styled.div`
    background-color: lightblue;
    padding: 10px 10px;
    border: 1px solid gray;
`
const StyledTitle = styled.p`
    margin: 0;
    font-size: 30px;
`

const BioNoteCard = ({ name }) => {
    return (
        <MainCardContainer>
            <StyledTitle>{name}</StyledTitle>
        </MainCardContainer>
    )
}

export default BioNoteCard;