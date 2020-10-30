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
    background-color: salmon; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
`

const DashboardLink = styled(Link)`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    display: block;
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
                <DashboardNavbar>
                    <DashboardLink to='/'>Logo/Home</DashboardLink>
                    <DashboardLink to='/dashboard'>My Dashboard</DashboardLink>
                    <DashboardLink to='/meetings'>Meetings</DashboardLink>
                    <DashboardLink to='/messenger'>Messenger</DashboardLink>
                    <DashboardLink to='/groups'>Groups</DashboardLink>
                    <DashboardLink to='/createbionote'>Create BioNote</DashboardLink>
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
