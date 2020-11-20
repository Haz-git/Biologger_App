import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJWT } from '../../utils/jwthelper';
import faviconedit3 from '../../Img/faviconedit3.png';


//Icons:
import {
    AiFillHome,
    AiFillMessage,
    AiFillPhone,
    AiTwotoneCalendar,
} from 'react-icons/ai';

import { FaTools } from 'react-icons/fa';

import { MdFolder } from 'react-icons/md';

import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';

//Styling:

const DefaultNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #293241;
    align-items: center;
    margin: 0;

`
const NavLinks = styled.div`
    display: flex;
`

const DefaultLink = styled(Link)`
    text-decoration: none;
    margin-left: 40px;
    margin-right: 40px;
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    &::after {
        display: block;
        content: '';
        height: 3px;
        width: 0;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }

    &:hover::after {
        width: 100%;
        background: #ee6c4d;
    }
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
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
    text-align: center;

`

const StyledLinkDivider = styled.div`
    padding: 10px 10px;
    color: #ADD6FF;
`

const DashboardLink = styled(Link)`
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    font-size: 25px;
    display: block;

    ${StyledLinkDivider}:hover & {
        color: white;
    }
`

const StyledImg = styled.img`
    max-width: 500px;
    max-height: 85px;
    object-fit: cover;
`
const StyledLogoHeader = styled.h1`
    margin: 0;
    font-weight: 300;
    font-size: 50px;
    font-family: 'IM Fell English SC', serif;
`
const StyledLogoMiniContainer = styled.div`
    margin: -10px;

`
const StyledMiniLogo = styled.p`
    margin: 0;
    font-size: 17px;
    font-family: 'IM Fell English SC', serif;
`

const StyledLinkLabel = styled.label`
    display: block;
    font-family: 'Nunito', sans-serif;
    font-size: 10px;
    margin-top: 0px;

    ${StyledLinkDivider}:hover & {
        color: white;
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
                    <StyledLinkDivider>
                        <DashboardLink to='/dashboard'>{iconColorDesign(<AiFillHome />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>DASHBOARD</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/meetings'>{iconColorDesign(<AiFillPhone />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>MEETINGS</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/messenger'>{iconColorDesign(<AiFillMessage />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>MESSENGER</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/calendar'>{iconColorDesign(<AiTwotoneCalendar />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>CALENDAR</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/createbionote'>{iconColorDesign(<MdFolder />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>BIONOTES</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/scitools'>{iconColorDesign(<FaTools />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>SCI-TOOLS</StyledLinkLabel>
                    </StyledLinkDivider>
                    <StyledLinkDivider>
                        <DashboardLink to='/logout'>{iconColorDesign(<BiExit />,'#ADD6FF')}</DashboardLink>
                        <StyledLinkLabel>LOGOUT</StyledLinkLabel>
                    </StyledLinkDivider>
                </DashboardNavbar>
            )
        } else {
            return (
                <DefaultNavbar>
                    <LogoLink to='/'>
                        <StyledImg src={faviconedit3}>
                        </StyledImg>
                            <StyledLogoHeader>
                                BioLogger
                                <StyledLogoMiniContainer>
                                    <StyledMiniLogo>research workflow upgraded</StyledMiniLogo>
                                </StyledLogoMiniContainer>
                            </StyledLogoHeader>
                    </LogoLink>
                    <NavLinks>
                        <DefaultLink to='/signup'>Sign up</DefaultLink>
                        <DefaultLink to='/login' >Log In</DefaultLink>
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
