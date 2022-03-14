import React from 'react';
import styled from 'styled-components';
import check from './../images/yellow-checkmark.svg';

const Cont4 = () => {
    return ( 
        <Container>
            <Cards>
                <Title>Basic</Title>
                <Price>$39<span>/mo</span></Price>
                <Paragraph>
                    Suited for small teams with minimal developer handoffs.
                </Paragraph>
                <Li>Web access only.</Li>
                <Li>20 Handoffs per month.</Li>
                <Li>2 members.</Li>
                <Li>Offline editing only.</Li>
                <Button>Suscribe</Button>
            </Cards>

            <CardRecomended>
                <Title>Starter</Title>
                <Price>$59<span>/mo</span></Price>
                <Paragraph>
                    Suited for medium businesses with a lot of handoffs.
                </Paragraph>
                <Li>Web & Figma Plugin.</Li>
                <Li>60 Handoffs per month.</Li>
                <Li>4 members.</Li>
                <Li>Live editing.</Li>
                <Button>Suscribe</Button>
            </CardRecomended>

            <Cards>
                <Title>Pro</Title>
                <Price>$129<span>/mo</span></Price>
                <Paragraph>
                    Suited for enterprises with daily developer handoffs.
                </Paragraph>
                <Li>Web & Figma Plugin.</Li>
                <Li>500+ Handoffs per month.</Li>
                <Li>Unlimited members.</Li>
                <Li>OLive editing.</Li>
                <Button>Suscribe</Button>
            </Cards>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 1.5em;
    color: ${({theme}) => theme.TextPrimary};

    @media (max-width: 800px) {
        margin-left: 3em;
        flex-direction: column;
    }
`

const Cards = styled.div`
    text-align: center;
    width: 28%;

    @media (max-width: 800px) {
        width: 90%;
    }
`

const CardRecomended = styled.div`
    width: 25%;
    background-color: #434450;
    text-align: center;
    border-radius: 15px;
    color: #c6c8cd;


    @media (max-width: 800px) {
        width: 90%;
    }
`

const Title = styled.h3`
    color: ${({theme}) => theme.BgSecondary};
    font-size: 1.7em;
`

const Price = styled.h2`
    font-size: 3.2em;

    & > span{
        font-size: 0.4em;
    }
`

const Paragraph = styled.p`

`

const Li = styled.li`
    text-align: justify;
    list-style-type: none;

    &:before{
        content: url(${check});
        margin: 0.5em;
        position: relative;
        top: 0.37em;
    }
`

const Button = styled.button`
    width: 60%;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    font-size: 1em;
    padding: 1em;
    font-weight: bold;
    background-color: ${({theme}) => theme.BgSecondary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover{
        background-color: #a88600;
    }
`
 
export default Cont4;