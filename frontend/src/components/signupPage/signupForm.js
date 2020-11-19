import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import userSignUp from '../../redux/userSignUp/userSignUpActions';

//Styles:

const MainContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`

const ContentContainer = styled.div`
    display: flex;
    background-color:#F6F9FC;
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
    flex-grow: 1;
    text-align: center;
    background-color: lightblue;
    padding: 10px 10px;
`

const ImageContainer = styled.div`
    flex-grow: 1;
    background-color: navy;
`

const StyledField = styled(Field)`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`




//Render:
const SignUpForm = ({ handleSubmit, userSignUp }) => {

    const dispatchFormValues = formValues => {
        userSignUp(formValues);
    }

    return (
        <>
            <MainContainer>
                <ContentContainer>
                    <ImageContainer>
                        This should render an image.
                    </ImageContainer>
                    <form onSubmit={handleSubmit(dispatchFormValues)}>
                        <FormContainer>
                            <HeaderContainer>
                                <MainHeader>Join Biologger.</MainHeader>
                                <SecondaryHeader>Create an account to increase your research workflow by writing bio-note snippets, setting task reminders, and organizing work schedule.</SecondaryHeader>
                            </HeaderContainer>
                                <div>
                                    <div>
                                        <label>First Name</label>
                                        <StyledField name='firstName' component='input'></StyledField>
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <StyledField name='lastName' component='input'></StyledField>
                                    </div>
                                    <div>
                                        <label>Username</label>
                                        <StyledField name='userName' component='input'></StyledField>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Email Address</label>
                                        <StyledField name='email' component='input'></StyledField>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <StyledField name='password' component='input'></StyledField>
                                    </div>
                                    <div>
                                        <label>Confirm Password</label>
                                        <StyledField name='passwordConfirm' component='input'></StyledField>
                                    </div>
                                </div>
                            <div>
                                <button type='submit'>Submit</button>
                                <button type='reset'>Reset</button>
                            </div>
                        </FormContainer>
                    </form>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

//Connection to Redux, Redux-form:

const reduxSignUpForm = connect(null, { userSignUp })(SignUpForm);

export default reduxForm({
    form: 'SignUpForm'
})(reduxSignUpForm);