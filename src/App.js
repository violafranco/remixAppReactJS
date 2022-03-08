import styled from 'styled-components';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ForSketch from './components/ForSketch';
import Pricing from './components/Pricing';
import SignIn from './components/SignIn';
import Cont1Component from './components/Cont1';
import Cont2Component from './components/Cont2';
import Cont3Component from './components/Cont3';
import Themes from '../src/themes/mode';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import './App.css'

const App = () => {

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Routes>
          <Route path='/' element={<Header theme={theme} setTheme={setTheme} />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/forsketch' element={<ForSketch />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>

        <Cont1Component theme={theme} />
        <Cont2Component theme={theme}/>

      </ThemeProvider>
    </> 
   );
}

  
        /*<ContainerMiddle>
          <Cont2Component theme={theme}/>
        </ContainerMiddle>

        <ContainerMiddle>
          <Cont3Component theme={theme}/>
        </ContainerMiddle>*/


 
export default App;
