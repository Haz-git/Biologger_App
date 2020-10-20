import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import userSignUp from '../../redux/userSignUp/userSignUpActions';

//Styles:

const MainContainer = styled.div`
    background-color: white;
    text-align: center;
`
const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: lightblue;
    padding: 10px 10px;
`


//Render:
const SignUpForm = () => {
    return (
        <>
            <MainContainer>
                <h1>Thank you for signing up!</h1>
                <h2>Please fill in the provided fields below:</h2>
                <FormContainer>
                    <div>
                        <div>
                            <label>First Name</label>
                            <Field name='firstName' component='input'></Field>
                        </div>
                    </div>
                </FormContainer>
            </MainContainer>
        </>
    )
}

//Connection to Redux, Redux-form:

const reduxSignUpForm = connect(null, { userSignUp })(SignUpForm);

export default reduxForm({
    form: 'SignUpForm'
})(reduxSignUpForm);