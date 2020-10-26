import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getJWT } from '../../utils/jwthelper';

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

    const grabJWT = () => {
        const jwt = getJWT();

        if (jwt) {
            return true;
        } else {
            return false;
        }
    }

    const renderNavOnCookie = () => {
        const flag = grabJWT();
        if (flag === true) {
            return (
                <>
                    <StyledLink to='/logout'>Log Out</StyledLink>
                </>
            )
        } else if (flag === false) {
            return (
                <>
                    <StyledLink to='/signup'>Sign up</StyledLink>
                    <StyledLink to='/login'>Login</StyledLink>
                </>
            )
        }
    }

    //Original Component Render:
    // <StyledLink to='/'>Logo/Home</StyledLink>
    // <StyledLink to='/signup'>Sign up</StyledLink>
    // <StyledLink to='/login'>Login</StyledLink>
    
    return (
        <>
            <StyledNavbar>
                <StyledLink to='/'>Logo/Home</StyledLink>
                {renderNavOnCookie()}
            </StyledNavbar>
        </>
    )
}

export default Navbar;