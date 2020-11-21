import React from 'react';
import styled from 'styled-components';

//Styles:
import { AddCircle } from '@styled-icons/ionicons-solid/AddCircle';
import { MagnifyingGlass } from '@styled-icons/foundation/MagnifyingGlass'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

const MainCardContainer = styled.div`
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 800px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const StyledButton = styled.button`
    padding: 5px 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: rgba(61, 90, 128);
    color: whitesmoke;
    border: none;
    border-radius: 5px;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

const StyledSpan = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const StyledCircle = styled(AddCircle)`
    width: 20px;
    margin-right: 7px;
`
const StyledMGlass = styled(MagnifyingGlass)`
    width: 20px;
    margin-right: 7px;
`
const StyledCardHeader = styled.h2`
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #293241;
`

//Render:

const StrainCard = ({name, collection, lacZ}) => {

    const renderCard = () => {
        if (collection && lacZ) {
            return (
                <MainCardContainer>
                    <StyledCardHeader>{name}</StyledCardHeader>
                    <ButtonContainer>
                        <StyledButton>
                            <StyledSpan>
                                <StyledMGlass />
                                Collection
                            </StyledSpan>
                        </StyledButton>
                        <StyledButton>
                            <StyledSpan>
                                <StyledMGlass />
                                LacZ
                            </StyledSpan>
                        </StyledButton>
                    </ButtonContainer>
                </MainCardContainer>
            )
        } else {
            return (
                <MainCardContainer>
                    <StyledCardHeader>{name}</StyledCardHeader>
                    <ButtonContainer>
                        <StyledButton>
                            <StyledSpan>
                                <StyledCircle />
                                Collection
                            </StyledSpan>
                        </StyledButton>
                        <StyledButton>
                            <StyledSpan>
                                <StyledCircle />
                                LacZ
                            </StyledSpan>
                        </StyledButton>
                    </ButtonContainer>
                </MainCardContainer>
            )
        }
    }

    return (
        <MainContainer>
            {renderCard()}
        </MainContainer>
    )
}

export default StrainCard;
