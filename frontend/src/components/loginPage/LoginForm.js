import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import userLogin from '../../redux/userLogin/userLoginActions';

//Styles:
const MainContainer = styled.div`
    text-align: center;
    padding: 10px 10px;
    background-color: lightblue;
`


//Render:
const LoginForm = ({ handleSubmit, userLogin }) => {
    return (
        <>
            <MainContainer>
                <h1>Test</h1>
            </MainContainer>
        </>
    )
}

//Connections:

const reduxLoginForm = connect(null, { userLogin })(LoginForm);

export default reduxForm({
    form: 'loginForm'
})(reduxLoginForm);