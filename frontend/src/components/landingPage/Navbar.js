import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJWT } from '../../utils/jwthelper';
import { logouthelper } from '../../utils/logouthelper';

//Styling:

const DefaultNavbar = styled.div`
    display: flex;
    background-color: salmon;

`

const DefaultLink = styled(Link)`
    text-decoration: none;
    padding: 20px 20px;
    &:hover {
        background: lightblue;
    }
`

//Component Structure:

const Navbar = ({ StateJwt }) => {

    const [JWT, setJWT] = useState(undefined);

    useEffect(() => {
        const jwt2 = getJWT();
        setJWT(jwt2);
    }, [StateJwt]);

    console.log(JWT);

    const renderNavOnJWT = jwt => {

        if (typeof jwt === 'object' && jwt !== null) {
            return (
                <div>
                    <DefaultLink to='/dashboard'>My Dashboard</DefaultLink>
                    <DefaultLink to='/meetings'>Meetings</DefaultLink>
                    <DefaultLink to='/messenger'>Messenger</DefaultLink>
                    <DefaultLink to='/groups'>Groups</DefaultLink>
                    <DefaultLink to='/createbionote'>Create BioNote</DefaultLink>
                    <button onClick={() => logouthelper()}>Log out</button>
                </div>
            )
        } else {
            return (
                <>
                    <DefaultLink to='/signup'>Sign up</DefaultLink>
                    <DefaultLink to='/login' >Login</DefaultLink>
                </>
            )
        }
    }


    return (
        <>
            <DefaultNavbar>
                <DefaultLink to='/'>Logo/Home</DefaultLink>
                {renderNavOnJWT(JWT)}
            </DefaultNavbar>
        </>
    )
}

const mapStateToProps = state => {
    if (!state.auth.userLogIn) {
        return {
            StateJwt: state.auth.userLogIn,
        }
    } else {
        return {
            StateJwt: state.auth.userLogIn.token,
        }
    }
}

export default connect(mapStateToProps)(Navbar);
