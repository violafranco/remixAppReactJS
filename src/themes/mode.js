import { createGlobalStyle } from "styled-components";

const Light = {
    BgPrimary: "#f5f5f5",
    BgSecondary: "#f7ca18",
    TextPrimary: "#000000",
    TextSecondary: "#595959",
    toggle: '#A3A3A3',
};

const Dark = {
    BgPrimary: "#1F2227",
    BgSecondary: "#f7ca18",
    TextPrimary: "#c6c8cd",
    TextSecondary: "#000000",
    toggle: '#A3A3A3',
};

const Themes = {
    light: Light,
    dark: Dark,
}

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500&display=swap');

    * {
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    }

    body {
        font-family: 'Space Grotesk', sans-serif;
        display: flex;
        justify-content: center;
        max-width: 100vw;
        background-color: ${({theme}) => theme.BgPrimary};  
    }

`

export default Themes;