import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import userSignUp from '../../redux/userSignUp/userSignUpActions';
import signupImg from '../../Img/signupImg.jpg';

//Styles:

const MainContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 20px 20px;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    background-color:#F6F9FC;
    text-align: center;
    border: none;
    border-radius: 8px;

`
const HeaderContainer = styled.div`
    background-color: salmon;
    padding: 10px 10px;
`

const MainHeader = styled.h1`
    margin: 0;
    font-weight: 900;
    font-size: 40px;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 30px;
    font-family: 'Catamaran', sans-serif;
`
const SecondaryHeader = styled.h2`
    margin: 0;
    font-size: 22px;
    padding: 10px 10px;
    font-family: 'Catamaran', sans-serif;
`

const FormContainer = styled.div`
    flex-grow: 1;
    text-align: center;
    background-color: lightblue;
    padding-top: 15px;
    padding-left: 80px;
    padding-right: 80px;
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
    border: 2px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
`

const StyledLabel = styled.label`
    font-family: 'Nunito', sans-serif, Helvetica;
`

const InputContainer = styled.div`
    padding-top: 50px;
`

const InputFieldContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
`

const ButtonContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 20px;
`

const StyledButton = styled.button`
    background-color: #569a59;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    font-family: 'Nunito', sans-serif, Helvetica;
`
const StyledImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
                        <StyledImg src={signupImg}></StyledImg>
                    </ImageContainer>
                    <form onSubmit={handleSubmit(dispatchFormValues)}>
                        <FormContainer>
                            <HeaderContainer>
                                <MainHeader>Join The Colony</MainHeader>
                                <SecondaryHeader>Create an account to increase your research workflow by writing bio-note snippets, setting task reminders, and organizing work schedule.</SecondaryHeader>
                            </HeaderContainer>
                                <InputContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>First Name</StyledLabel>
                                        <StyledField name='firstName' component='input'></StyledField>
                                    </InputFieldContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>Last Name</StyledLabel>
                                        <StyledField name='lastName' component='input'></StyledField>
                                    </InputFieldContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>Username</StyledLabel>
                                        <StyledField name='userName' component='input'></StyledField>
                                    </InputFieldContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>Email Address</StyledLabel>
                                        <StyledField name='email' component='input'></StyledField>
                                    </InputFieldContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>Password</StyledLabel>
                                        <StyledField name='password' component='input' type='password'></StyledField>
                                    </InputFieldContainer>
                                    <InputFieldContainer>
                                        <StyledLabel>Confirm Password</StyledLabel>
                                        <StyledField name='passwordConfirm' component='input' type='password'></StyledField>
                                    </InputFieldContainer>
                                </InputContainer>
                            <ButtonContainer>
                                <StyledButton type='submit'>Sign Up</StyledButton>
                            </ButtonContainer>
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