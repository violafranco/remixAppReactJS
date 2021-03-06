import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as logo} from './../images/remix-logo.svg';
import Switch from '../elements/switch';
import Themes from '../themes/mode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../themes/mode';
import { FigmaButton } from '../elements/figmaButton';

const Header = ({theme, setTheme}) => {

    return (
        <>
            <ThemeProvider theme={Themes[theme]} >
                <GlobalStyle />
                <Contenedor>
                    <BoxOne>
                        <Logo><Icono /></Logo>
                        <Nav>
                            <NavLink to='/product'>Product</NavLink>
                            <NavLink to='/pricing'>Pricing</NavLink>
                            <NavLink to='/forsketch'>For Sketch</NavLink>
                        </Nav>
                    </BoxOne>

                    <BoxTwo>
                        <Switch theme={theme} setTheme={setTheme} />
                        <FigmaButton>Get Figma</FigmaButton>
                        <Nav>
                            <NavLink style={{fontSize:'1.1em'}} to='/signin'>Sign in</NavLink>
                        </Nav>
                    </BoxTwo>
                </Contenedor>
            </ThemeProvider>
        </>
    );
}

const Contenedor = styled.div`
    display: flex;
    justify-content: space-evenly;
    transition: all 0.5s ease-in;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 480px) {
        flex-direction: row;
    }
`

const BoxOne = styled.div`
    display: flex;

    @media (max-width: 800px) {
        margin: auto;
    }
`

const BoxTwo = styled.div`
    display: flex;

    @media (max-width: 800px) {
        margin: auto;
    }
`

const Logo = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: transparent;
    width: 10rem;

    #logo_remix{
        fill: ${({theme}) => theme.TextPrimary};
    }

    @media (max-width: 480px) {
        width: 11rem;
    }
`

const Nav = styled.h2`
    display: flex;
    font-size: 15px;

    a {
        color: ${({theme}) => theme.TextPrimary};
        padding: 17px;
        text-decoration: none;
        transition: all ease 0.3s;
    }

    a:hover {
        color: ${({theme}) => theme.BgSecondary};
        text-decoration: none;
    }

    @media (max-width: 480px) {
        display: none;
    }

    @media (max-width: 800px) {
        font-size: 0.8em;
    }
`

const Icono = styled(logo)`
    width: 80%;
    height: auto;
`
 
export default Header;