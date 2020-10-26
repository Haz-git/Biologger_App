import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getJWT } from '../../utils/jwthelper';
import { logouthelper } from '../../utils/logouthelper';

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

    const [JWT, setJWT] = useState(undefined);

    const grabJWT = () => {
        const jwt = getJWT();
        setJWT(jwt);
        return jwt ? true : false;
    }

    useEffect(() => {
        grabJWT();
    }, [JWT]);

    const renderNavOnCookie = () => {

        console.log(JWT);
        if (JWT) {
            return (
                <>
                    <button onClick={() => logouthelper()}>Log out</button>
                </>
            )
        } else if (JWT === undefined || JWT === null) {
            return (
                <>
                    <StyledLink to='/signup'>Sign up</StyledLink>
                    <StyledLink to='/login'>Login</StyledLink>
                </>
            )
        }
    }

    
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