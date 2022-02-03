import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as logo} from './../images/remix-logo.svg';
import {ReactComponent as logoDark} from './../images/remix-logo-dark.svg';
import './../themes/themes.css';
import Switch from '../elements/switch';
import { useState } from 'react';
import Themes from '../themes/mode';
import { ThemeProvider } from 'styled-components';

const Header = () => {

    const [theme, setTheme] = useState('dark');

    return (
        <>
            <ThemeProvider theme={Themes[theme]} >
                <Contenedor>
                    <Logo><Icono /></Logo>
                    <Nav>
                        <NavLink to='/product'>Product</NavLink>
                        <NavLink to='/pricing'>Pricing</NavLink>
                        <NavLink to='/forsketch'>For Sketch</NavLink>
                    </Nav>

                    <Switch theme={theme} setTheme={setTheme} />
                </Contenedor>
            </ThemeProvider>
        </>
    );
}

const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    transition: all 0.5s ease-in;
`

const Logo = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: transparent;
`

const Nav = styled.h2`
    display: flex;
    font-size: 15px;

    a {
        color: ${({theme}) => theme.TextPrimary};
        padding: 17px;
        text-decoration: none;
        transition: all 1s;
    }

    a:hover {
        color: ${({theme}) => theme.BgSecondary};
        text-decoration: none;
    }
`

const Icono = styled(logo)`
    width: 80%;
    height: auto;
`
 
export default Header;