import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = ({theme, setTheme}) => {

    const [position, setPosition] = useState(false);

    const changeMode = () => {
        if(theme === 'light'){
            setTheme('dark')
            changePosition()
        } else {
            setTheme('light')
            changePosition()
        }
    }

    const changePosition = () => {
        if(position === false){
            setPosition(true)
        } else {
            setPosition(false)
        }
    }

    return ( 
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwiitchBGC>
                        <ButtonSwitch onClick={() => changeMode()} position={position} ></ButtonSwitch>
                    </SwiitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    );
};

const SwitchContainer = styled.div`
    background-color: transparent ;
    transition: all 0.5s ease-in;
`

const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding-top: 11px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`

const SwiitchBGC = styled.div`
    position: relative;
    width: 50px;
    height: 30px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.toggle};
    transition: all 1s ease-in;
`

const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 5px;
    left: ${({position}) => (position ? '25px' : '5px')};
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease-in;
    outline: none;
`








 
export default Switch;