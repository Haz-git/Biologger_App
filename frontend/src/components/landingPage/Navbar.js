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

const DashboardNavbar = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 160px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
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
                <DashboardNavbar>
                    <DefaultLink to='/'>Logo/Home</DefaultLink>
                    <DefaultLink to='/dashboard'>My Dashboard</DefaultLink>
                    <DefaultLink to='/meetings'>Meetings</DefaultLink>
                    <DefaultLink to='/messenger'>Messenger</DefaultLink>
                    <DefaultLink to='/groups'>Groups</DefaultLink>
                    <DefaultLink to='/createbionote'>Create BioNote</DefaultLink>
                    <button onClick={() => logouthelper()}>Log out</button>
                </DashboardNavbar>
            )
        } else {
            return (
                <DefaultNavbar>
                    <DefaultLink to='/'>Logo/Home</DefaultLink>
                    <DefaultLink to='/signup'>Sign up</DefaultLink>
                    <DefaultLink to='/login' >Login</DefaultLink>
                </DefaultNavbar>
            )
        }
    }


    return (
        <>
            {renderNavOnJWT(JWT)}
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
