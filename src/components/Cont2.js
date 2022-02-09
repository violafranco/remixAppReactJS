import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from './Cont1';
import circle from './../images/circle-arrow.svg'

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
                <Button>Learn More</Button>
            </ContenedorTxt>

            <ContenedorPhoto>

            </ContenedorPhoto>
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
    font-weight: bold;
    transition: all .2s;
    padding: 10px 20px;
    border-radius: 100px;
    background: ${({theme}) => theme.BgSecondary};
    color: ${({theme}) => theme.TextSecondary};
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    font-size: 15px;

    &:hover{
        background: #e0b819;
    }

    &:before{
        content: url(${circle});
        ;
    }
    
`

const ContenedorPhoto = styled.div`

`
 
export default Cont2;