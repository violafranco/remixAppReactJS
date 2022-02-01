import styled from 'styled-components';
import './themes/themes.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ForSketch from './components/ForSketch';
import Pricing from './components/Pricing';

const App = () => {
  return ( 
    <>
      <ContenedorHeader>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/forsketch' element={<ForSketch />} />
        </Routes>
      </ContenedorHeader>
    </>
   );
}

const ContenedorHeader = styled.div`
  color: var(--primaryColor); 
`
 
export default App;
