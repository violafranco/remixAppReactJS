import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as logo} from './../images/remix-logo.svg'
import './../themes/themes.css';


const Header = () => {
    return (
        <Contenedor>
            <Logo><Icono /></Logo>
            <Nav>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
                <NavLink to='/forsketch'>For Sketch</NavLink>
            </Nav>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
`

const Logo = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`

const Nav = styled.h2`
    display: flex;
    font-size: 15px;

    a {
        color: #6b6b6b;
        padding: 17px;
        text-decoration: none;
        transition: all 1s;
    }

    a:hover {
        color: var(--primaryColor);
        text-decoration: none;
    }
`

const Icono = styled(logo)`
    width: 80%;
    height: auto;
`
 
export default Header;