import React from 'react'
import styled from 'styled-components';

//Styles:

const StyledBodyBlock = styled.div`
    text-align: center;
    padding: 20px 20px;
    background-color: lightslategray;
`


//Render:
const MainBodyblock = () => {
    return (
        <StyledBodyBlock>
            <h2>Biologger Features!</h2>
        </StyledBodyBlock>
    )
}

export default MainBodyblock;
