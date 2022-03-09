import React from 'react';
import styled from 'styled-components';
import people from './../images/people-ilustration.png'

const Cont3 = () => {
    return ( 
        <Contenedor>
            <BoxOne>
                <Title>Get the Ultimate Developer Hand Off Guide</Title>
                <Paragraph>
                A guide with 120+ hours worth of content to guide you on 
                how to perfectly hand over your designs to your developers. 
                Best part? It’s completely free.
                </Paragraph>
                <SearchContainer>
                    <Search placeholder='Enter email address' />
                    <Button>Send me the guide</Button>
                </SearchContainer>
            </BoxOne>
            <BoxTwo>
                <Image src={people} />
            </BoxTwo>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    color: ${({theme}) => theme.TextSecondary};
    display: flex;
    background-color: ${({theme}) => theme.BgSecondary};

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const BoxOne = styled.div`
    margin-left: 1em;
    
    @media (max-width: 800px) {
        text-align: center;
        font-size: 0.8;
        margin-left: 0;
    }
`

const BoxTwo = styled.div`
    width: 70%;
    display: flex;
    justify-content: end;
    align-items: flex-end;

    @media (max-width: 800px) {
        margin: auto;
    }
`

const Title = styled.h1`
    width: 100%;
    font-size: 3em;
    margin-top: 0.5em;

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

const SearchContainer = styled.div`
`

const Search = styled.input`
    margin-right: 1em;
    padding: 1.1em;
    border-radius: 10px;
    font-size: 1.1em;
    border: none;
    outline: none;
    width: 45%;

    @media (max-width: 480px) {
        width: 85%;
        padding: 1.1em;
        font-size: 0.9em;
        margin-bottom: 0.5em;
        margin-right: 0;
    }
`

const Button = styled.button`
    padding: 1.1em;
    font-weight: bold;
    border-radius: 10px;
    font-size: 1.1em;
    border: none;
    background-color: rgb(0, 0, 0, 0.6);
    color: white;
    transition: all .3s ease-in;
    cursor: pointer;

    &:hover{
        background-color: rgb(0, 0, 0, 0.8);
    }

    @media (max-width: 480px) {
        width: 85%;
        padding: 1.1em;
        font-size: 0.9em;
        margin-bottom: 0.5em;
    }
`

const Image = styled.img`
    width: 80%;
    margin-bottom: -1.9em;
`
 
export default Cont3;
 