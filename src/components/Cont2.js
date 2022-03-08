import React from 'react';
import styled from 'styled-components';
import square from './../images/collaboration.png';

const Cont2 = () => {
    return ( 
        <Contenedor>
            <BoxOne>
                <Title>
                    Collaboration has never been easier.
                </Title>
                <Paragraph>
                With Remix, you will be able to actively collaborate with developers in real-time. No more back-and-forth emails and Slack messages to get that design perfect.
                </Paragraph>
                <Button>Learn More ⇨</Button>
            </BoxOne>

            <BoxTwo>        
                <img 
                    src={square}
                    style={{width: '95%'}}
                />
            </BoxTwo>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Title = styled.h1`
    width: 100%;
    font-size: 3.3em;
    margin-top: 5%;

    @media (max-width: 800px) {
        font-size: 1.7em;
    }

    @media (max-width: 480px) {
        font-size: 1.3em;
    }
`

const Paragraph = styled.p`
    width: 85%;
    margin-bottom: 1em;

    @media (max-width: 800px) {
        margin: auto;
    }

    @media (max-width: 480px) {
        font-size: 0.8em;
    }
`

const BoxOne = styled.div`
    margin-left: 7em;
    
    @media (max-width: 800px) {
        text-align: center;
        font-size: 0.8;
        margin-left: 0;
    }
`

const BoxTwo = styled.div`
    width: 70%;

    @media (max-width: 800px) {
        margin: auto;
    }
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

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`
 
export default Cont2;