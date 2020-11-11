import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Styles:
const MainCardContainer = styled.div`
    background-color: lightblue;
    padding: 10px 10px;
    border: 1px solid gray;
`
const CardInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const LinkContainer = styled.div`
    display: flex;
`

const StyledLink = styled(Link)`
    color: navy;
    text-decoration: none;
    margin-left: 10px;
    background-color: lightcyan;
    padding: 10px 10px;
    border: 1px solid white;
    border-radius: 5px;
`

const StyledTitle = styled.p`
    margin: 0;
    font-size: 20px;
`

const BioNoteCard = ({ name }) => {
    return (
        <MainCardContainer>
            <CardInfoContainer>
                <StyledTitle>{name}</StyledTitle>
                <LinkContainer>
                    <StyledLink to={`/readbionote/${name}`}>Read</StyledLink>
                    <StyledLink to={`/editbionote/${name}`}>Edit</StyledLink>
                    <StyledLink to={`/deletebionote/${name}`}>Delete</StyledLink>
                </LinkContainer>
            </CardInfoContainer>
        </MainCardContainer>
    )
}

/*Todo Implementations:
1. Add View button --> Renders out bionote with formatting
2. Add Delete button 
3. Add Edit button --> Opens editor with button with text + formatting + button for saving.

*/

export default BioNoteCard;