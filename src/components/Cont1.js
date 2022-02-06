import React from 'react';
import styled from 'styled-components';
import { FigmaButton } from '../elements/figmaButton';
import square from './../images/figma-selected.png';
import {ReactComponent as imageDark} from './../images/hero-image--dark.svg';
import {ReactComponent as imageLight} from './../images/hero-image--light.svg';


const Cont1 = ({theme}) => {
    return ( 
        <>
            <Title>Developer hand-off has never been easier.</Title>
            <Paragraph>
            Remix is a Figma and Sketch plugin that was made with Developers in mind. 
            Create custom React components in seconds, copy CSS code in one click, and 
            export your assets effortlessly.
            </Paragraph>
            <img 
                src={square}
                style={{width: '11.2em', height: '5.5em', position: 'relative', bottom: '11.3em', left: '6em'}}
            />
            <FigmaButton style={{position: 'relative', bottom: '5.5em'}}>Get Figma</FigmaButton>
        
            {theme === 'dark' ? <ImageDark /> : <ImageLight />}
            
        </>
    );
}

const Title = styled.h1`
    width: 100%;
    font-size: 3.3em;
    max-width: 51%;
    margin-top: 5%;
`

const Paragraph = styled.p`
    width: 50%;
    margin-bottom: 1em;
`

const ImageDark = styled(imageDark)`
    width: 50%;
    height: 50%;
    position: relative;
    bottom: 31em;
    left: 35em;
`

const ImageLight = styled(imageLight)`
    width: 50%;
    height: 50%;
    position: relative;
    bottom: 31em;
    left: 35em;
`


 
export default Cont1;
