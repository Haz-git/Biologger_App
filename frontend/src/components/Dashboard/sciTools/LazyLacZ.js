import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNewStrains } from '../../../redux/userLacZ/LacZActions';

//Styles:
import { MainHeader, SecondaryHeader } from '../../signupPage/SignUpForm';

const MainContainer = styled.div`
    text-align: center;
    padding: 20px 20px;

`

const InputContainer = styled.div`
    display: flex;
    padding: 20px 20px;
    align-items: center;
    justify-content: center;
`

const StyledInput = styled.input`
    width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
`

const StyledButton = styled.button`
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-left: 20px;
    margin-right: 20px;
    border: none;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgb(5, 145, 62);
        transition: all .3s;
        border-radius: 5px;
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 121, 49);
        border-radius: 5px;
        z-index: -2;
    }

    &:hover {
        color: #fff;
    }

    &:hover::before {
        width: 100%;
    }
`


const LazyLacZ = ({ addNewStrains }) => {

    const [ strainInput, setStrainInput ] = useState('');

    const handleStrainSubmit = (e) => {
        e.preventDefault();

        addNewStrains(strainInput);
        setStrainInput('')
    }

    const handleInputChange = (e) => {
        setStrainInput(e.target.value);
    }

    return (
        <>
            <MainContainer>
                <MainHeader>Lac Z Assay</MainHeader>
                <div>
                    <SecondaryHeader>Add New Bacterial Strains</SecondaryHeader>
                    <form onSubmit={handleStrainSubmit}>
                        <InputContainer>
                            <div>
                                <StyledInput 
                                    onChange={handleInputChange} 
                                    placeholder='Name...'
                                    type='text'
                                    value={strainInput}
                                    autoComplete='off'
                                />
                            </div>
                            <div>
                                <StyledButton type='submit'>
                                    Add
                                </StyledButton>
                            </div>
                        </InputContainer>
                    </form>
                </div>
            </MainContainer>
        </>
    )
}


export default connect(null, { addNewStrains })(LazyLacZ);