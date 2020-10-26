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
const LoginForm = ({ handleSubmit, userLogin, notifier }) => {

    const dispatchFormValues = formValues => {
        userLogin(formValues, notifier);
    }


    return (
        <>
            <MainContainer>
                <h1>Please enter the details below:</h1>
                <div>
                    <form onSubmit={handleSubmit(dispatchFormValues)}>
                        <div>
                            <label>Email Address</label>
                            <Field name='email' component='input'></Field>
                        </div>
                        <div>
                            <label>Password</label>
                            <Field name='password' component='input'></Field>
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                            <button type='reset'>Reset</button>
                        </div>
                    </form>
                </div>
            </MainContainer>
        </>
    )
}

//Connections:

const reduxLoginForm = connect(null, { userLogin })(LoginForm);

export default reduxForm({
    form: 'loginForm'
})(reduxLoginForm);