import React from 'react';
import styled from 'styled-components';

//Styles:
import { AddCircle } from '@styled-icons/ionicons-solid/AddCircle';
import { MagnifyingGlass } from '@styled-icons/foundation/MagnifyingGlass'
import { Edit } from '@styled-icons/material/Edit';
import { DeleteForever } from '@styled-icons/material/DeleteForever';

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
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
;
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
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

    &:hover {
        background-color: rgba(152, 193, 217);
    }
`

const StyledEditButton = styled(StyledButton)`
    background-color: rgb(0, 102, 0);

    &:hover {
        background-color: rgba(0, 118, 0);
    }


`
const StyledDeleteButton = styled(StyledButton)`
    background-color: rgb(127, 3, 0);

    &:hover {
        background-color: rgba(148, 0, 0);
    }
`

const StyledSpan = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const StyledCircle = styled(AddCircle)`
    width: 20px;
    margin-right: 5px;
`
const StyledMGlass = styled(MagnifyingGlass)`
    width: 20px;
    margin-right: 5px;
`
const StyledEditIcon = styled(Edit)`
    width: 20px;
    margin-right: 5px;
`
const StyledDeleteIcon = styled(DeleteForever)`
    width: 20px;
    margin-right: 5px;
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
                    <HeaderContainer>
                        <StyledCardHeader>{name}</StyledCardHeader>
                    </HeaderContainer>
                    <ButtonContainer>
                        <StyledEditButton>
                            <StyledSpan>
                                <StyledEditIcon />
                                Edit
                            </StyledSpan>
                        </StyledEditButton>
                        <StyledDeleteButton>
                            <StyledSpan>
                                <StyledDeleteIcon />
                                Delete
                            </StyledSpan>
                        </StyledDeleteButton>
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
                        <StyledEditButton>
                            <StyledSpan>
                                <StyledEditIcon />
                                Edit
                            </StyledSpan>
                        </StyledEditButton>
                        <StyledDeleteButton>
                            <StyledSpan>
                                <StyledDeleteIcon />
                                Delete
                            </StyledSpan>
                        </StyledDeleteButton>
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
