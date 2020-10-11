import React from 'react';
import styled from 'styled-components';

//Styling:

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: salmon;
`

const CenterNavbar = styled.div`
    display: flex;
    justify-content: space-around;

`
const StyledLink = styled.a`
    text-decoration: none;
    padding: 20px 20px;
    &:hover {
        background: lightblue;
    }
`

//Component Structure:

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink href='#'>Logo/Home</StyledLink>
            <CenterNavbar>
                <StyledLink href='#'>About Biologger</StyledLink>
                <StyledLink href='#'>Support and Services</StyledLink>
            </CenterNavbar>
            <StyledLink href='#'>Login</StyledLink>
        </StyledNavbar>
    )
}

export default Navbar;