import React from 'react';
import styled from 'styled-components';
import {ReactComponent as logo} from './../images/remix-logo.svg';

const Footer = () => {
    return ( 
        <Container>
            <Logo><Icono /></Logo>
            <Paragraph>Remix is a Figma and Sketch plugin that was made with Developers in mind. Create custom React components in seconds, copy CSS code in one click, and export your assets effortlessly.</Paragraph>
        
            <BoxOne>
                <Options>
                    <Title>Supported</Title>
                    <Li>Sketch</Li>
                    <Li>Figma</Li>
                </Options>

                <Options>
                    <Title>Developers</Title>
                    <Li>API</Li>
                    <Li>Documentation</Li>
                </Options>

                <Options>
                    <Title>Company</Title>
                    <Li>Career</Li>
                    <Li>Support</Li>
                    <Li>Culture</Li>
                </Options>
            </BoxOne>

            <BoxTwo>
                <Paragraph>© Remix 2022</Paragraph>
            </BoxTwo>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: ${({theme}) => theme.BgSecondary};
    color: ${({theme}) => theme.TextSecondary};
    margin-top: 1.5em;
    margin-bottom: -2em;
    margin-left: -2em;
    margin-right: -1.85em;
`
const Logo = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: transparent;
    width: 10rem;

    #logo_remix{
        fill: ${({theme}) => theme.BgPrimary};
    }

    @media (max-width: 480px) {
        width: 11rem;
    }
`

const Icono = styled(logo)`
    width: 80%;
    height: auto;

    #logo_remix_disc{
        fill: ${({theme}) => theme.BgPrimary};
    }
`

const Paragraph = styled.p`
    margin-left: 1em;
`

const BoxOne = styled.div`
   display: flex;
   justify-content: space-evenly;
`

const Options = styled.div`
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 0.7em;
    }
`
const Title = styled.h2`
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 1.4em;
    }
`

export const Li = styled.li`
    text-align: center;
    list-style-type: none;
`

const BoxTwo = styled.div`
   text-align: center;
   margin-bottom: -1.2em;
`

export default Footer;