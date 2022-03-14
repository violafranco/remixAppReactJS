import styled from 'styled-components';
import Header from './components/Header';
import Cont1Component from './components/Cont1';
import Cont2Component from './components/Cont2';
import Cont3Component from './components/Cont3';
import Cont4Component from './components/Cont4';
import Themes from '../src/themes/mode';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import './App.css'

const App = () => {

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        
        <Header theme={theme} setTheme={setTheme} />       

        <Cont1Component theme={theme} />
        <Cont2Component theme={theme}/>
        <Cont3Component theme={theme}/>
        <Cont4Component theme={theme}/>

      </ThemeProvider>
    </> 
   );
}

export default App;
