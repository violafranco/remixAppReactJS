import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from './Cont1';
import square from './../images/collaboration.png';

const Cont2 = () => {
    return ( 
        <Contenedor>
            <ContenedorTxt>
                <Title style={{fontSize:'2.3em'}}>
                    Collaboration has never been easier.
                </Title>
                <Paragraph>
                With Remix, you will be able to actively collaborate with developers in real-time. No more back-and-forth emails and Slack messages to get that design perfect.
                </Paragraph>
                <Button>Learn More ⇨</Button>
            </ContenedorTxt>
            
                <img 
                    src={square}
                    style={{width: '45%', height: '40%', position: 'relative', bottom: '17.5em', left: '50%'}}
                />
        </Contenedor>
    );
}

const Contenedor = styled.div`
    position: relative;
    bottom: 35em;
`

const ContenedorTxt = styled.div`

`

const Button = styled.a`

    width: 13%;
    cursor: pointer;
    margin-left: 8px;
    background-image: linear-gradient(#b38f00, #b38f00);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;
    animation: all 1s;
    transition: background-size 500ms;

    &:hover{
        background-size: 100% 100%;
        background-position-x: left;
        transform: scale(0.7);
    }
    
`
 
export default Cont2;