import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const StyledLink = styled(Link)`
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
            <StyledLink to='#'>Logo/Home</StyledLink>
            <CenterNavbar>
                <StyledLink to='#'>About Biologger</StyledLink>
                <StyledLink to='#'>Support and Services</StyledLink>
            </CenterNavbar>
            <StyledLink to='/signup'>Login Or Sign up</StyledLink>
        </StyledNavbar>
    )
}

export default Navbar;