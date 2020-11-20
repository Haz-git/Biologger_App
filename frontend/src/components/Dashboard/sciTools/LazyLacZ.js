import React from 'react';
import styled from 'styled-components';

//Styles:
import { MainHeader, SecondaryHeader } from '../../signupPage/SignUpForm';
import { AddCircle } from '@styled-icons/ionicons-solid/AddCircle';

const MainContainer = styled.div`
    text-align: center;
    padding: 20px 20px;

`


const LazyLacZ = () => {
    return (
        <>
            <MainContainer>
                <MainHeader>Lac Z Assay</MainHeader>
                <div>
                    <SecondaryHeader>Add New Bacterial Strains</SecondaryHeader>
                    <form>
                    </form>
                </div>
            </MainContainer>
        </>
    )
}

export default LazyLacZ;