import styled from 'styled-components';
import figma from './../images/figma-logo.svg';

export const FigmaButton = styled.button`
    width: 11em;
    height: 3.5em;
    background: ${({theme}) => theme.BgSecondary};
    border: none;
    border-radius: 1em;
    margin-top: 0.5em;
    margin-left: 0.6em;
    transition: all 0.3s ease 0s;
    animation: all 1s;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    padding-bottom: 1em;

    &:hover{
        transform: translateY(-5px);
        background: #e0b819 ;
    }

    &:active{
        transform: translateY(-1px);
    }

    &:before{
        content: url(${figma});
        margin: 0.5em;
        position: relative;
        top: 0.37em;
    }
`