import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJWT } from '../../utils/jwthelper';
import { logouthelper } from '../../utils/logouthelper';


//Icons:
import {
    AiFillHome,
    AiFillFund,
    AiOutlineUsergroupAdd,
    AiFillMessage,
    AiFillPhone,
} from 'react-icons/ai';

import { MdFolder } from 'react-icons/md';

import { BiExit } from 'react-icons/bi';

//Styling:

const DefaultNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: salmon;
    align-items: center;

`
const NavLinks = styled.div`
    display: flex;
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
    width: fit-content; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: salmon; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
`

const DashboardLink = styled(Link)`
    padding: 10px 10px;
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
                    <DashboardLink to='/dashboard'><AiFillHome /></DashboardLink>
                    <DashboardLink to='/meetings'><AiFillPhone /></DashboardLink>
                    <DashboardLink to='/messenger'><AiFillMessage /></DashboardLink>
                    <DashboardLink to='/groups'><AiOutlineUsergroupAdd /></DashboardLink>
                    <DashboardLink to='/createbionote'><MdFolder /></DashboardLink>
                    <DashboardLink to='/logout'><BiExit /></DashboardLink>
                </DashboardNavbar>
            )
        } else {
            return (
                <DefaultNavbar>
                    <DefaultLink to='/'>BioLogger</DefaultLink>
                    <NavLinks>
                        <DefaultLink to='/signup'>Sign up</DefaultLink>
                        <DefaultLink to='/login' >Login</DefaultLink>
                    </NavLinks>
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
