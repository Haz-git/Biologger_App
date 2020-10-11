import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
    text-align: center;
    padding: 30px 30px;
    background-color: lightcyan;
`

const Mainbackdrop = () => {
    return (
        <StyledBackdrop>
            <h1>Welcome to Biologger.</h1>
            <h2>Optimize your Lab workflow here.</h2>
        </StyledBackdrop>
    )
}

export default Mainbackdrop;