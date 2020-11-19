import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJWT } from '../../utils/jwthelper';


//Icons:
import {
    AiFillHome,
    AiOutlineUsergroupAdd,
    AiFillMessage,
    AiFillPhone,
    AiTwotoneCalendar,
} from 'react-icons/ai';

import { MdFolder } from 'react-icons/md';

import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

//Styling:

const DefaultNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #293241;
    align-items: center;

`
const NavLinks = styled.div`
    display: flex;
`

const DefaultLink = styled(Link)`
    text-decoration: none;
    padding: 20px 20px;
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    &:hover {
        background: rgba(238, 108, 77, .75);
    }
`

const DashboardNavbar = styled.div`
    height: 100%; 
    width: fit-content; 
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0;
    background-color: #0C0F31; 
    overflow-x: hidden; 
    padding-top: 20px;
`

const DashboardLink = styled(Link)`
    padding: 10px 10px;
    text-decoration: none;
    font-size: 25px;
    display: block;
    &:hover {
        background: salmon;
    }
`

//Component Structure:

const Navbar = ({ StateJwt }) => {

    const [JWT, setJWT] = useState(undefined);

    useEffect(() => {
        const jwt2 = getJWT();
        setJWT(jwt2);
    }, [StateJwt]);

    const iconColorDesign = (icon, color) => {
        return (
            <IconContext.Provider
                value={{ color: `${color}`}}
            >
                {icon}
            </IconContext.Provider>
        )
    }

    // <AiFillHome style={{ color=#B0D7FF}} />

    const renderNavOnJWT = jwt => {

        if (typeof jwt === 'object' && jwt !== null) {
            return (
                <DashboardNavbar>
                    <DashboardLink to='/dashboard'>{iconColorDesign(<AiFillHome />,'#ADD6FF')}</DashboardLink>
                    <DashboardLink to='/meetings'>{iconColorDesign(<AiFillPhone />,'#ADD6FF')}</DashboardLink>
                    <DashboardLink to='/messenger'>{iconColorDesign(<AiFillMessage />,'#ADD6FF')}</DashboardLink>
                    <DashboardLink to='/calendar'>{iconColorDesign(<AiTwotoneCalendar />,'#ADD6FF')}</DashboardLink>
                    <DashboardLink to='/createbionote'>{iconColorDesign(<MdFolder />,'#ADD6FF')}</DashboardLink>
                    <DashboardLink to='/logout'>{iconColorDesign(<BiExit />,'#ADD6FF')}</DashboardLink>
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
