import React from 'react';
import styled from 'styled-components';
import { FigmaButton } from '../elements/figmaButton';
import {ReactComponent as imageDark} from './../images/hero-image--dark.svg';
import {ReactComponent as imageLight} from './../images/hero-image--light.svg';


const Cont1 = ({theme}) => {
    return ( 
        <>
            <Container>

                <ConteinerPart1>
                    <Title>Developer hand-off has never been easier.</Title>
                    <Paragraph>
                    Remix is a Figma and Sketch plugin that was made with Developers in mind. 
                    Create custom React components in seconds, copy CSS code in one click, and 
                    export your assets effortlessly.
                    </Paragraph>
                <FigmaButton>Get Figma</FigmaButton>
                </ConteinerPart1>


                <ConteinerPart2>
                    {theme === 'dark' ? <ImageDark /> : <ImageLight />}
                </ConteinerPart2>

            </Container>
            
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({theme}) => theme.TextPrimary};
    margin-top: -3em;

    @media (max-width: 800px) {
        flex-direction: column;
    }

`

const ConteinerPart1 = styled.div`
    width: 100%;
    height: 80%;

    @media (max-width: 800px) {
        text-align: center;
    }
`

const ConteinerPart2 = styled.div`
    width: 100%;
    height: 85%;
    margin: 0;
    padding: 0;
`

const Title = styled.h1`
    width: 100%;
    font-size: 3.3em;
    margin-top: 5%;

    @media (max-width: 800px) {
        font-size: 2em;
    }

    @media (max-width: 480px) {
        font-size: 1.7em;
    }
`

const Paragraph = styled.p`
    width: 85%;

    @media (max-width: 800px) {
        margin: auto;
        font-size: 0.8;
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 95%;
    }
`

const ImageDark = styled(imageDark)`
    width: 100%;
    height: 50%;
    padding: 0;

    @media (max-width: 800px) {
        margin-left: -1em;
    }
`

const ImageLight = styled(imageLight)`
    width: 100%;
    height: 80%;
    padding: 0;

    @media (max-width: 800px) {
        margin-left: -1em;
    }
`
 
export default Cont1;
