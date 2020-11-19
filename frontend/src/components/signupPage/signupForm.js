import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import userSignUp from '../../redux/userSignUp/userSignUpActions';

//Styles:

const MainContainer = styled.div`
    background-color: white;
    padding: 20px 20px;
    text-align: center;
`
const HeaderContainer = styled.div`
    background-color: salmon;
    padding: 10px 10px;
`

const MainHeader = styled.h1`
    margin: 0;
    font-weight: 900;
    font-family: 'Catamaran', sans-serif;
`
const SecondaryHeader = styled.h2`
    margin: 0;
    font-size: 18px;
    font-family: 'Catamaran', sans-serif;
`


const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: lightblue;
    padding: 10px 10px;
`



//Render:
const SignUpForm = ({ handleSubmit, userSignUp }) => {

    const dispatchFormValues = formValues => {
        userSignUp(formValues);
    }

    return (
        <>
            <MainContainer>
                <HeaderContainer>
                <MainHeader>Join Biologger.</MainHeader>
                <SecondaryHeader>Create an account to increase your research workflow by writing bio-note snippets, setting task reminders, and organizing work schedule.</SecondaryHeader>
                </HeaderContainer>
                <form onSubmit={handleSubmit(dispatchFormValues)}>
                    <FormContainer>
                            <div>
                                <div>
                                    <label>First Name</label>
                                    <Field name='firstName' component='input'></Field>
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <Field name='lastName' component='input'></Field>
                                </div>
                                <div>
                                    <label>Username</label>
                                    <Field name='userName' component='input'></Field>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Email Address</label>
                                    <Field name='email' component='input'></Field>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <Field name='password' component='input'></Field>
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <Field name='passwordConfirm' component='input'></Field>
                                </div>
                            </div>
                    </FormContainer>
                    <div>
                        <button type='submit'>Submit</button>
                        <button type='reset'>Reset</button>
                    </div>
                </form>
            </MainContainer>
        </>
    )
}

//Connection to Redux, Redux-form:

const reduxSignUpForm = connect(null, { userSignUp })(SignUpForm);

export default reduxForm({
    form: 'SignUpForm'
})(reduxSignUpForm);