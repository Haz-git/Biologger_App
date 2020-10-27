import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logouthelper } from '../../utils/logouthelper';
import { connect } from 'react-redux';
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

const Navbar = ({ jwt }) => {

    const [JWT, setJWT] = useState(undefined);

    useEffect(() => {
        const jwt2 = getJWT();
        setJWT(jwt2);
    }, [jwt]);

    console.log(JWT);

    const renderNavOnJWT = flag => {

        if (typeof flag === 'string') {
            return (
                <>
                    <StyledLink to='/dashboard'>My Dashboard</StyledLink>
                    <StyledLink to='/meetings'>Meetings</StyledLink>
                    <StyledLink to='/messenger'>Messenger</StyledLink>
                    <StyledLink to='/groups'>Groups</StyledLink>
                    <StyledLink to='/createbionote'>Create BioNote</StyledLink>
                    <button onClick={() => logouthelper()}>Log out</button>
                </>
            )
        } else if (flag === undefined || flag === null) {
            return (
                <>
                    <StyledLink to='/signup'>Sign up</StyledLink>
                    <StyledLink to='/login' >Login</StyledLink>
                </>
            )
        }
    }


    return (
        <>
            <StyledNavbar>
                <StyledLink to='/'>Logo/Home</StyledLink>
                {renderNavOnJWT(JWT)}
            </StyledNavbar>
        </>
    )
}

const mapStateToProps = state => {
    if (!state.auth.userLogIn) {
        return {
            jwt: state.auth.userLogIn,
        }
    } else {
        return {
            jwt: state.auth.userLogIn.token,
        }
    }
}

export default connect(mapStateToProps)(Navbar);
