import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    background-color: salmon;

`

const Navbar = () => {
    return (
        <StyledNavbar>
            <a href='#'>Logo/Home</a>
        </StyledNavbar>
    )
}

export default Navbar;