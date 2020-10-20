import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: white;
    text-align: center;
`

const mainHeader = styled.h1`
    color: red;
    padding-top: 5px;
    padding-bottom: 5px;
`

const SignUpForm = () => {
    return (
        <>
            <MainContainer>
                <h1>Thank you for signing up!</h1>
                <h2>Please fill in the provided fields below:</h2>
            </MainContainer>
        </>
    )
}

export default SignUpForm;