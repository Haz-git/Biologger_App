import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Styling:

const StyledNavbar = styled.div`
    display: flex;
    background-color: salmon;

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
        <>
            <StyledNavbar>
                <StyledLink to='/'>Logo/Home</StyledLink>
                <StyledLink to='/signup'>Sign up</StyledLink>
                <StyledLink to='/login'>Login</StyledLink>
            </StyledNavbar>
        </>
    )
}

export default Navbar;